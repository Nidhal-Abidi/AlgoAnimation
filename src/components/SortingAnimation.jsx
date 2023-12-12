export function SortingAnimation({ arr }) {
  return (
    <main>
      <div className="animation-container">
        {arr.map((value, idx) => {
          return (
            <div
              className="bar"
              key={idx}
              style={{ height: `${value * 100}%` }}
            ></div>
          )
        })}
      </div>
    </main>
  )
}
