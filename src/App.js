import UseRefExampleSimpleGetSet from './components/UseRefExampleSimpleGetSet'
import UseRefExamplePreviousState from './components/UseRefExamplePreviousState'
import UseRefMemoryLeak from './components/UseRefMemoryLeak'
import UseMemoExample from './components/UseMemoExample'

function App() {
  return (
    <div className="container mt-5">
      <UseMemoExample />
      <hr />
      <UseRefExampleSimpleGetSet />
      <hr />
      <UseRefExamplePreviousState />
      <hr />
      <UseRefMemoryLeak />
    </div>
  )
}

export default App
