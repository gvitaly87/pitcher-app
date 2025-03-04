import "./AvailabilityDataTable.css";

import { Player } from "../data/players";

import JerseyIcon from "./JerseyIcon";

import {
  RenderPitchCount,
  RenderPlayerStatus,
  CenterCell,
  RenderPitchDate,
  RenderPitcherDescription,
} from "./Renderers";

import { PiBaseballCap } from "react-icons/pi";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineEditNote } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { CiBaseball } from "react-icons/ci";

export default function AvailabilityDataTable(props: { players: Player[] }) {
  const players = props.players;

  return (
    <table data-testid="data-table" className="pitcher-avail-table">
      <thead>
        <tr>
          <th>
            <PiBaseballCap className="table-icon" />
            <span className="header-label">Pitcher</span>
          </th>
          {/* <th>
            <GrStatusGood className="table-icon" />
            <span className="header-label">Status</span>
          </th> */}
          <th>
            <CiBaseball className="inline-block px-2 text-4xl" />
            <span className="header-label">Pitch Count</span>
          </th>
          <th>
            <IoCalendarNumberOutline className="table-icon" />
            <span className="header-label">Last Pitched</span>
          </th>
          <th>
            <MdOutlineEditNote className="table-icon" />
            <span className="header-label">Description</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.number}>
            <td>
              <JerseyIcon
                fill="#ddd"
                status={player.status}
                width="70"
                number={player.number}
                name={player.name}
              />
            </td>
            {/* <td>
              <RenderPlayerStatus status={player.status} />
            </td> */}
            <td>
              <CenterCell>
                <RenderPitchCount pitchCount={player.pitchCount} />
              </CenterCell>
            </td>
            <td className="md:w[auto] w[140px]">
              <RenderPitchDate lastPitched={player.lastPitched} />
            </td>
            <td>
              <CenterCell>
                <RenderPitcherDescription player={player} />
              </CenterCell>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
