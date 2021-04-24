import * as React from "react"

import Header from "~/layouts/modules/header"

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
      {afterContent}
    </div>
  )
}

export default MainLayout
