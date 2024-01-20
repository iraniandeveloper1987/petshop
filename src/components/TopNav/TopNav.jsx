import React from "react"
import AltNavList from "../AltNavList"
import InfoList from "../InfoList"

function TopNav() {
  return (
    <div>
      <nav>
        <ul>
          <AltNavList />
        </ul>
      </nav>
      <nav>
        <ul>
          <InfoList />
        </ul>
      </nav>
    </div>
  )
}

export default TopNav
