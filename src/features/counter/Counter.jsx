import { useSelector,useDispatch } from "react-redux";
import React from 'react';
import {increment,decrement,reset,incrementByAmount} from './CounterSlice';


const Counter = () =>{
    const count = useSelector(()=>state.counter.count);
    const dispatch = useDispatch();
    const [ increment,setIncrement] = useState(0);
    const addValue = Number(increment) || 0;

    const resetAll = () =>{
        setIncrement(0);
        dispatch(reset());
    }
    return(
        
        <section className="">
            <p>{count}</p>
            <div className="">
                <button onClick={()=>dispatch(increment())}>+</button>
                <button onClick={()=>dispatch(decrement())}>-</button>
            </div>
            <input
              type="text"
              value={increment}
              onChange={(e)=>setIncrement(e.target.value)}
            />
            <div className="">
                <button onClick={resetAll}>reset</button>
                <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
            </div>
        </section>
    )
}

export default Counter;