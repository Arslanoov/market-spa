import * as React from "react"

import "./styles.scss"

const Welcome: React.FC = () => {
  return (
    <div className="container welcome">
      <div className="welcome__title">s.u.m.o</div>
      <div className="welcome__content">
        Content
        <div className="welcome__image">Image</div>
      </div>
    </div>
  )
}

export default Welcome
