import "./Coach.css";

import BullpenAvailability from "../components/BullpenAvailability";
import TodaysProgram from "../components/TodaysProgram";
// import SideNav from "../components/SideNav";

export default function Coach() {
  return (
    <>
      {/* <aside>
        <SideNav />
      </aside> */}
      <main>
        <BullpenAvailability />
        <TodaysProgram />
      </main>
    </>
  );
}
