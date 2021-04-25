import * as React from "react"

import MainLayout from "~/layouts/main-layout"

import ProductDetailView from "~/components/common/product/detail/view"

import { ProductInterface } from "~/types/product"

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
    </MainLayout>
  )
}

export default Product
