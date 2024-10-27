import { useState } from 'react'
import {Personalinfo} from './personalinfo.jsx'
import {Education} from './education.jsx'
import {Experience} from './experience.jsx'
import './App.css'

function App() {
  return (
    <>
          <h2>Resume</h2>
          <Personalinfo/>
          <Education/>
          <Experience/>
      </>
  )
}

export default App
