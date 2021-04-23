import * as React from "react"

import Image from "~/assets/images/welcome/image.jpg"
import Sign from "~/assets/images/welcome/sign.png"

import "./styles.scss"

const Welcome: React.FC = () => {
  return (
    <div className="container welcome">
      <div className="welcome__title">s.u.m.o</div>
      <div className="welcome__content">
        <h2 className="welcome__story">Our story</h2>
        <div className="welcome__text">
          <p className="welcome__paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&#39;s standard dummy text ever since the 1500s.
          </p>
          <p className="welcome__paragraph">
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <p className="welcome__paragraph">
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus
          </p>
        </div>
        <img className="welcome__sign" src={Sign} alt="" />
        <div className="welcome__author">Mr. Barak - CEO s.u.m.o</div>

        <img className="welcome__image welcome__image_mobile" src={Image} alt="" />
      </div>
      <img className="welcome__image" src={Image} alt="" />
    </div>
  )
}

export default Welcome
