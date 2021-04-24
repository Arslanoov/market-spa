import * as React from "react"

import { FilterInterface } from "~/types/filter"

import DropdownIcon from "~/assets/images/filters/icons/dropdown.png"

import "./styles.scss"

interface FiltersListProps {
  title: string
  filters: FilterInterface[]
}

const ListFilter: React.FC<FiltersListProps> = ({ title, filters }: FiltersListProps) => {
  const [isCollapsed, setCollapsed] = React.useState(false)

  return (
    <div className="filter">
      <div className="filter__row">
        <div className="filter__title">{title}</div>
        <img className="filter__dropdown" src={DropdownIcon} alt="" />
      </div>
      <div className="filter__row">
        <div className="filter__list">
          {filters.map((filter) => (
            <div key={filter.id} className="filter__item">
              {filter.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListFilter
