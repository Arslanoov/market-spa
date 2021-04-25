import * as React from "react"

import ViewFilter from "~/components/common/filters/view"
import SortFilter from "~/components/common/filters/sort"

import "./styles.scss"

const FiltersRow: React.FC = () => {
  return (
    <div className="filters-row">
      <ViewFilter />
      <SortFilter />
    </div>
  )
}

export default FiltersRow
