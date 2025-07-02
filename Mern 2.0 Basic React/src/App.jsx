import { useEffect, useState } from "react";

function App() {

  const [count,setCount]=useState(0)
  const [nextCount,setNextCount]=useState(0)

//frist type
  // useEffect(()=>{
  //   console.log("Not Count wala useEffect")

  // },[])
  // useEffect(()=>{
  //   console.log("This is empty")

  // },[])
  // useEffect(()=>{
  //   console.log("this is second empty  ")

  // },[])
 
  //second type
  // useEffect(()=>{
  //   document.title = "Learning useEffect" + count
  // },[count])

  //third type
  // useEffect(()=>{
  //   console.log("Third useState was called")

  // })
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <h1>{nextCount}</h1>
      <button onClick={()=>setNextCount(nextCount+1)}>+</button>
    </>
  );
}

export default App;