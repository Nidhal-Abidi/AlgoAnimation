export function SpeedToggle({ isFast, setIsFast }) {
  return (
    <div className="speed-toggle-container">
      <img src="/turtle.png" alt="slow speed (turtle)" />
      <label className="switch">
        <input
          type="checkbox"
          checked={isFast}
          onChange={(e) => {
            setIsFast((isFast) => !isFast)
          }}
        />
        <span className="slider round"></span>
      </label>
      <img src="/rabbit.png" alt="slow speed (turtle)" />
    </div>
  )
}
