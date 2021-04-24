import * as React from "react"

import { TagInterface } from "~/types/tag"

import DropdownIcon from "~/assets/images/filters/icons/dropdown.png"

import "./styles.scss"

interface TagFilterProps {
  title: string
  tags: TagInterface[]
}

const TagFilter: React.FC<TagFilterProps> = ({ title, tags }: TagFilterProps) => {
  const [isCollapsed, setCollapsed] = React.useState(false)

  return (
    <div className="tag-filter">
      <div className="tag-filter__row">
        <div className="tag-filter__title">{title}</div>
        <img className="tag-filter__dropdown" src={DropdownIcon} alt="" />
      </div>
      <div className="tag-filter__row">
        <div className="tag-filter__list">
          {tags.map((tag) => (
            <div key={tag.id} className="tag-filter__item">
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TagFilter
