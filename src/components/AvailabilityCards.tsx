import "./AvailabilityCards.css";

import { Player } from "../data/players";
import { formatPlayerStatus } from "../utils/formatters";

import {
  RenderPlayerStatus,
  RenderPitchCount,
  RenderPitchDateString,
  CenterCell,
  RenderPitcherDescription,
} from "./Renderers";

import { formatDate } from "../utils/formatters";

import JerseyIcon from "./JerseyIcon";

export default function AvailabilityCards(props: { players: Player[] }) {
  const players = props.players;

  return (
    <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
      {players.map((player) => (
        <AvailabilityCard player={player} />
      ))}
    </div>
  );
}

function AvailabilityCard(props: { player: Player }) {
  const player = props.player;
  return (
    <div
      key={player.number}
      className={"pitcher-avail-card " + formatPlayerStatus(player.status)}
    >
      <CenterCell>
        <JerseyIcon
          status={player.status}
          fill="#fff"
          width="70"
          number={player.number}
          name={player.name}
        />
      </CenterCell>
      <div className="flex grow flex-col">
        <div className="flex flex-row justify-between p-2">
          <RenderPlayerStatus status={player.status} />
          <RenderPitchDateString date={formatDate(player.lastPitched)} />
        </div>
        <div className="block pl-4">
          <RenderPitcherDescription player={player} />
          <div className="flex flex-row justify-end">
            <RenderPitchCount pitchCount={player.pitchCount} />
          </div>
        </div>
      </div>
    </div>
  );
}
