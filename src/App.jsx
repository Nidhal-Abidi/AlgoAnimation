import { useEffect, useState } from "react"
import { NavBar } from "./components/NavBar"
import { SortingAnimation } from "./components/SortingAnimation"
import "./styles.css"
function App() {
  const [arr, setArr] = useState(randArrGenerator)
  const [swaps, setSwaps] = useState([])
  const [idx, setIdx] = useState(0)
  const [upperBound, setUpperBound] = useState(0)
  const [selectedBarsIdx, setselectedBarsIdx] = useState({ indices: [] })

  useEffect(() => {
    let timeId = undefined
    console.log("Swaps=", swaps, "/ upperBound=", upperBound, "/ idx=", idx)
    if (idx < upperBound) {
      let swappingArr = [...arr]

      let indices = swaps[0].indices
      const [i, j] = indices
      const animationType = swaps[0].type

      if (animationType == "swap") {
        ;[swappingArr[i], swappingArr[j]] = [swappingArr[j], swappingArr[i]]
        timeId = setInterval(() => {
          setArr(swappingArr)

          //Remove the first swap from the array since it has already been used.
          setSwaps((swaps) => {
            return swaps.slice(1)
          })

          //This is used to color the swapped bars in each step
          setselectedBarsIdx({ indices: [i, j], type: "swap" })
          setIdx((idx) => idx + 1)
        }, 50)
      } else if (animationType == "comp") {
        timeId = setInterval(() => {
          //Remove the first swap from the array since it has already been used.
          setSwaps((swaps) => {
            return swaps.slice(1)
          })
          //This is used to color the swapped bars in each step
          setselectedBarsIdx({ indices: [i, j], type: "comp" })
          setIdx((idx) => idx + 1)
        }, 50)
      }
    } else if (idx > 0 && idx == upperBound) {
      console.log("Final REdner")
      //This condition is necessary to remove the colored bars in the last iteration
      timeId = setInterval(() => {
        setselectedBarsIdx({ indices: [] })
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
        setselectedBarsIdx={setselectedBarsIdx}
      />
      <SortingAnimation
        arr={arr}
        setArr={setArr}
        selectedBarsIdx={selectedBarsIdx}
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
