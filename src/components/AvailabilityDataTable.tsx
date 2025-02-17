import "./AvailabilityDataTable.css";

import { Player } from "../data/players";

import { formatPlayerStatus } from "../utils/formatters";
import JerseyIcon from "./JerseyIcon";
import PlayerAvailabilityDesc from "./PlayerAvailabilityDesc";
import LastPitchCell from "./LastPitchCell";

import { PiBaseballCap } from "react-icons/pi";
import { GrStatusGood } from "react-icons/gr";
import { GrStatusWarning } from "react-icons/gr";
import { MdOutlineEditNote } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
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
          <th>
            <GrStatusGood className="table-icon" />
            <span className="header-label">Status</span>
          </th>
          <th>
            <MdOutlineEditNote className="table-icon" />
            <span className="header-label">Description</span>
          </th>
          <th>
            <IoCalendarNumberOutline className="table-icon" />
            <span className="header-label">Last Pitched</span>
          </th>
          <th>
            <CiBaseball className="text-4xl inline-block px-2 " />
            <span className="header-label">Pitch Count</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.number}>
            <td>
              <JerseyIcon
                fill="#ddd"
                width="70"
                number={player.number}
                name={player.name}
              />
            </td>
            <td>
              <div className="center-cell-content">
                {player.status === "Available" ? (
                  <GrStatusGood className="text-4xl inline-block px-2 text-green-500" />
                ) : player.status === "Partial" ? (
                  <GrStatusWarning className="text-4xl inline-block px-2 text-yellow-500" />
                ) : (
                  <MdOutlineCancel className="text-4xl inline-block px-2 text-red-500" />
                )}
                <span
                  className={"status-tag " + formatPlayerStatus(player.status)}
                >
                  {player.status}
                </span>
              </div>
            </td>
            <td>
              <PlayerAvailabilityDesc player={player} />
            </td>
            <td className="md:w[auto] w[140px]">
              <LastPitchCell lastPitched={player.lastPitched} />
            </td>
            <td>
              <div className="center-cell-content">
                <CiBaseball className="table-icon" />
                <span className="large-table-number">{player.pitchCount}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
