import * as React from "react"

import MainLayout from "~/layouts/main-layout"

import ProductDetailView from "~/components/common/product/detail/view"
import ProductDetailTabs from "~/components/common/product/detail/tabs"
import ProductList from "~/components/common/product/list"

import { ProductInterface } from "~/types/product"

import MockImage from "~/assets/images/mock/product.jpg"

import "./styles.scss"

interface ProductProps {
  id: string | number
}

const Product: React.FC<ProductProps> = ({ id }: ProductProps) => {
  const [item, setItem] = React.useState<ProductInterface>({
    id: 1,
    image: "",
    name: "Stainless steel watch",
    price: 250,
  })

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
        {
          name: item.name,
          url: `/product/${id}`,
        },
      ]}
    >
      <div className="container product-container">
        <div className="product-container__wrapper">
          <ProductDetailView product={item} />
        </div>
      </div>

      <div className="container product-tabs-container">
        <div className="product-tabs-container__wrapper">
          <ProductDetailTabs />
        </div>
      </div>

      <ProductList
        title="Related products"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        items={[
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
        ]}
      />

      <ProductList
        title="Upsale products"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        items={[
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
        ]}
      />
    </MainLayout>
  )
}

export default Product
