import * as React from "react"

import Overview from "~/components/common/product/overview"

import "./styles.scss"

const ProductOverview: React.FC = () => {
  return (
    <div className="product-overview container">
      <div className="product-overview__wrapper">
        <div className="product-overview__content">
          <h2 className="product-overview__title">Omega Planet Ocean Chronograph</h2>
          <p className="product-overview__description product-overview__description_important">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, est id mattis tempus, magna ligula
            facilisis lorem, nec dapibus turpis leo ac est.
          </p>
          <p className="product-overview__description">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus
            elementum ex id justo molestie, rhoncus blandit metus interdum. Nullam laoreet nisi tellus, et luctus justo.
          </p>
          <p className="product-overview__description">
            Vivamus elementum ex id justo molestie, rhoncus blandit metus interdum. Nullam laoreet nisi tellus, et
            luctus justo.
          </p>
          <button className="product-overview__detail">View detail</button>
        </div>
        <div className="product-overview__overview">
          <Overview />
        </div>
      </div>
    </div>
  )
}

export default ProductOverview
