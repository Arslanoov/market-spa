import * as React from "react"

import Hamburger from "~/layouts/modules/hamburger"
import Logo from "~/components/base/logo"
import NavCart from "~/layouts/modules/nav-cart"

import "./styles.scss"

const Header: React.FC = () => {
  const [itemsCount, setItemsCount] = React.useState(0)

  return (
    <header>
      <div className="header container">
        <div className="header__hamburger">
          <Hamburger />
        </div>
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__nav-cart">
          <NavCart itemsCount={itemsCount} />
        </div>
      </div>
    </header>
  )
}

export default Header
