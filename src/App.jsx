import React from 'react'
import { useState } from 'react'

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
function Appp(){ //not used
  const [view, setView] = useState('block')
  const [btnview, setBtnview] = useState(false)
  function viewM(){
    if(!btnview){
      setView('none')
      setBtnview(true)
    }else{
      setView('block')
      setBtnview(false)
    }
}
  function Mode(){
      if(!btnview){
        return(
          <>
            <Personalinfo preview={view}/>
            <Education view={view} />
            <Experience  view={view}/>
          </>
        )
      }else{
          return(
            <>
              <Personalinfo preview={view}/>
              <Education view={view}/>
              <Experience  view={view}/>
            </>
          )
    }
  }
  return (
    <>
      <div className='resume'>
        <h1 style={{margin:'1px'}}>Resume</h1>
        <Button color = 'darkblue' background= 'lightgreen' preview={view} text= 'preview' handleClick={viewM}/>
      </div>
      <Personalinfo preview={view}/>
      <Education view={view}/>
      <Experience  view={view}/>
    </>
  )
} 


function App(){
  const [view, setView] = useState('block')
  const [btnview, setBtnview] = useState(false)
  const [col, setCol] = useState('red')
  const [ v, setV] = useState('block')
  function viewMode(){
      if(!btnview){
        setView('none')
        setCol('blue')
        setBtnview(true)
        setV('none')
        setTimeout(() => {
          window.print(), setV('block'), setView('block'), 
          setBtnview(false), setCol('red')}, 100)
        }
       //   setV('block')
      //else{
       // setView('block')
       // setCol('red')
       // setBtnview(false)
       // setV('block')
      //}
  }
  console.log(view)
  console.log(btnview)
  console.log(col)
return (
  <>
        <div className='resume'>
          <h1 style={{margin:'1px'}}>Resume</h1>
          <Button color = 'darkblue' background= 'lightgreen' preview={v} text= 'preview' handleClick={viewMode}/>
        </div>
        <Personalinfo/>
        <Education view={view} col = {col} b={btnview} />
        <Experience  view={view}/>
    </>
)
}
export default App