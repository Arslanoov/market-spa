import * as React from "react"

import ThumbImage from "~/assets/images/mock/thumb/1.jpg"

import "./styles.scss"

const ThumbImages: React.FC = () => {
  return (
    <div className="thumb-images">
      <img className="thumb-images__item" src={ThumbImage} alt="" />
      <img className="thumb-images__item" src={ThumbImage} alt="" />
      <img className="thumb-images__item" src={ThumbImage} alt="" />
      <img className="thumb-images__item" src={ThumbImage} alt="" />
    </div>
  )
}

export default ThumbImages
