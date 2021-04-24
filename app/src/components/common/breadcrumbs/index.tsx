import * as React from "react"
import { Link } from "react-router-dom"

import { BreadcrumbInterface } from "~/types/breadcrumb"

import "./styles.scss"

interface BreadcrumbsProps {
  list: BreadcrumbInterface[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ list }: BreadcrumbsProps) => {
  return (
    <div className="breadcrumbs">
      {list.map((item, index) => (
        <div key={item.url} className="breadcrumbs__item">
          <Link
            to={item.url}
            className={`breadcrumbs__name ${index === list.length - 1 ? "breadcrumbs__name_latest" : ""}`}
          >
            {item.name}
          </Link>
          {index !== list.length - 1 ? <div className="breadcrumbs__line"> </div> : ""}
        </div>
      ))}
    </div>
  )
}

export default Breadcrumbs
