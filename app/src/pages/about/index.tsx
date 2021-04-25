import * as React from "react"

import MainLayout from "~/layouts/main-layout"

import Quotes from "~/components/common/sections/quotes"
import Gallery from "~/components/common/sections/gallery"

import Banner from "~/assets/images/about/banner.jpg"

import CheapIcon from "~/assets/images/about/icons/cheap.png"
import OnlineSupportIcon from "~/assets/images/about/icons/online-support.png"
import ReviewerIcon from "~/assets/images/about/icons/reviewer.png"

import "./styles.scss"

const About: React.FC = () => {
  return (
    <MainLayout>
      <div className="container about-container">
        <div className="about-container__wrapper">
          <div className="about-container__quote">
            “ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. ”
          </div>

          <h3 className="about-container__title">Our Mission</h3>
          <div className="about-container__row">
            <img src={Banner} alt="" className="about-container__item about-container__banner" />
            <div className="about-container__item about-container__paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
              is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here,
              content here&#39;, making it look like readable English.
            </div>
          </div>
        </div>
      </div>
      <div className="container feature-container">
        <div className="feature-container__wrapper">
          <div className="feature-container__content">
            <div className="feature-container__title">Why choose us</div>
            <div className="feature-container__list">
              <div className="feature-container__feature">
                <img src={ReviewerIcon} alt="" className="feature-container__feature-icon" />
                <h4 className="feature-container__feature-title">Good sales policy</h4>
                <p className="feature-container__feature-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since.
                </p>
              </div>
              <div className="feature-container__feature">
                <img src={OnlineSupportIcon} alt="" className="feature-container__feature-icon" />
                <h4 className="feature-container__feature-title">Good sales policy</h4>
                <p className="feature-container__feature-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since.
                </p>
              </div>
              <div className="feature-container__feature">
                <img src={CheapIcon} alt="" className="feature-container__feature-icon" />
                <h4 className="feature-container__feature-title">Good sales policy</h4>
                <p className="feature-container__feature-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Quotes />
      <Gallery />
    </MainLayout>
  )
}

export default About
