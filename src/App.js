// import UseRefExampleSimpleGetSet from './components/UseRefExampleSimpleGetSet'
// import UseRefExamplePreviousState from './components/UseRefExamplePreviousState'
// import UseRefMemoryLeak from './components/UseRefMemoryLeak'
// import UseMemoExample from './components/UseMemoExample'
//import UseCallbackExample from './components/UseCallbackExample'
//import CustomHookUseFetch1 from './components/CustomHookUseFetch1'
import CustomHookUseLocalStorage from './components/CustomHookUseLocalStorage'

/*
<CustomHookUseFetch1 />
<hr/>
<br/>
<UseCallbackExample />
<hr/>
<UseMemoExample />
<hr />
<br />
<UseRefExampleSimpleGetSet />
<hr />
<br />
<UseRefExamplePreviousState />
<hr />
<br />
<UseRefMemoryLeak />
*/
function App() {
  return (
    <div className="container mt-5">
      <CustomHookUseLocalStorage />
      <hr />
      <br />
    </div>
  )
}

export default App
