import { useState} from 'react';
import  styles from'./stylefiles/experience.module.css';
import {FromTo, Label} from './education.jsx'
import {Info} from './personalinfo.jsx'

function Button({color, background, preview, text, btnClick}){
    const btnStyle ={
        color: color,
        backgroundColor: background,
        display: preview
    }
    return(
        <>
        <button className='btn' style = {btnStyle} onClick={btnClick}>{text}</button>
        </>
    )
}
function Description({text}){
    return(
        <div className={styles.desc} placeholder= 'describe job'>{text}</div>
    )
}

function Exp({btn, view}){
    const [jobtitle, setJobtitle] = useState('');
    const [company, setCompany] = useState('')
    const [city, setCity] = useState('')
    const[startmonth, setStartmonth] = useState('')
    const [startyear, setStartyear] = useState('')
    const [endmonth, setEndmonth] = useState('')
    const [endyear, setEndyear] = useState('');
    const [edit, setEdit] = useState(false);
    const [show, setShow] = useState('none');
    const [textarea, setTextarea] = useState( " tell about your experience")

    const field = ['Job title:',  'Company:', 'City, Country:']
    const months = ['Ianuary', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October','November', 'December']
    const years = []
    const labels = [
        {id:1, title: 'Job title', name: 'jobtitle', type: 'text', value: jobtitle, setValue: setJobtitle},
        {id:2, title: 'Company', name: 'company', type: 'text', value: company, setValue: setCompany},
        {id:3, title: 'City, Country', name: 'city', type: 'text', value: city, setValue: setCity}
    ]
    function CreateYears(){
            const yeardata = new Date()
            const y = yeardata.getFullYear()
            for (let i = y; i > 2010; i-- )
             years.push(i)
        }
    CreateYears()
    const personal = [ 
        {id: 1, inf: jobtitle, index: 0},
        {id: 2, inf: company, index: 1},
        {id: 3, inf: city, index: 2}
    ];
    const dates = [
        {id:1, dat: startmonth},
        {id: 2, dat: startyear},
        {id:3, dat: endmonth},
        {id: 4, dat: endyear}
    ]
    function Edit(event){
        event.preventDefault();
            if(!edit){
                console.log(edit)
                setShow('flex')
                setEdit(true);
                console.log(years)
            }else{
                console.log(edit)
                setShow('none')
                setEdit(false)
            }
    } 
    function Save(event){
        event.preventDefault();
        if(edit){
            setShow('none')
            setEdit(true)
        }else{
            setShow('flex')
            setEdit(true)
        }
    }
    const handleChange = (event) => {
        setTextarea(event.target.value)
    }
    function Form(){
        return(
            <>
            <form className='form'>
            {labels.map((label) => <Label key ={label.id} title = {label.title} name = {label.name} type={label.type}
                    value = {label.value} setValue={label.setValue}/>)}
              <label className='month' style={{marginTop:'10px'}}>
                 <h4>start month</h4>
                 <input list="workdates" name="workdates"
                    value = {startmonth}
                    onChange= {(event) => {
                        return setStartmonth(event.target.value)
                    }}
                    onClick = {(event) => {setStartmonth(event.target.value = '')}}
                 />
                 <datalist id="workdates" onChange={(event) => {
                    return setStartmonth(event.target.value);
                 }}   name ='workdates'>
                    {months.map((month) => {
                        return <option key = {month} value = {month}/>
                    })}
                  </datalist>
              </label>
              <label className='year'>
                 <h4>Start year</h4>       
                 <input list="startyear" name="startyear" className='name'
                    value = {startyear}
                    onChange={(event) =>{
                        setStartyear(event.target.value)
                     }}
                     onClick = {(event) => {setStartyear(event.target.value = '')}}
                    />
                 <datalist id="startyear" onChange={(event) =>{
                    setStartyear(event.target.value);
                        }} name ='startyear'>
                    {years.map((year) => {
                        return <option key = {year} value = {year}/>
                    })}
                  </datalist>
                </label>
                
              <label className='month'>
                 <h4>end month</h4>
                 <input list="endmonth" name="endmonth"
                    value = {endmonth}
                    onChange={(event) =>{
                        setEndmonth(event.target.value)
                     }}
                     onClick = {(event) => {setEndmonth(event.target.value = '')}}
                    />
                 <datalist id="endmonth" onChange={(event) =>{
                    setEndmonth(event.target.value);
                 }} name ='endmonth'>
                    {months.map((month) => {
                        return <option key = {month} value = {month}/>
                    })}
                  </datalist>
              </label>
              <label className='year'>
                 <h4>End year</h4>
                 <input list="endyear" name="endyear"
                    value = {endyear}
                    onChange={(event) =>{
                        setEndyear(event.target.value)
                     }}
                     onClick = {(event) => {setEndyear(event.target.value = '')}}
                    />
                 <datalist id="endyear" onChange={(event) =>{
                    setEndyear(event.target.value);
                        }} name ='endyear'>
                    {years.map((year) => {
                        return <option key = {year} value = {year}/>
                    })}
                  </datalist>
              </label>
              <h4>Description:</h4>
              <textarea value={textarea} placeholder='describe your job here' onChange={handleChange}/>
            </form>
        </>
        )
    }     
return(
    <>
<div className="addexperience" >
    <div className="basic" style={{display:show}}>
        {Form()}
        <Button color = 'darkblue' background= 'lightgreen' text= 'save' btnClick={Save}/>

    </div>
    <div className="info" >
        {personal.map((persona) => <Info key = {persona.id} inf = {persona.inf} index = {field[persona.index]}/>)}
        <FromTo  startmonth={startmonth} endmonth={endmonth} startyear={startyear} endyear={endyear}/>
        <h4>Description</h4>
        <Description text = {textarea}/>
        <div className= 'btn'>
            <Button color= 'darkgreen' background='lightblue' text= 'edit' preview={view} btnClick={Edit}/>
            <Button color = 'darkblue' background='lightyellow' text = 'delete' preview={view} btnClick={btn}/>

        </div>
    </div>
</div>

</>
    )
}
function Experience({view}){
    const [add, setAdd] = useState('b');
    const [cards, setCards] = useState([])
    const mapp = cards.map((card) => {return card})
    const delExp = (e) => {
        setAdd(add)
        let inx = cards.findIndex(card => card.key == add)
        cards.splice(inx, 1);
        setCards(cards)
        console.log(inx)
    }
    const addExperience = (e) =>{
        setAdd(add +1)
        cards.push(<li key={add}><Exp key={add} btn = {delExp}/></li>)
        setCards(cards)
    }
    if( add == 'b'){
        addExperience()
    }
return (
        <>
            <div className={styles.experience}>
                    <h3>Experience</h3>
                    <Button color = 'blue' background = 'lightgreen' text = 'add' preview={view} btnClick={addExperience}/>
            </div>
            <div className='eu'>
                    {mapp}
            </div>
        </>
    ) 
}
export {Experience}