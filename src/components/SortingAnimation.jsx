import { Tutorial } from "./Tutorial"

export function SortingAnimation({ arr, selectedBarsIdx }) {
  return (
    <main>
      <Tutorial />
      <div className="animation-container">
        {arr.map((value, idx) => {
          let barColorClass = "bar"
          if (
            selectedBarsIdx &&
            selectedBarsIdx.indices &&
            selectedBarsIdx.indices.includes(idx)
          ) {
            if (selectedBarsIdx.type == "swap") {
              barColorClass += " bar-accent-swap"
            } else {
              barColorClass += " bar-accent-comp"
            }
          }
          return (
            <div
              className={barColorClass}
              key={idx}
              style={{ height: `${value * 100}%` }}
            ></div>
          )
        })}
      </div>
    </main>
  )
}
