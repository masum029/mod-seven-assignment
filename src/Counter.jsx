import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }



function CountClick(){
    const [count,setCount] = useState(0);
    const [Updatecount,setUpdatecount]=useState(0);

    const Increment=()=>{
        setCount(count+Updatecount);
    }
    const Decrement=()=>{
        if(count>0){
            setCount(count-1);
        }
    }

    return(
        <> 
        <input></input>      
        <p>Current Value: {count}</p>
        <button className='btn btn-success m-2' onClick={Increment}>Increment</button> 
        <button className='btn btn-danger' onClick={Decrement}>Decrement</button>
        </>

    )
}

export default CountClick;
