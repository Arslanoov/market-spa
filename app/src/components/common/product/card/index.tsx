import * as React from "react"

import CardControl from "~/components/common/product/card-control"

import { ProductInterface } from "~/types/product"

import "./styles.scss"

interface CardProps {
  item: ProductInterface
}

const Card: React.FC<CardProps> = ({ item }: CardProps) => {
  return (
    <div className="product-card">
      <img className="product-card__image" src={item.image} alt="" />
      <div className="product-card__info">
        <div className="product-card__name">{item.name}</div>
        <div className="product-card__price">${item.price}</div>
      </div>
      <div className="product-card__control">
        <CardControl />
      </div>
    </div>
  )
}

export default Card
