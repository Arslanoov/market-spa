import * as React from "react"

import ViewFilter from "~/components/common/filters/view"
import SelectFilter from "~/components/common/filters/select"

import "./styles.scss"

const FiltersRow: React.FC = () => {
  return (
    <div className="filters-row">
      <div className="filters-row__item">
        <ViewFilter />
      </div>

      <div className="filters-row__item">
        <div className="filters-row__prefix">Sort by</div>
        <SelectFilter
          minWidth="20rem"
          filters={[
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
          ]}
        />
      </div>

      <div className="filters-row__item">
        <div className="filters-row__prefix">Show</div>
        <SelectFilter
          minWidth="7.6rem"
          filters={[
            {
              id: 1,
              value: 16,
            },
            {
              id: 2,
              value: 12,
            },
            {
              id: 3,
              value: 10,
            },
            {
              id: 4,
              value: 5,
            },
          ]}
        />
      </div>
    </div>
  )
}

export default FiltersRow
