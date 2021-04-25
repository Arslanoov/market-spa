import * as React from "react"

import ThumbImages from "~/components/common/product/detail/thumb-images"
import Rating from "~/components/common/product/detail/rating"
import SquareFilter from "~/components/common/filters/square"

import { ProductInterface } from "~/types/product"

import ProductImage from "~/assets/images/mock/product/detail.jpg"
import MinusIcon from "~/assets/images/cart/minus.png"
import PlusIcon from "~/assets/images/cart/plus.png"
import FavoriteIcon from "~/assets/images/card/icons/favorite_black.png"

import "./styles.scss"

interface ProductDetailViewProps {
  product: ProductInterface
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product }: ProductDetailViewProps) => {
  return (
    <div className="product-detail-view">
      <div className="product-detail-view__left">
        <div className="product-detail-view__thumb-images">
          <ThumbImages />
        </div>
        <img className="product-detail-view__image" src={ProductImage} alt="" />
      </div>

      <div className="product-detail-view__right">
        <h2 className="product-detail-view__title">{product.name}</h2>
        <div className="product-detail-view__price">${product.price}</div>
        <div className="product-detail-view__review">
          <div className="product-detail-view__rating">
            <Rating starsCount={4} />
          </div>
          <div className="product-detail-view__reviews-count">No review</div>
        </div>
        <div className="product-detail-view__availability">
          <div className="product-detail-view__availability-text"> Availability: </div>
          <div className="product-detail-view__availability-status">Many in stock</div>
        </div>

        <div className="product-detail-view__line"> </div>

        <div className="product-detail-view__description">
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
        </div>

        <div className="product-detail-view__line"> </div>

        <div className="product-detail-view__row">
          <SquareFilter
            titleStyles={{
              marginBottom: "2rem",
              fontWeight: 400,
              fontSize: "1.4rem",
            }}
            title="Size"
            items={[
              {
                id: 1,
                value: 24,
              },
              {
                id: 2,
                value: 28,
              },
              {
                id: 3,
                value: 32,
              },
              {
                id: 4,
                value: 36,
              },
              {
                id: 5,
                value: 40,
              },
              {
                id: 6,
                value: 44,
              },
            ]}
            withActiveColor
          />

          <SquareFilter
            titleStyles={{
              marginBottom: "2rem",
              fontWeight: 400,
              fontSize: "1.4rem",
            }}
            title="Color"
            items={[
              {
                id: 1,
                background: "#ed4238",
              },
              {
                id: 2,
                background: "#f7941f",
              },
              {
                id: 3,
                background: "#faec31",
              },
              {
                id: 4,
                background: "#8dc540",
              },
              {
                id: 5,
                background: "#27aae2",
              },
            ]}
            withBorder
          />
        </div>

        <div className="product-detail-view__line"> </div>

        <div className="product-detail-view__row">
          <div className="product-detail-view__row-item product-detail-view__cart-form">
            <button className="product-detail-view__cart-action product-detail-view__cart-action_minus">
              <img className="product-detail-view__icon" src={MinusIcon} alt="" />
            </button>
            <input className="product-detail-view__cart-input" defaultValue={1} />
            <button className="product-detail-view__cart-action product-detail-view__cart-action_plus">
              <img className="product-detail-view__icon" src={PlusIcon} alt="" />
            </button>
          </div>
          <button className="product-detail-view__row-item product-detail-view__cart-button">Add to cart</button>
          <div className="product-detail-view__row-item product-detail-view__action">
            <img className="product-detail-view__action-icon" src={FavoriteIcon} alt="" />
          </div>
        </div>

        <div className="product-detail-view__line"> </div>
      </div>
    </div>
  )
}

export default ProductDetailView
