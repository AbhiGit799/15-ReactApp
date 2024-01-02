import React, { useEffect, useState } from "react";

// export function App() {

//   const nameStateVariable = useState("Ajeet Singh");
//   console.log(nameStateVariable);
//   return (
  
//     <>
//       <h2>Hello Tech World!!</h2>
//     </>
  
//   );
// }


// export function App() {

//     const nameStateVariable = useState("Ajeet Singh");
//    // console.log(nameStateVariable);
//    console.log(nameStateVariable[1]);
//    // nameStateVariable[1](); //calls infinite time, give error.
//     return (
    
//       <>
//         <h2>Hello {nameStateVariable[0]}</h2>
//       </>
    
//     );
//   }



// export function App() {

//     const nameStateVariable = useState("Ajeet Singh");

//     return (
    
//       <>
//         <h2>Hello {nameStateVariable[0]}</h2>
//         <br />
//         <button type="button" onClick={()=>nameStateVariable[1]("Aman Kumar")}>Update</button>
//       </>
    
//     );
//   }



// export function App() {

//     const nameStateVariable = useState("Ajeet Singh");

//     const clickHandler = ()=>{
//         nameStateVariable[1]("Aman Kumar")
//     }

//     return (
    
//       <>
//         <h2>Hello {nameStateVariable[0]}</h2>
//         <br />
//         <button type="button" onClick={clickHandler}>Update</button>
//       </>
    
//     );
//   }


//Standard code
// export function App() {

//     const nameStateVariable = useState("Ajeet Singh");
//     const name = nameStateVariable[0];
//     const setName = nameStateVariable[1];

//     const clickHandler = ()=>{
//         setName("Aman Kumar")
//     }

//     return (
    
//       <>
//         <h2>Hello {nameStateVariable[0]}</h2>
//         <br />
//         <button type="button" onClick={clickHandler}>Update</button>
//       </>
    
//     );
//   }



// export function App() {

//     const nameStateVariable = useState("Ajeet Singh");
//     // const name = nameStateVariable[0];
//     // const setName = nameStateVariable[1];

//     const [name,setName] = nameStateVariable;

//     const clickHandler = ()=>{
//         setName("Aman Kumar")
//     }

//     return (
    
//       <>
//         <h2>Hello {nameStateVariable[0]}</h2>
//         <br />
//         <button type="button" onClick={clickHandler}>Update</button>
//       </>
    
//     );
//   }


//Standard code
// export function App() {

//     const [name,setName] = useState("Ajeet Singh");
//     const clickHandler = ()=>{
//         setName("Aman Kumar")
//     }

//     return (
    
//       <>
//         <h2>Hello {name}</h2>
//         <br />
//         <button type="button" onClick={clickHandler}>Update</button>
//       </>
    
//     );
//   }



// export function App() {

//     const [name,setName] = useState("Ajeet Singh");
//     const clickHandler = ()=>{
//         setName("Aman Kumar")
//     }

//     return (
    
//       <>
//         <h2>Hello {name}</h2>
//         <br />
//         <button type="button" onClick={clickHandler}>Update</button>
//       </>
    
//     );
//   }


// export function App() {

//   //  const [name,setName] = useState("Ajeet Singh");
//     const [name,setName] = useState("");
//     const clickHandler = ()=>{
//         setName("Arjun")
//     }

//     return (
    
//       <>
//         <h2>Hello {name}</h2>
//         <br />
//         <button type="button" onClick={clickHandler}>Update</button>
//       </>
    
//     );
//   }



// export function App() {    
//       const [name,setName] = useState("Ajeet Singh");
//       const  [email,setEmail] = useState("ajeet12@gmail.com");
     
//       const clickHandler = ()=>{
//           setName("Arjun")
//           setEmail("arjun12@gmail.com")
//       }
  
//       return (
      
//         <>
//           <h2>Hello {name}, your email-id is {email}</h2>
//           <br />
//           <button type="button" onClick={clickHandler}>Update</button>
//         </>
      
//       );
// }


// function LessText({text,maxlength})
// {
//   const [hidden,setHidden] = useState(true);

//   if(text.length <= maxlength)
//   {
//     return <>{text}</>
//   }

//   return(<>   
  
//    {hidden?`${text.substr(0,maxlength)}...`:text}
  
//    {
//     hidden ? <b><a onClick={()=>setHidden(false)}>read more</a></b> : <b> <a onClick={()=>setHidden(true)}> read less </a> </b>
//    }

//   </>)

// }

// export function App() {    


