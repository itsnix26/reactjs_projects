import { useEffect } from "react";
import "./App.css";

function App() {

  const fetchStarWarName = () =>{
    
  }


  useEffect(()=>{
    fetchStarWarName()
  },[])

  return (
    <>
      <select name="" id="">
        <option value="dropdown1">dropdown1</option>
      </select>
    </>
  );
}

export default App;
