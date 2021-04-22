import * as React from "react"

import { observer } from "mobx-react-lite"

import CounterStore from "~/stores/Counter"

import "./styles.scss"

const Counter: React.FC = observer(() => {
  return (
    <div className="container">
      <div className="counter">
        <div>counter: {CounterStore.count}</div>
        <div onClick={() => CounterStore.increment()}>+</div>
        <div onClick={() => CounterStore.decrement()}>-</div>
      </div>
    </div>
  )
})

export default Counter
