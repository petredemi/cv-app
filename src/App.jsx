import { useState } from 'react'
import {Personalinfo, Greeting} from './personalinfo.jsx'
import {Education, Quote} from './education.jsx'
import {Experience} from './experience.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
          <Personalinfo/>
          <Greeting/>
          <Education/>
          <Quote/>
          <Experience/>
      </>
  )
}

export default App
