import * as React from "react"

import EyeIcon from "~/assets/images/card/icons/eye.png"
import FavoriteIcon from "~/assets/images/card/icons/favorite.png"

import "./styles.scss"

const CardControl: React.FC = () => {
  return (
    <div className="card-control">
      <div className="card-control__item">Add to cart</div>
      <div className="card-control__item">
        <img className="card-control__icon" src={EyeIcon} alt="" />
      </div>
      <div className="card-control__item">
        <img className="card-control__icon" src={FavoriteIcon} alt="" />
      </div>
    </div>
  )
}

export default CardControl
