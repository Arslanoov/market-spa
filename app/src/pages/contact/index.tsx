import * as React from "react"

/* TODO: Replace icons */
import LocationIcon from "~/assets/images/contact/icons/location.png"
import PhoneIcon from "~/assets/images/contact/icons/phone.png"
import PostIcon from "~/assets/images/contact/icons/post.png"

import MainLayout from "~/layouts/main-layout"

import "./styles.scss"

const Contact: React.FC = () => {
  return (
    <MainLayout
      breadcrumbs={[
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Contact us",
          url: "/contact",
        },
      ]}
    >
      <div className="container contact-container">
        <div className="contact-container__wrapper">
          <div className="contact-container__banner">
            <div className="contact-container__info">
              <div className="contact-container__item">
                <img className="contact-container__icon" src={LocationIcon} alt="" />
                <div className="contact-container__text">Street Name, City Name, Nation</div>
              </div>
              <div className="contact-container__item">
                <img className="contact-container__icon" src={PhoneIcon} alt="" />
                <div className="contact-container__text">+1 (008) 789 77 35</div>
              </div>
              <div className="contact-container__item">
                <img className="contact-container__icon" src={PostIcon} alt="" />
                <div className="contact-container__text">info@orsontheme.com</div>
              </div>
            </div>
          </div>

          <div className="contact-container__form">
            <h3 className="contact-container__title">Send us an email</h3>
            <div className="contact-container__row">
              <div className="contact-container__row-item">
                <input className="contact-container__input" type="text" placeholder="Name *" />
                <input className="contact-container__input" type="email" placeholder="Email Address *" />
                <input className="contact-container__input" type="phone" placeholder="Phone number" />
              </div>
              <div className="contact-container__row-item">
                <textarea className="contact-container__textarea" placeholder="Message *" />
              </div>
            </div>
            <div className="contact-container__send-button">Send message</div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Contact
