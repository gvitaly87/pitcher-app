import "./AvailabilityCards.css";

import { Player } from "../data/players";

// import { formatPlayerStatus } from "../utils/formatters";

// import { PiBaseballCap } from "react-icons/pi";
// import { GrStatusGood } from "react-icons/gr";
// import { GrStatusWarning } from "react-icons/gr";
// import { MdOutlineEditNote } from "react-icons/md";
// import { MdOutlineCancel } from "react-icons/md";
// import { IoCalendarNumberOutline } from "react-icons/io5";
// import { CiBaseball } from "react-icons/ci";

import JerseyIcon from "./JerseyIcon";

export default function AvailabilityCards(props: { players: Player[] }) {
  const players = props.players;

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {players.map((player) => (
        <AvailabilityCard player={player} />
      ))}
    </div>
  );
}

function AvailabilityCard(props: { player: Player }) {
  const player = props.player;
  return (
    <div key={player.number}>
      <JerseyIcon
        fill="#ddd"
        width="70"
        number={player.number}
        name={player.name}
      />
      <div>{player.status}</div>
      <div>description</div>
      <div>last pitch</div>
      <div>pitch count</div>
    </div>
  );
}
