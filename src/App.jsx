import { useEffect, useState } from "react"
import { NavBar } from "./components/NavBar"
import { SortingAnimation } from "./components/SortingAnimation"
import "./styles.css"

let audioCtx = null

function App() {
  const [arr, setArr] = useState([0.2, 0.5, 0.3, 0.1, 0.6, 0.4])
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

      //Play the animation sounds
      playNotes(200 + swappingArr[i] * 500)
      playNotes(200 + swappingArr[j] * 500)

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

function playNotes(freq) {
  if (audioCtx == null) {
    audioCtx = new (AudioContext || window.webkitAudioContext)()
  }
  const dur = 0.1
  const osc = audioCtx.createOscillator()
  osc.frequency.value = freq
  osc.start()
  osc.stop(audioCtx.currentTime + dur)
  const node = audioCtx.createGain()
  node.gain.value = 0.1
  node.gain.linearRampToValueAtTime(0, audioCtx.currentTime + dur)
  osc.connect(node)
  node.connect(audioCtx.destination)
}
export default App
