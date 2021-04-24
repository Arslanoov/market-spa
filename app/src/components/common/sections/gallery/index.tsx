import * as React from "react"

import FirstImage from "~/assets/images/mock/gallery/1.jpg"
import SecondImage from "~/assets/images/mock/gallery/2.jpg"

import "./styles.scss"

const Gallery: React.FC = () => {
  return (
    <div className="gallery container">
      <div className="gallery__wrapper">
        <img className="gallery__item" src={FirstImage} alt="" />
        <img className="gallery__item" src={SecondImage} alt="" />
        <img className="gallery__item" src={FirstImage} alt="" />
        <img className="gallery__item" src={SecondImage} alt="" />
      </div>
    </div>
  )
}

export default Gallery
