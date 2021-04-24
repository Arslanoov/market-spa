import * as React from "react"

import Cart from "~/assets/images/welcome/icons/cart.png"

import "./styles.scss"

interface NavCartProps {
  itemsCount: number
}

const NavCart: React.FC<NavCartProps> = ({ itemsCount }: NavCartProps) => {
  return (
    <div className="nav-cart">
      <img className="nav-cart__icon" src={Cart} alt="" />
      <div className="nav-cart__items-count">
        {itemsCount} item{itemsCount > 0 ? "s" : ""}
      </div>
    </div>
  )
}

export default NavCart
