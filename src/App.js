import UseRefExampleSimpleGetSet from './components/UseRefExampleSimpleGetSet'
import UseRefExamplePreviousState from './components/UseRefExamplePreviousState'
import UseRefMemoryLeak from './components/UseRefMemoryLeak'
function App() {
  return (
    <div className="container mt-5">
      <UseRefExampleSimpleGetSet />
      <hr />
      <UseRefExamplePreviousState />
      <hr />
      <UseRefMemoryLeak />
    </div>
  )
}

export default App
