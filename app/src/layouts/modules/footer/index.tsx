import * as React from "react"

import LocationIcon from "~/assets/images/icons/location.png"
import PhoneIcon from "~/assets/images/icons/phone.png"
import PostIcon from "~/assets/images/icons/post.png"

import PaymentMethods from "~/assets/images/payment/methods.png"

import "./styles.scss"

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer container">
        <div className="footer__wrapper">
          <div className="footer__columns">
            <div className="footer__column">
              <div className="footer__column-title">About s.u.m.o</div>
              <div className="footer__column-value">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
              </div>
              <div className="footer__column-value footer__column-value_with-icon">
                <img className="footer__column-icon" src={LocationIcon} alt="" />
                <span className="footer__column-text">Street Name, City Name, Nation</span>
              </div>
              <div className="footer__column-value footer__column-value_with-icon">
                <img className="footer__column-icon" src={PhoneIcon} alt="" />
                <span className="footer__column-text">+1 (008) 789 77 35</span>
              </div>
              <div className="footer__column-value footer__column-value_with-icon">
                <img className="footer__column-icon" src={PostIcon} alt="" />
                <span className="footer__column-text">info@orsontheme.com</span>
              </div>
            </div>
            <div className="footer__column">
              <div className="footer__column-title">Custom link</div>
              <div className="footer__column-value">Gifts</div>
              <div className="footer__column-value">Cheese</div>
              <div className="footer__column-value">Cured meats</div>
              <div className="footer__column-value">Specialty Foods</div>
              <div className="footer__column-value">Explore</div>
            </div>
            <div className="footer__column">
              <div className="footer__column-title">Help Centre</div>
              <div className="footer__column-value">Shipping & Delivery</div>
              <div className="footer__column-value">Returns & Refunds</div>
              <div className="footer__column-value">Payment & Security</div>
              <div className="footer__column-value">Orders</div>
              <div className="footer__column-value">Help</div>
            </div>
            <div className="footer__column">
              <div className="footer__column-title">My Account</div>
              <div className="footer__column-value">View Account</div>
              <div className="footer__column-value">Order Status</div>
              <div className="footer__column-value">Order History</div>
              <div className="footer__column-value">Register Now</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <div className="footer-bottom__wrapper">
          <div className="footer-bottom__copyright">© 2016 SnsTheme. All Rights Reserved. Developed By SnsTheme</div>
          <img src={PaymentMethods} alt="" className="footer-bottom__payment-methods" />
        </div>
      </div>
    </>
  )
}

export default Footer
