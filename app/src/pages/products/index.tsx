import * as React from "react"

import MainLayout from "~/layouts/main-layout"

import FiltersSidebar from "~/components/common/filters/sidebar"
import FiltersRow from "~/components/common/filters/row"
import Card from "~/components/common/product/card"

import { ProductInterface } from "~/types/product"

import MockImage from "~/assets/images/mock/product.jpg"

import "./styles.scss"

const Products: React.FC = () => {
  const [list, setList] = React.useState<ProductInterface[]>([
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
    {
      id: 5,
      image: MockImage,
      name: "Stainless steel watch",
      price: 250,
    },
    {
      id: 6,
      image: MockImage,
      name: "Stainless steel watch",
      price: 250,
    },
    {
      id: 7,
      image: MockImage,
      name: "Stainless steel watch",
      price: 250,
    },
    {
      id: 8,
      image: MockImage,
      name: "Stainless steel watch",
      price: 250,
    },
    {
      id: 9,
      image: MockImage,
      name: "Stainless steel watch",
      price: 250,
    },
    {
      id: 10,
      image: MockImage,
      name: "Stainless steel watch",
      price: 250,
    },
    {
      id: 11,
      image: MockImage,
      name: "Stainless steel watch",
      price: 250,
    },
    {
      id: 12,
      image: MockImage,
      name: "Stainless steel watch",
      price: 250,
    },
  ])

  return (
    <MainLayout
      breadcrumbs={[
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Shop",
          url: "/products",
        },
      ]}
    >
      <div className="container products-container">
        <div className="products-container__sidebar">
          <FiltersSidebar />
        </div>
        <div className="products-container__content">
          <FiltersRow />
          <div className="products-container__items">
            {list.map((item) => (
              <div key={item.id} className="products-container__item">
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Products
