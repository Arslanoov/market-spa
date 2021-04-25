import * as React from "react"

import TabHoverImage from "~/assets/images/tab/hover.png"

import "./styles.scss"

const ProductDetailTabs: React.FC = () => {
  return (
    <div className="product-detail-tabs">
      <div className="product-detail-tabs__items">
        <div className="product-detail-tabs__item product-detail-tabs__item_selected">
          <div className="product-detail-tabs__text">Description</div>
          <img className="product-detail-tabs__hover" src={TabHoverImage} alt="" />
        </div>
        <div className="product-detail-tabs__item">
          <div className="product-detail-tabs__text">Tags</div>
          <img className="product-detail-tabs__hover" src={TabHoverImage} alt="" />
        </div>
        <div className="product-detail-tabs__item">
          <div className="product-detail-tabs__text">Reviews</div>
          <img className="product-detail-tabs__hover" src={TabHoverImage} alt="" />
        </div>
      </div>
      <div className="product-detail-tabs__content">
        <p className="product-detail-tabs__paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum. Why do we use it?
        </p>

        <p className="product-detail-tabs__paragraph">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
          &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  )
}

export default ProductDetailTabs
