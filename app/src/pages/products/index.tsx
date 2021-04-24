import * as React from "react"

import MainLayout from "~/layouts/main-layout"

import FiltersSidebar from "~/components/common/filters/sidebar"

import "./styles.scss"

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
      <div className="container products-container">
        <div className="products-container__sidebar">
          <FiltersSidebar />
        </div>
        <div className="products-container__content">List</div>
      </div>
    </MainLayout>
  )
}

export default Products
