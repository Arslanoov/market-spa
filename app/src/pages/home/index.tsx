import * as React from "react"

import MainLayout from "~/layouts/main-layout"

import Welcome from "~/components/common/sections/welcome"
import NewArrivals from "~/components/common/sections/new-arrivals"
import ProductOverview from "~/components/common/sections/product-overview"
import Quotes from "~/components/common/sections/quotes"
import Gallery from "~/components/common/sections/gallery"

const Home: React.FC = () => {
  return (
    <MainLayout beforeContent={<Welcome />}>
      <NewArrivals />
      <ProductOverview />
      <Quotes />
      <Gallery />
    </MainLayout>
  )
}

export default Home
