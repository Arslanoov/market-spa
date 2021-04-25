import * as React from "react"

import { FilterItemInterface } from "~/types/filter"

import "./styles.scss"

const SortFilter: React.FC = () => {
  const [filters, setFilters] = React.useState<FilterItemInterface[]>([
    {
      id: 1,
      value: "Default sorting",
    },
    {
      id: 2,
      value: "Latest",
    },
    {
      id: 3,
      value: "Most popular",
    },
  ])

  return (
    <div className="filter-sort">
      <select className="filter-sort__select" name="sort" id="sort">
        {filters.map((filter) => (
          <option className="filter-sort__option" key={filter.id} value={filter.value}>
            {filter.value}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SortFilter
