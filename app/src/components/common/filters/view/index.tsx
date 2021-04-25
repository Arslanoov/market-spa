import * as React from "react"

import ListIcon from "~/assets/images/filters/icons/list.png"
import GridIcon from "~/assets/images/filters/icons/grid.png"

import "./styles.scss"

const ViewFilter: React.FC = () => {
  return (
    <div className="view-filter">
      <img className="view-filter__item" src={ListIcon} alt="" />
      <img className="view-filter__item" src={GridIcon} alt="" />
    </div>
  )
}

export default ViewFilter
