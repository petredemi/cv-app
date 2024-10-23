import { useState} from 'react';
import  styles from'./stylefiles/experience.module.css';

//import {Info, FromTo, Label} from './education'
function Info({index, inf}){
    return (
        <div className = {styles.in}>
            <div className= 'index'> {index} </div>
            <div className='inf'>{inf}</div> 
        </div>
    )
}
function FromTo({startmonth, startyear, endmonth, endyear}){
    return(
        <>
            <div className= 'date'>
                    <div>from: {startmonth + '  '}{startyear} </div>
                    <div>  to: {endmonth + '  '}{endyear}</div>
            </div>
        </>
    )
}
function Label({title, type, name, value, setValue}){
    return(
        <>
        <label htmlFor = {name}>
             <h4>{title}: {''}</h4>
        </label>
             <input type={type}
                id = {name}
                name = {name}
                 value={value}
                 onChange={(event) => {setValue(event.target.value)}}
                 className={styles.back}
              /> 
        </>            
    )
}
function Description({text}){
    return(
        <div className={styles.desc} placeholder= 'describe job'>{text}</div>
    )
}
function Exp(props){
    const [jobtitle, setJobtitle] = useState('');
    const [company, setCompany] = useState('')
    const [city, setCity] = useState('')
    const[startmonth, setStartmonth] = useState('')
    const [startyear, setStartyear] = useState('')
    const [endmonth, setEndmonth] = useState('')
    const [endyear, setEndyear] = useState('');
    const [edit, setEdit] = useState(false);
    const [col, setCol] = useState('');
    const [show, setShow] = useState('none');
    const [textarea, setTextarea] = useState( " tell about your experience")


    function Del(event){
        event.preventDefault();
        if(cards.length > 1){
            cards.splice(add, 1)
            setAdd(add - 1);
            console.log(cards)
        }
    }
    

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
                setCol('grey')
                setShow('flex')
                setEdit(true);
                console.log(years)
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
              <label className='month'>
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
<div className="addexperience"  key = {props.k}>
    <div className="basic" style={{display:show, backgroundColor: col}}>
        {Form()}
        <button itemID='save' onClick={Save}>Save</button>
    </div>
    <div className="info" >
        {personal.map((persona) => <Info key = {persona.id} inf = {persona.inf} index = {field[persona.index]}/>)}
        <FromTo  startmonth={startmonth} endmonth={endmonth} startyear={startyear} endyear={endyear}/>
        <h4>Description</h4>
        <Description text = {textarea}/>
        <div className= 'btn'>
            <button itemID='edit' onClick={Edit} >Edit</button>
            <button itemID='del'onClick={Del}>Delete</button>
        </div>
    </div>
</div>

</>
)
}
function Experience(){
    const [add, setAdd] = useState(0);
    const [cards, setCards] = useState([<li key = {add}><Exp/></li>])
        console.log(add)
        console.log(cards)
    const addExperience = () =>{
        setAdd(add + 1)
        cards[add] = <li key={add}><Exp/></li>
        setCards(cards)
        console.log(add) 
    }

return (
        <>
            <div className={styles.experience}>
                    <h3>Experience</h3>
                    <button itemID='add' onClick={addExperience}>add</button>
            </div>
            <div className='exp'>
                {cards}
            </div>
        </>
    ) 
}
export {Experience}
