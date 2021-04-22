import { makeAutoObservable } from "mobx"

class Counter {
  public count = 0

  constructor() {
    makeAutoObservable(this)
  }

  public increment(): void {
    this.count++
  }

  public decrement(): void {
    this.count--
  }
}

export default new Counter()
