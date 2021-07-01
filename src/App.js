import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incNumber,decNumber } from './Action';

const App = () => {
  const myState=useSelector((state) => state.changeTheNumber)
  const dispatch=useDispatch();
  return (
    <>
   <div className="container mt-5">
     <h1 className="text-primary">Increment/Decrement using Redux</h1>
     <div className="quantity">
       <a style={{cursor:'pointer',textDecoration:"none"}} className="quantity-minus" onClick={() =>dispatch(decNumber())}><span>-</span></a>
       <input type="text" name="quantity" className="quantity-input" value={myState} />
       <a style={{cursor:'pointer',textDecoration:"none"}} className="quantity-plus" onClick={() =>dispatch(incNumber(10))}><span>+</span></a>
     </div>
   </div>
    </>
  )
}

export default App
