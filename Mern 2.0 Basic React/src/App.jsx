
import { useState } from 'react';

function App() {
  const [count,setCount]= useState(0) //retunrs array count and  function
  const[name,setName]=useState("Yogesh Awasthi") // can give string
  const[data,setData] = useState([]) // array can be passed
 
  return (
    <>
      <h1>{count} </h1>
      
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}> -</button>
      <h1>{name}</h1>
      <button onClick={()=>setName("Arjun Chaudhary")}> Change Name</button>
      <button onClick={()=>setName("Brahma Dhami")}> Change Name</button>

    </>
  );
}

export default App;
