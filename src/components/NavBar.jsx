import { bubbleSort } from "../sortingAlgorithms/algorithms"

export function NavBar({
  randArrGenerator,
  setArr,
  arr,
  setUpperBound,
  setSwaps,
  setIdx,
  setselectedBarsIdx,
}) {
  return (
    <header className="header">
      <button
        className="btn btn-accent"
        onClick={() => {
          setArr(randArrGenerator())
          setSwaps([])
          setUpperBound(0)
          setIdx(0)
          setselectedBarsIdx({ indices: [] })
        }}
      >
        New random Array
      </button>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <button className="btn">Merge Sort</button>
          </li>
          <li className="nav-list-item">
            <button
              className="btn"
              onClick={() => {
                let [sortedArr, swaps] = bubbleSort([...arr])
                console.log("Sorted Arr=", sortedArr)

                setSwaps(swaps)
                setUpperBound(swaps.length)
              }}
            >
              Bubble Sort
            </button>
          </li>
          <li className="nav-list-item">
            <button className="btn">Selection Sort</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
