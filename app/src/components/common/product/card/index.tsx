import * as React from "react"
import { Link } from "react-router-dom"

import CardControl from "~/components/common/product/card-control"

import { ProductInterface } from "~/types/product"

import "./styles.scss"

interface CardProps {
  item: ProductInterface
}

const Card: React.FC<CardProps> = ({ item }: CardProps) => {
  return (
    <div className="product-card">
      <Link to={`/product/${item.id}`}>
        <img className="product-card__image" src={item.image} alt="" />
        <div className="product-card__info">
          <div className="product-card__name">{item.name}</div>
          <div className="product-card__price">${item.price}</div>
        </div>
      </Link>
      <div className="product-card__control">
        <CardControl />
      </div>
    </div>
  )
}

export default Card
