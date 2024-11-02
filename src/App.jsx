import { useState } from 'react'
import {Personalinfo} from './personalinfo.jsx'
import {Education} from './education.jsx'
import {Experience} from './experience.jsx'
import './App.css'
function Button({ color, background, text, handleClick}){
  const btnStyle ={
      color: color,
      backgroundColor: background
  }
  return(
      <button style = {btnStyle} onClick={handleClick}>{text}</button>
  )
}

function App() {
    const [view, setView] = useState('block')
    const [btnview, setBtnview] = useState(false)
    const [col, setCol] = useState('red')
    function viewMode(){
        if(!btnview){
          setView('none')
          setCol('blue')
          setBtnview(true)
        }else{
          setView('block')
          setCol('red')
          setBtnview(false)

        }
    }
    console.log(view)
  return (
    <>
          <div className='resume'>
            <h1 style={{margin:'1px'}}>Resume</h1>
            <Button color = 'darkblue' background= 'lightgreen' text= 'preview' handleClick={viewMode}/>
          </div>
          <Personalinfo/>
          <Education view={view} col = {col}/>
          <Experience  view={view}/>
      </>
  )
}

export default App