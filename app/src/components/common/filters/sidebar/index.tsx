import * as React from "react"

import ListFilter from "~/components/common/filters/list"

import "./styles.scss"

const FiltersSidebar: React.FC = () => {
  return (
    <div className="filters-sidebar">
      <ListFilter
        title="Categories"
        filters={[
          {
            id: 1,
            name: "All s.u.m.o Watches",
          },
          {
            id: 2,
            name: "Men’s watch",
          },
          {
            id: 3,
            name: "Women’s watch",
          },
          {
            id: 4,
            name: "Leather watch",
          },
          {
            id: 5,
            name: "Electric watch",
          },
        ]}
      />

      <div className="filters-sidebar__line"> </div>

      <ListFilter
        title="Filter by price"
        filters={[
          {
            id: 1,
            name: "All",
          },
          {
            id: 2,
            name: "$0.00 - $100.00",
          },
          {
            id: 3,
            name: "$100.00 - $500.00",
          },
          {
            id: 4,
            name: "$500.00 - $1000.00",
          },
          {
            id: 5,
            name: "$1000.00 - $5000.00",
          },
          {
            id: 6,
            name: "$ 5000.00 +",
          },
        ]}
      />

      <div className="filters-sidebar__line"> </div>

      <ListFilter
        title="Filter by manufacturer"
        filters={[
          {
            id: 1,
            name: "Rolex",
          },
          {
            id: 2,
            name: "Citizen",
          },
          {
            id: 3,
            name: "Omega",
          },
          {
            id: 4,
            name: "Casio",
          },
        ]}
      />

      <div className="filters-sidebar__line"> </div>
    </div>
  )
}

export default FiltersSidebar
