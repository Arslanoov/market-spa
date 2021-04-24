import * as React from "react"

import OverviewAdd from "~/components/common/product/overview-add"

import Watch from "~/assets/images/overview/watch.png"

import "./styles.scss"

const Overview: React.FC = () => {
  return (
    <div
      className="overview"
      style={{
        backgroundImage: `url(${Watch})`,
      }}
    >
      <img className="overview__product" src={Watch} alt="" />
      <div className="overview__add-button">
        <OverviewAdd order="first" />
      </div>
      <div className="overview__add-button">
        <OverviewAdd order="second" />
      </div>
      <div className="overview__add-button">
        <OverviewAdd order="third" />
      </div>
    </div>
  )
}

export default Overview
