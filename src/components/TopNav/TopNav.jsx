import React from "react";
import AltNavList from "../AltNavList";
import InfoList from "../InfoList";

function TopNav() {
  return (
    <div className="d-flex justify-content-between">
      <nav>
        <ul className="d-flex justify-content-between">
          <AltNavList />
        </ul>
      </nav>
      <nav>
        <div className="d-flex justify-content-between">
          <InfoList />
        </div>
      </nav>
    </div>
  );
}

export default TopNav;
