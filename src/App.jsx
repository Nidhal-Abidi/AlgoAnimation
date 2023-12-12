import { useEffect, useState } from "react"
import { NavBar } from "./components/NavBar"
import { SortingAnimation } from "./components/SortingAnimation"
import "./styles.css"
function App() {
  const [arr, setArr] = useState(randArrGenerator)
  const [swaps, setSwaps] = useState([])
  const [idx, setIdx] = useState(0)
  const [upperBound, setUpperBound] = useState(0)

  useEffect(() => {
    let timeId = undefined
    console.log("Swaps=", swaps, "/ upperBound=", upperBound, "/ idx=", idx)
    if (idx < upperBound) {
      let swappingArr = [...arr]
      const [i, j] = swaps[0]
      ;[swappingArr[i], swappingArr[j]] = [swappingArr[j], swappingArr[i]]

      timeId = setInterval(() => {
        setArr(swappingArr)
        //Remove the first swap from the array since it has already been used.
        setSwaps((swaps) => {
          return swaps.slice(1)
        })
        setIdx((idx) => idx + 1)
      }, 50)
    }

    return () => {
      clearInterval(timeId)
    }
  }, [arr, idx, upperBound, swaps])

  return (
    <>
      <NavBar
        randArrGenerator={randArrGenerator}
        setArr={setArr}
        arr={arr}
        setUpperBound={setUpperBound}
        setSwaps={setSwaps}
        setIdx={setIdx}
      />
      <SortingAnimation arr={arr} setArr={setArr} />
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
