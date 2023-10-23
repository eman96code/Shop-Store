// import { useState } from "react";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { store } from "../redux/store";
import { incrementCount } from "./slices/counterSlice";
import { decrementCount } from "./slices/counterSlice";
import { useDispatch } from "react-redux";

const Donations=()=> {
  const dispatch = useDispatch();

  const counterGlobal=useSelector(store=> store.counterReducer.counter)
  console.log(store);
  const increment=() =>{
    dispatch(incrementCount())
  }
  const decrement= () => {
    dispatch(decrementCount())
  }
  // const [count,setCount] = useState(0)
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <button onClick={increment} className="btn btn-primary">Increment</button>
      <h1 className="count-text mx-5">DONATE for us: {counterGlobal}$</h1>
      <button onClick={decrement} className="btn btn-danger">Decrement</button>
    </div>
    
  )
}
export default Donations;