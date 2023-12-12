export function SortingAnimation({ arr, swappedBarsIdx }) {
  return (
    <main>
      <div className="animation-container">
        {arr.map((value, idx) => {
          console.log()
          return (
            <div
              className={
                swappedBarsIdx && swappedBarsIdx.includes(idx)
                  ? "bar bar-accent"
                  : "bar"
              }
              key={idx}
              style={{ height: `${value * 100}%` }}
            ></div>
          )
        })}
      </div>
    </main>
  )
}
