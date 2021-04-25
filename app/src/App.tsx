import * as React from "react"

import { Switch, Route, Redirect } from "react-router-dom"

import Home from "~/pages/home"
import About from "~/pages/about"
import Products from "~/pages/products"
import Product from "~/pages/product"
import NotFound from "~/pages/not-found"

import "~/styles/main.scss"

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/products" component={Products} exact />
      <Route
        path="/product/:id"
        render={({ match }) => {
          const { id } = match.params
          return <Product id={id} />
        }}
      />
      <Route path="/404" component={NotFound} exact />
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  )
}

export default App
