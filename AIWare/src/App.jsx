import './App.css'
function App() {

  return (
    <>
      <h1 className="title"> RealAIs </h1>
      <h2 className="subtitle"> "Real eyes, realize, real AIs." </h2>
      <div className="card">
        <button className="button" onClick={() => location.href = "/selection"}>
          Play
        </button>
      </div>

      <div className="card">
        <button className="button" onClick={() => location.href = "/about"}>
          About
        </button>
      </div>

    </>
  )
}

export default App