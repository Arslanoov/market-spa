import * as React from "react"

import Header from "~/layouts/modules/header"
import Footer from "~/layouts/modules/footer"

import Breadcrumbs from "~/components/common/breadcrumbs"

import { BreadcrumbInterface } from "~/types/breadcrumb"

import "./styles.scss"

interface MainLayoutProps {
  children: React.ReactChild | React.ReactNode
  beforeContent?: React.ReactChild | React.ReactNode
  afterContent?: React.ReactChild | React.ReactNode
  breadcrumbs?: BreadcrumbInterface[]
}

const MainLayout: React.FC<MainLayoutProps> = ({
  breadcrumbs = [],
  beforeContent,
  children,
  afterContent,
}: MainLayoutProps) => {
  return (
    <div className="main-layout">
      {beforeContent}
      <Header />
      <div className="container breadcrumbs-container">
        {breadcrumbs.length > 0 ? (
          <div className="breadcrumbs-container__items">
            <Breadcrumbs list={breadcrumbs} />
          </div>
        ) : (
          ""
        )}
      </div>
      {children}
      <Footer />
      {afterContent}
    </div>
  )
}

export default MainLayout
