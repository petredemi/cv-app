import React from 'react'
import {useState, FormEvent, ChangeEventHandler} from 'react'

import {Personalinfo} from './personalinfo.jsx'
import {Education} from './education.jsx'
import {Experience} from './experience.jsx'
import AboutMe from './aboutme.jsx'
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
  const [text, setText] = useState('preview')
  const btns = document.querySelectorAll(`.btn`)
  const [cancel, setCancel] = useState();  
  btns.forEach((btn) => {
    return btn.style.display = view;
  })
  function Cancel(){
        setView('block')
        setBtnview(false)
        setV('block')
        setText('preview')
        setCancel()
        console.log(btns)
  }

  function viewMode(){
      if(!btnview){
        setView('none')
    //    setV('none')
        setBtnview(true)
        setText('print')
        setCancel( <Button color = 'darkblue' background= 'lightpink' preview={v} text= 'cancel' handleClick={Cancel} /> )        
      }
      else if(text == 'print'){
        console.log('dvfvfd')
        setV('none');
        setView('none')
        setCancel()
        setTimeout(() => {
          window.print(), setView('block'), setText('preview'), setV('block'), setCancel(), 
            setBtnview(false)}, 500)
      }
    
  }

  console.log(view)
  console.log(btnview)
return (
  <>
        <div className='resume'>
          <h1 style={{margin:'1px'}}>Resume</h1>
          <div style={{display:'flex'}}>
            {cancel}
            <Button color = 'darkblue' background= 'lightgreen' preview={v} text= {text} handleClick={viewMode}/>
          </div>

        </div>
        <Personalinfo/>
        <AboutMe preview={view}/>
        <Education view={view}/>
        <Experience  view={view}/>
    </>
  )
}
export default App