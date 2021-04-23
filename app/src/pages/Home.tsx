import * as React from "react"

import MainLayout from "~/layouts/MainLayout"

import Welcome from "~/components/common/welcome/Welcome"

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Welcome />
    </MainLayout>
  )
}

export default Home
