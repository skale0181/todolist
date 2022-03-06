import {useState} from "react";

export const Component = ()=>{
   const [counter, setCounter] = useState(20);

   const handalchange=()=>{
    setCounter(counter+1);
}

   return(
       <>
       <h3>
           counter:{counter}
       </h3>
       <button 
       onClick={handalchange}
       >add 1</button>
       </>
   )
}

