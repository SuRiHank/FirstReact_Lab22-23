import { useState } from "react";


function CounterFunction(){
    const[count,setCount]= useState(2);

    function increment(){
        setCount(count * 2);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default CounterFunction;