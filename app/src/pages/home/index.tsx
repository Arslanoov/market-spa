import * as React from "react"

import MainLayout from "~/layouts/main-layout"

import Welcome from "~/components/common/sections/welcome"
import ProductList from "~/components/common/product/list"
import ProductOverview from "~/components/common/sections/product-overview"
import Quotes from "~/components/common/sections/quotes"
import Gallery from "~/components/common/sections/gallery"

import MockImage from "~/assets/images/mock/product.jpg"

const Home: React.FC = () => {
  return (
    <MainLayout beforeContent={<Welcome />}>
      <ProductList
        title="New arrivals"
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
      <ProductOverview />
      <Quotes />
      <Gallery />
    </MainLayout>
  )
}

export default Home