//     return (
    
//       <>
//         <LessText maxlength={200} text={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo deserunt eligendi, 
//         aspernatur a error quisquam ut omnis ipsa quae expedita, nisi necessitatibus ex reprehenderit unde illum ab? Facilis, repellat eum!
        
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo deserunt eligendi, 
//         aspernatur a error quisquam ut omnis ipsa quae expedita, nisi necessitatibus ex reprehenderit unde illum ab? Facilis, repellat eum!

//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo deserunt eligendi, 
//         aspernatur a error quisquam ut omnis ipsa quae expedita, nisi necessitatibus ex reprehenderit unde illum ab? Facilis, repellat eum!

//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo deserunt eligendi, 
//         aspernatur a error quisquam ut omnis ipsa quae expedita, nisi necessitatibus ex reprehenderit unde illum ab? Facilis, repellat eum!

//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo deserunt eligendi, 
//         aspernatur a error quisquam ut omnis ipsa quae expedita, nisi necessitatibus ex reprehenderit unde illum ab? Facilis, repellat eum!

//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo deserunt eligendi, 
//         aspernatur a error quisquam ut omnis ipsa quae expedita, nisi necessitatibus ex reprehenderit unde illum ab? Facilis, repellat eum!

//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo deserunt eligendi, 
//         aspernatur a error quisquam ut omnis ipsa quae expedita, nisi necessitatibus ex reprehenderit unde illum ab? Facilis, repellat eum!

//         `}/>
//      </>
    
//     );
// }



// export function App() {    

//     const [count,setcount] = useState(0);

//     return (
    
//       <>
//           <h2>Counter : {count} </h2>

//           <button type="button" onClick={()=>setcount(count+1)}>Increment</button>
//           &nbsp; &nbsp;
//           <button type="button" onClick={()=>setcount(count-1)}>Decrement</button>
     
//       </>
    
//     );
// }


// export function App() {    

//     const [count,setcount] = useState(0);
    
//     // useEffect(()=>{
//     //    console.log("useEffect called.");
//     // })

//     //only on mount i.e one time
//     // useEffect(()=>{
//     //    console.log("useEffect called.");
//     // },[])


//     return (
    
//       <>
//         <h2>Counter : {count} </h2>
//         <button type="button" onClick={()=>setcount(count+1)}>Increment</button>
//         &nbsp; &nbsp;
//        <button type="button" onClick={()=>setcount(count-1)}>Decrement</button>
  
//       </>
    
//     );
// }



// export function App() {    

//     const [count,setcount] = useState(0);
//     const [count2,setcount2] = useState(0);
    
    // useEffect(()=>{
    //    console.log("useEffect called.");
    // })

    //only on mount i.e one time
    // useEffect(()=>{
    //    console.log("useEffect called.");
    // },[count]) //state specific


    // useEffect(()=>{
    //     console.log("useEffect called.");
    //  },[count,count2]) //for multiple state


    // useEffect(()=>{
    // console.log("useEffect called.");
    //  },[])



//     return (
    
//       <>
//         <h2>Counter 1 : {count} </h2>

//         <button type="button" onClick={()=>setcount(count+1)}>Increment 1</button>
//         &nbsp;&nbsp;
        
//         <button type="button" onClick={()=>setcount(count-1)}>Decrement 1</button>
        
//         <br /> <br />

//         <h2>Counter 2 : {count2} </h2>

//        <button type="button" onClick={()=>setcount2(count2+1)}>Increment 2</button>
//        &nbsp; &nbsp;
       
//        <button type="button" onClick={()=>setcount2(count2-1)}>Decrement 2</button>
  
//       </>
    
//     );
// }




// import useMyCounter from './MyCounter.js'

// export function App() {

//  const {count,setIncrement} = useMyCounter();

//   return ( 
//    <>
//      <h2>Count Up : {count}</h2>
//      <button type="button" onClick={setIncrement}>Increment</button>
//    </>
//   )
// }


//Array 
// import useMyCounter from './MyCounter.js'
// export function App() {

//  const [count,setIncrement] = useMyCounter();

//   return ( 
//    <>
//      <h2>Count Up : {count}</h2>
//      <button type="button" onClick={setIncrement}>Increment</button>
//    </>
//   )
// }



import useMyCounter from './MyCounter.js'
export function App() {

 const [count,setIncrement] = useMyCounter(200,5);

  return ( 
   <>
     <h2>Count Up : {count}</h2>
     <button type="button" onClick={setIncrement}>Increment</button>
   </>
  )
}







