import { useState} from 'react';
import './stylefiles/general.css';

function Info({index, inf}){
    return (
        <div className="in">
            <div className='index'> {index} </div>
            <div className='inf'>{inf}</div> 
        </div>
    )
}
function Button({ color, background, preview, text, handleClick, handelMouse}){
    const btnStyle ={
        color: color,
        backgroundColor: background,
        display: preview
    }
    return(
        <>
        <button className='btn' style = {btnStyle} onClick={handleClick} onMouseOver={handelMouse}>{text}</button>
        </>
    )
}
function Personalinfo({preview}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [web, setWeb] = useState('')
    const [media, setMedia] = useState('')
    const [edit, setEdit] = useState(false);
    const [col, setCol] = useState('');
    const [show, setShow] = useState('none');
    const field = ['Nume:  ', 'Email:  ', 'Mobile:', 'Social media:', 'Webpage:']

    const personal = [ 
        {id: 1, inf: name, index: 0},
        {id: 2, inf: email, index: 1},
        {id: 3, inf: mobile, index: 2},
        {id: 4, inf: media, index: 3},
        {id: 5, inf: web, index: 4}
    ];
    function Edit(event){
        event.preventDefault();
            if(!edit){
                console.log(edit)
                setCol('lightgrey')
                setShow('flex')
                setEdit(true);
            }else{
                console.log(edit)
                setCol('blue')
                setShow('none')
                setEdit(false)
            }
    } 
    function Save(event){
        event.preventDefault();
        if(edit){
            setShow('none')
            setEdit(false)
        }else{
            setShow('flex')
            setEdit(true)
        }
    }

    function Form(){
        return(
        <>
            <form className='form'>
              <label className='label1'>
                 <h4>Nume: {''} </h4>
                 <input className='input1'
                    type='text' style={{width: '240px'}}
                    name = 'name'
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                  />                        
              </label>
              <label className='label1'>
                 <h4>Email: {''} </h4>
                 <input className='input1' 
                    type='mail'
                     name = 'email'
                     value={email}
                     onChange={(e) => {setEmail(e.target.value)}}
                  />                        
              </label>
              <label className='label1'>
                 <h4>Mobile: {''}</h4>
                 <input className='input1' 
                     type='number'
                     name = 'email'
                     value={mobile}
                     onChange={(e) => {setMobile(e.target.value)}}
                  />                        
              </label>
              <label className='label1'>
                 <h4>Social media {''} </h4>
                 <input className='input1' 
                     type='text'
                     name = 'media'
                     value={media}
                     onChange={(e) => {setMedia(e.target.value)}}
                  />                        
              </label>
              <label className='label1'>
                 <h4>Webpage {''} </h4>
                 <input className='input1' 
                     type='text'
                     name = 'web'
                     value={web}
                     onChange={(e) => {setWeb(e.target.value)}}
                  />                        
              </label>
              <button itemID='save' type='submit' onClick={Save}>Save</button>
            </form>
        </>
            )
        }
    return (
            <>
            <div className="app">
                <h3>Personal Information</h3>
                <div className="basic" style={{display:show, backgroundColor: col}}>
                    {Form()}
                </div>
                <div className="info">
                    {personal.map((persona) => <Info key = {persona.id} inf = {persona.inf} index = {field[persona.index]}/>)}
                    <Button key='b' color= 'darkgreen' preview={preview} background='lightblue' text= 'edit'  handleClick={Edit}/>

                </div>
            </div>
            </>
    ) 
}
  export {Personalinfo, Info} ;