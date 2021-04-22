import * as React from "react"

import MainLayout from "~/layouts/MainLayout"

import Counter from "~/components/Counter"

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div>Home</div>
      <Counter />
    </MainLayout>
  )
}

export default Home
