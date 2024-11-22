import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import { useNavigate } from 'react-router-dom'


// import TestComponent from './components/testComponent'

function App() {
  const [count, setCount] = useState(0)
  const nav = useNavigate();

  const goToTest = () => {
    nav('/TestPage')
  }

  return (
    <>
    <Header></Header>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          {/* I kind of want count to be stored in the database - just as a showcase of capactiy */}
        </button>
        {/* <TestComponent></TestComponent>         */}
        <button onClick={goToTest}>Test Page</button>
        <br/><br/>
        <p>The only way to learn is to consitently push into the realm of discomfort and then keep pushing once there. Do so until whatever obstacle before you is nothing more than a stepping stone on your path to betterment.
           <br/><br/>
           Kudos for doing some coding today.
        </p>

      </div>
      <p className="read-the-docs">
       Go to the <a href='https://github.com/shyanrafer/budget-app' target='_blank'>project repo </a>
       to check out the commit history</p>
    </>
  )
}

export default App
