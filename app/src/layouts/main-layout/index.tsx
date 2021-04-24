import * as React from "react"

import Header from "~/layouts/modules/header"
import Footer from "~/layouts/modules/footer"

interface MainLayoutProps {
  children: React.ReactChild | React.ReactNode
  beforeContent?: React.ReactChild | React.ReactNode
  afterContent?: React.ReactChild | React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ beforeContent, children, afterContent }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      {beforeContent}
      <Header />
      {children}
      <Footer />
      {afterContent}
    </div>
  )
}

export default MainLayout
