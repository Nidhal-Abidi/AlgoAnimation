export function NavBar() {
  return (
    <header className="header">
      <button className="btn btn-accent">New random Array</button>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <button className="btn">Merge Sort</button>
          </li>
          <li className="nav-list-item">
            <button className="btn">Bubble Sort</button>
          </li>
          <li className="nav-list-item">
            <button className="btn">Selection Sort</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
