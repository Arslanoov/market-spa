import * as React from "react"

import ListFilter from "~/components/common/filters/list"

import "./styles.scss"
import SquareFilter from "~/components/common/filters/square"

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
            name: "$5000.00 +",
          },
        ]}
      />

      <div className="filters-sidebar__line"> </div>

      <SquareFilter
        title="Filter by color"
        items={[
          {
            id: 1,
            background: "#ed4238",
          },
          {
            id: 2,
            background: "#f7941f",
          },
          {
            id: 3,
            background: "#faec31",
          },
          {
            id: 4,
            background: "#8dc540",
          },
          {
            id: 5,
            background: "#27aae2",
          },
          {
            id: 6,
            background: "#91288f",
          },
          {
            id: 7,
            background: "#04a59d",
          },
          {
            id: 8,
            background: "#eb2a7b",
          },
          {
            id: 9,
            background: "#ffffff",
          },
        ]}
        withBorder
      />

      <div className="filters-sidebar__line"> </div>

      <SquareFilter
        title="Filter by size"
        items={[
          {
            id: 1,
            value: 24,
          },
          {
            id: 2,
            value: 28,
          },
          {
            id: 3,
            value: 32,
          },
          {
            id: 4,
            value: 36,
          },
          {
            id: 5,
            value: 40,
          },
          {
            id: 6,
            value: 44,
          },
          {
            id: 7,
            value: 48,
          },
          {
            id: 8,
            value: 52,
          },
          {
            id: 9,
            value: 56,
          },
        ]}
        withActiveColor
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
