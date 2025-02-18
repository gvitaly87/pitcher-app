import "./Renderers.css";

import { Player } from "../data/players";

//utils
import { subtractDates } from "../utils/math";
import { formatDate } from "../utils/formatters";

//react-icons
import { GrStatusGood } from "react-icons/gr";
import { GrStatusWarning } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
import { formatPlayerStatus } from "../utils/formatters";
import { CiBaseball } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa";
import { PiClockUser } from "react-icons/pi";
import { IconType } from "react-icons";

export function RenderPlayerStatus(props: { status: string }) {
  return (
    <div className="player-status">
      {props.status === "Available" ? (
        <GrStatusGood className="inline-block px-2 text-4xl text-green-500" />
      ) : props.status === "Partial" ? (
        <GrStatusWarning className="inline-block px-2 text-4xl text-yellow-500" />
      ) : (
        <MdOutlineCancel className="inline-block px-2 text-4xl text-red-500" />
      )}
      <span className={"status-tag " + formatPlayerStatus(props.status)}>
        {props.status}
      </span>
    </div>
  );
}

export function RenderPitchCount(props: { pitchCount: number }) {
  return (
    <>
      <CiBaseball className="mx-2 text-2xl" />
      <span className="text-xl">{props.pitchCount}</span>
    </>
  );
}

export function RenderPitchDate(props: { lastPitched: Date }) {
  const today = new Date();
  const days = subtractDates(today, props.lastPitched);

  return (
    <div className="last-pitched-cell">
      <div className="days-since">{days}</div>
      <div className="labels">
        <div className="days-since-label">days ago</div>
        <RenderPitchDateString date={formatDate(props.lastPitched)} />
      </div>
    </div>
  );
}

export const RenderPitchDateString = (props: { date: string }) => (
  <div className="text-sm font-light text-gray-500">{props.date}</div>
);

// Renders an icon, as well as a number and its description
function RenderDescription(props: {
  description: string;
  displayNumber?: number;
  Icon: IconType;
}) {
  return (
    <div className="pitcher-availability">
      <div className="icon">
        <props.Icon className="mx-1 inline-block text-2xl" />
        {props.displayNumber && <span>{props.displayNumber}</span>}
      </div>
      <div className="label">{props.description}</div>
    </div>
  );
}

// Renders the description of a pitcher's availability
export function RenderPitcherDescription(props: { player: Player }) {
  const player = props.player;

  if (player.status === "Partial")
    return (
      <RenderDescription
        displayNumber={player.remainingPitches}
        description="pitches remaining"
        Icon={CiBaseball}
      />
    );
  if (player.status === "Not Available") {
    const today = new Date();
    const nextPitch = player.nextPitch || today;
    const days = subtractDates(nextPitch, today);

    return (
      <RenderDescription
        displayNumber={days}
        description="days rest"
        Icon={PiClockUser}
      />
    ); //TODO: make sure nextPitch is not undefined
  }
  return (
    <RenderDescription
      description="fully available"
      Icon={FaRegCalendarCheck}
    />
  );
}

export const CenterCell = (props: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center">
    {props.children}
  </div>
);
