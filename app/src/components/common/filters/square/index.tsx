import * as React from "react"

import { FilterItemInterface } from "~/types/filter"

import "./styles.scss"

interface SquareFilterProps {
  title: string
  withBorder?: boolean
  withActiveColor?: boolean
  items: FilterItemInterface[]
  titleStyles?: React.CSSProperties
}

const SquareFilter: React.FC<SquareFilterProps> = ({
  title,
  items,
  withBorder = false,
  withActiveColor = false,
  titleStyles = null,
}: SquareFilterProps) => {
  const [selected, setSelected] = React.useState<number>(1)

  return (
    <div className="square-filter">
      <div className="square-filter__title" style={titleStyles}>
        {title}
      </div>
      <div className="square-filter__list">
        {items.map((item) => (
          <div
            key={item.id}
            className={`
              square-filter__item
              ${selected === item.id && withActiveColor ? "square-filter__item_colored" : ""}
              ${selected === item.id && withBorder ? "square-filter__item_selected" : ""}
              ${"#ffffff" === item.background && withBorder ? "square-filter__item_bordered" : ""}
            `}
            style={{
              backgroundColor: withActiveColor ? "" : item.background,
              color: withActiveColor ? "" : item.color,
            }}
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SquareFilter
