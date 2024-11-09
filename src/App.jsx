import React from 'react'
import { useEffect, useState } from 'react'

import {Personalinfo} from './personalinfo.jsx'
import {Education} from './education.jsx'
import {Experience} from './experience.jsx'
import './App.css'
function Button({ color, background, preview, text, handleClick}){
  const btnStyle ={
      color: color,
      backgroundColor: background,
      display: preview
  }
  return(
      <button style = {btnStyle} onClick={handleClick}>{text}</button>
  )
}

function App(){
  const [view, setView] = useState('block')
  const [btnview, setBtnview] = useState(false)
  const [ v, setV] = useState('block')
  const btns = document.querySelectorAll(`.btn`)
  btns.forEach((btn) => {
    return btn.style.display = view
  })

  function viewMode(){
      if(!btnview){
        setView('none')
        setBtnview(true)
        setV('none')
        setTimeout(() => {
          window.print(), setV('block'), setView('block'), 
          setBtnview(false)}, 100)
      }else{
        setView('block')
        setBtnview(false)
        setV('block')
        console.log(btns)
      }
  }

  console.log(view)
  console.log(btnview)
return (
  <>
        <div className='resume'>
          <h1 style={{margin:'1px'}}>Resume</h1>
          <Button color = 'darkblue' background= 'lightgreen' preview={v} text= 'preview' handleClick={viewMode}/>
        </div>
        <Personalinfo/>
        <Education view={view}/>
        <Experience  view={view}/>
    </>
  )
}
export default App