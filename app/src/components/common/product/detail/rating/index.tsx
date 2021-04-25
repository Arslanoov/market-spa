import * as React from "react"

import "./styles.scss"

interface RatingProps {
  starsCount: number
  totalStarsCount?: number
}

const Rating: React.FC<RatingProps> = ({ starsCount, totalStarsCount = 5 }: RatingProps) => {
  const stars = []
  for (let i = 0; i < totalStarsCount; i++) {
    stars.push(<div key={i} className={`rating__item ${i < starsCount ? "rating__item_active" : ""}`} />)
  }

  return <div className="rating">{stars}</div>
}

export default Rating
