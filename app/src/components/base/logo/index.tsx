import * as React from "react"

import "./styles.scss"

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <h1 className="logo__title">
        s<span className="logo__dot">.</span>u<span className="logo__dot">.</span>m<span className="logo__dot">.</span>o
      </h1>
      <h2 className="logo__subtitle">watch</h2>
    </div>
  )
}

export default Logo
