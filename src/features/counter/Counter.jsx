import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, inCramentByAmount } from './counterSlice'
const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispach = useDispatch()
  const [incramentAmount, setIncramentAmount] = useState(0)
  const addValue = Number(incramentAmount) || 0
  const resetAll = () => {
    setIncramentAmount(0)
    dispach(reset())
  }
  return (
    <>
      <section>
        <p>{count}</p>
        <div>
          <button
            onClick={() => {
              dispach(increment())
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispach(decrement())
            }}
          >
            -
          </button>
        </div>
        <input
          type='text'
          value={incramentAmount}
          onChange={(e) => {
            setIncramentAmount(e.target.value)
          }}
        />
        <div>
          <button onClick={() => dispach(inCramentByAmount(addValue))}>
            Add Amount
          </button>
          <button onClick={resetAll}>reset</button>
        </div>
      </section>
    </>
  )
}

export default Counter
