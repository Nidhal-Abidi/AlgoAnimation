import { useEffect, useState } from "react"
import { NavBar } from "./components/NavBar"
import { SortingAnimation } from "./components/SortingAnimation"
import "./styles.css"
function App() {
  const [arr, setArr] = useState(randArrGenerator) //randArrGenerator
  const [swaps, setSwaps] = useState([])
  const [idx, setIdx] = useState(0)
  const [upperBound, setUpperBound] = useState(0)
  const [swappedBarsIdx, setSwappedBarsIdx] = useState([])

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
        //This is used to color the swapped bars in each step
        setSwappedBarsIdx([i, j])
        setIdx((idx) => idx + 1)
      }, 50)
    } else if (idx > 0 && idx == upperBound) {
      //This condition is necessary to remove the colored bars in the last iteration
      setInterval(() => {
        setSwappedBarsIdx([])
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
        setSwappedBarsIdx={setSwappedBarsIdx}
      />
      <SortingAnimation
        arr={arr}
        setArr={setArr}
        swappedBarsIdx={swappedBarsIdx}
      />
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
