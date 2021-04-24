import * as React from "react"

import Overview from "~/components/common/product/overview"

import "./styles.scss"

const ProductOverview: React.FC = () => {
  return (
    <div className="product-overview">
      <div className="product-overview__content">Omega Planet Ocean Chronograph</div>
      <Overview />
    </div>
  )
}

export default ProductOverview
