import * as React from "react"

import Card from "~/components/common/product/card"

import { ProductInterface } from "~/types/product"

import ArrowLeftIcon from "~/assets/images/arrows/left.png"
import ArrowRightIcon from "~/assets/images/arrows/right.png"

// Mock
import MockImage from "~/assets/images/mock/product.jpg"

import "./styles.scss"

const NewArrivals: React.FC = () => {
  const [products, setProducts] = React.useState<ProductInterface[]>([
    {
      id: 1,
      image: MockImage,
      name: "Stainless steel watch",
      price: 250,
    },
    {
      id: 2,
      image: MockImage,
      name: "Stainless steel watch",
      price: 250,
    },
    {
      id: 3,
      image: MockImage,
      name: "Stainless steel watch",
      price: 250,
    },
    {
      id: 4,
      image: MockImage,
      name: "Stainless steel watch",
      price: 250,
    },
  ])

  return (
    <>
      <div className="new-arrivals container">
        <div className="new-arrivals__wrapper">
          <h3 className="new-arrivals__title">New arrivals</h3>
          <p className="new-arrivals__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <div className="cards container">
        <img className="cards__arrow cards__arrow_left" src={ArrowLeftIcon} alt="" />
        <div className="cards__products">
          {products.map((product) => (
            <div key={product.id} className="cards__product">
              <Card item={product} />
            </div>
          ))}
        </div>
        <img className="cards__arrow cards__arrow_right" src={ArrowRightIcon} alt="" />
      </div>
    </>
  )
}

export default NewArrivals
