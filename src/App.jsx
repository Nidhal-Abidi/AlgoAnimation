import { useState } from "react"
import { NavBar } from "./components/NavBar"
import { SortingAnimation } from "./components/SortingAnimation"
import "./styles.css"
function App() {
  const [arr, setArr] = useState(randArrGenerator)
  return (
    <>
      <NavBar />
      <SortingAnimation arr={arr} />
    </>
  )
}

const randArrGenerator = () => {
  let arr = []
  for (let i = 0; i < 50; i++) {
    arr.push(Math.random())
  }
  return arr
}

export default App
