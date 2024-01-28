import './App.css'
function App() {

  return (
    <>
      <h1 className="title"> AIWare </h1>
      <h2 className="subtitle"> "Real eyes, realize, real AIs." </h2>
      <div className="card">
        <button class="button" onClick={() => location.href = "/selection"}>
          go to Selection page
        </button>
      </div>

      <div className="card">
        <button class="button" onClick={() => location.href = "/about"}>
          Go to About Page
        </button>
      </div>

    </>
  )
}

export default App