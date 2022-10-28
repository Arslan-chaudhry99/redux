import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from "./Action/index"
const App = () => {
           const myState = useSelector((state) => state.changeNumber)
           const Dispatch = useDispatch()
           return (
                      <>
                      <button className='btn btn-success' onClick={() =>{
                                 Dispatch(decrement())
                      }} >Minus</button>
                      <span className='m-4'>Total {myState}</span>
                      <button className='btn btn-success' onClick={() =>{
                                 Dispatch(increment())
                      }}>Plus</button>
                      </>
           )
}

export default App;