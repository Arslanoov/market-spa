import * as React from "react"

interface HamburgerProps {
  linesCount?: number
}

import "./styles.scss"

const Hamburger: React.FC<HamburgerProps> = ({ linesCount = 3 }: HamburgerProps) => {
  const lines = []
  for (let i = 0; i < linesCount; i++) {
    lines.push(
      <div className="hamburger__line" key={i}>
        {" "}
      </div>
    )
  }

  return <div className="hamburger">{lines}</div>
}

export default Hamburger
