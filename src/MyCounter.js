import { useState } from "react";


//custom hook
// export default function useMyCounter() {
//     const [count,setCount] = useState(0);
//     const setIncrement = () =>{
//         setCount(count+10)
//     }

//   return {
//     count, setIncrement
//   }

// }



// export default function useMyCounter() {
//     const [count,setCount] = useState(0);
//     const setIncrement = () =>{
//         setCount(count+10)
//     }

//   return [ count, setIncrement ]

// }



// export default function useMyCounter(iState) {
//     const [count,setCount] = useState(iState);
//     const setIncrement = () =>{
//         setCount(count+10)
//     }

//   return [ count, setIncrement ]

// }



export default function useMyCounter(iState,incValue) {
    const [count,setCount] = useState(iState);
    const setIncrement = () =>{
        setCount(count+incValue)
    }

  return [ count, setIncrement ]

}