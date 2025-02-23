import React from 'react';
import { useState} from 'react';
import  styles from'./stylefiles/experience.module.css';



function Button({ color, background, preview, text, handleClick, handelMouse}){
    const btnStyle ={
        color: color,
        backgroundColor: background,
        display: preview,
    }
    return(
        <>
        <button className='btn' style = {btnStyle} onClick={handleClick} onMouseOver={handelMouse}>{text}</button>
        </>
    )
}
function Description({text}){
    return(
        <div className={styles.desc} placeholder= 'tell about yourself'>{text}</div>
    )
}

export default function AboutMe({preview}){

    const [textarea, setTextarea] = useState( " tell about yourself")
    const [edit, setEdit] = useState(false);
    const [col, setCol] = useState('');
    const [show, setShow] = useState('none');

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
    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    function AboutForm(){
        return(
            <>
                <form className='form'>
                <h4>Description:</h4>
                    <textarea placeholder='tell about yourself' onChange={handleChange} id='txt'/>
                    <button itemID='save' type='submit' onClick={Save}>Save</button>
                </form>
            </>
        )
    }

    return(
        <>
        <h3>About me</h3>
            <div className="basic" style={{display:show, backgroundColor: col}}>
                {AboutForm()}
        </div>
        <div className="info">
            <Description text={textarea}/>
            <Button key='b' color= 'darkgreen' preview={preview} background='lightblue' text= 'edit'  handleClick={Edit}/>
        </div>
        </>
    
    )
}
