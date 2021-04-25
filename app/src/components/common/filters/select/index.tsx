import * as React from "react"

import { FilterItemInterface } from "~/types/filter"

import "./styles.scss"

interface SelectFilterProps {
  filters: FilterItemInterface[]
  minWidth?: string
}

const SortFilter: React.FC<SelectFilterProps> = ({ filters, minWidth }: SelectFilterProps) => {
  return (
    <div className="filter-select">
      <select
        className="filter-select__select"
        name="sort"
        id="sort"
        style={{
          minWidth,
        }}
      >
        {filters.map((filter) => (
          <option className="filter-select__option" key={filter.id} value={filter.value}>
            {filter.value}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SortFilter
