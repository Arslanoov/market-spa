import * as React from "react"

import ThumbImages from "~/components/common/product/detail/thumb-images"
import Rating from "~/components/common/product/detail/rating"

import { ProductInterface } from "~/types/product"

import ProductImage from "~/assets/images/mock/product/detail.jpg"

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
      </div>
    </div>
  )
}

export default ProductDetailView
