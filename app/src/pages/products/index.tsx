import * as React from "react"

import MainLayout from "~/layouts/main-layout"

const Products: React.FC = () => {
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
      <div>Products</div>
    </MainLayout>
  )
}

export default Products
