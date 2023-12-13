import {
  bubbleSort,
  insertionSort,
  selectionSort,
} from "../sortingAlgorithms/algorithms"
import { SpeedToggle } from "./SpeedToggle"

export function NavBar({
  randArrGenerator,
  setArr,
  arr,
  setUpperBound,
  setSwaps,
  setIdx,
  setselectedBarsIdx,
  Comparisons,
  arrAccesses,
  isSoundOn,
  setIsSoundOn,
  isFast,
  setIsFast,
}) {
  const toggleSound = () => {
    setIsSoundOn((isSoundOn) => !isSoundOn)
  }
  return (
    <header className="header">
      <SpeedToggle isFast={isFast} setIsFast={setIsFast} />
      {isSoundOn ? (
        <img src="images/speaker.png" alt="sound on" onClick={toggleSound} />
      ) : (
        <img src="images/mute.png" alt="sound off" onClick={toggleSound} />
      )}
      <button
        className="btn btn-accent"
        onClick={() => {
          setArr(randArrGenerator())
          setSwaps([])
          setUpperBound(0)
          setIdx(0)
          setselectedBarsIdx({ indices: [] })
          Comparisons.current = 0
          arrAccesses.current = 0
        }}
      >
        New random Array
      </button>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <button
              className="btn"
              onClick={() => {
                let [sortedArr, swaps] = insertionSort([...arr])
                setSwaps(swaps)
                setUpperBound(swaps.length)
              }}
            >
              Insertion Sort
            </button>
          </li>
          <li className="nav-list-item">
            <button
              className="btn"
              onClick={() => {
                let [sortedArr, swaps] = bubbleSort([...arr])
                //console.log("Sorted Arr=", sortedArr)

                setSwaps(swaps)
                setUpperBound(swaps.length)
              }}
            >
              Bubble Sort
            </button>
          </li>
          <li className="nav-list-item">
            <button
              className="btn"
              onClick={() => {
                let [sortedArr, swaps] = selectionSort([...arr])

                setSwaps(swaps)
                setUpperBound(swaps.length)
              }}
            >
              Selection Sort
            </button>
          </li>
        </ul>
      </nav>
      <p>
        {Comparisons.current} Comparisons, {arrAccesses.current} Array Accesses.
      </p>
    </header>
  )
}
