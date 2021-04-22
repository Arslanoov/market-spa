import * as React from "react"

import { observer } from "mobx-react-lite"

import CounterStore from "../stores/Counter"

const Counter: React.FC = observer(() => {
  return (
    <div>
      <div>counter: {CounterStore.count}</div>
      <div onClick={() => CounterStore.increment()}>+</div>
      <div onClick={() => CounterStore.decrement()}>-</div>
    </div>
  )
})

export default Counter
