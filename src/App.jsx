import Navbar from "./Component/Navbar"
import NewsBoard from "./Component/NewsBoard"
import NewsItem from "./Component/NewsItem"
import { useState } from "react"

function App() {
  const[category,setCategory]=useState("general");
  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category}/>
 
    </>
  )
}

export default App
