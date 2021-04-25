import * as React from "react"

import Card from "~/components/common/product/card"

import { ProductInterface } from "~/types/product"

import ArrowLeftIcon from "~/assets/images/arrows/left.png"
import ArrowRightIcon from "~/assets/images/arrows/right.png"

import "./styles.scss"

interface ProductListProps {
  title: string
  description: string
  items: ProductInterface[]
}

const ProductList: React.FC<ProductListProps> = ({ title, description, items }: ProductListProps) => {
  return (
    <>
      <div className="product-list container">
        <div className="product-list__wrapper">
          <h3 className="product-list__title">{title}</h3>
          <p className="product-list__description">{description}</p>
        </div>
      </div>
      <div className="cards container">
        <img className="cards__arrow cards__arrow_left" src={ArrowLeftIcon} alt="" />
        <div className="cards__products">
          {items.map((item) => (
            <div key={item.id} className="cards__product">
              <Card item={item} />
            </div>
          ))}
        </div>
        <img className="cards__arrow cards__arrow_right" src={ArrowRightIcon} alt="" />
      </div>
    </>
  )
}

export default ProductList
