import * as React from "react"

import MainLayout from "~/layouts/main-layout"

import Welcome from "~/components/common/sections/welcome"
import NewArrivals from "~/components/common/sections/new-arrivals"

const Home: React.FC = () => {
  return (
    <MainLayout beforeContent={<Welcome />}>
      <NewArrivals />
    </MainLayout>
  )
}

export default Home
