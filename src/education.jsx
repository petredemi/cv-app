import { useState} from 'react';
import  styles from'./stylefiles/education.module.css';
import { Info } from './personalinfo.jsx';

function FromTo({startmonth, startyear, endmonth, endyear}){
    return(
        <>
            <div className="date">
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
              /> 
        </>            
    )
}
function Button({ color, background, preview, text, handleClick}){
    const btnStyle ={
        color: color,
        backgroundColor: background,
        display: preview
    }
    return(
        <>
        <button className='btn' style = {btnStyle} onClick={handleClick}>{text}</button>
        </>
    )
}
    function Edu({btn, view, btW}){
        const [grade, setGrade] = useState('')
        const [study, setStudy] = useState('')
        const [school, setSchool] = useState('')
        const [startmonth, setStartmonth] = useState('')
        const [startyear, setStartyear] = useState('');
        const [endmonth, setEndmonth] = useState('');
        const [endyear, setEndyear] = useState('');
        const [edit, setEdit] = useState(false);
        const [show, setShow] = useState('none');
        const [vi, setVi] = useState(view)
        console.log(btW)
        const field = ['Grade:',  'Field of study:', 'School:']
        const months = ['Ianuary', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October','November', 'December']
        const years = []
        const labels = [
            {id:1, title: 'Grade', name: 'grade', type: 'text', value: grade, setValue: setGrade},
            {id:2, title: 'Field of study', name: 'study', type: 'text', value: study, setValue: setStudy},
            {id:3, title: 'School', name: 'school', type: 'text', value: school, setValue: setSchool}
        ]
        function CreateYears(){
                const yeardata = new Date()
                const y = yeardata.getFullYear()
                for (let i = y; i > 2010; i-- )
                 years.push(i)
            }
        CreateYears()
        const personal = [ 
            {id: 1, inf: grade, index: 0},
            {id: 2, inf: study, index: 1},
            {id: 3, inf: school, index: 2}
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
        function Form(){
            return(
                <>
                <form className='form'>
                {labels.map((label) => <Label key ={label.id} title = {label.title} name = {label.name} type={label.type}
                        value = {label.value} setValue={label.setValue}/>)}
                  <label className = 'month' style={{marginTop: '10px'}}>
                     <h4>start month</h4>
                     <input list="studydates" name="studydates"
                        value = {startmonth}
                        onChange= {(event) => {
                            return setStartmonth(event.target.value)
                        }}
                        onClick = {(event) => {setStartmonth(event.target.value = '')}}
                     />
                     <datalist id="studydates" onChange={(event) => {
                        return setStartmonth(event.target.value);
                     }}   name ='studydates'>
                        {months.map((month) => {
                            return <option key = {month} value = {month}/>
                        })}
                      </datalist>
                  </label>
                  <label className='month'>
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
                     <input list="endmonth" name="endmonth" className='name'
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
                  <label className='month'>
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
                </form>
            </>
            )
        }     
    return(
    <>
    <div className="addeducation">
        <div className="basic" style={{display:show}}>
            {Form()}
            <Button color = 'darkblue' background='lightgreen' text= 'save' handleClick={Save}/>
        </div>
        <div className="info" >
            {personal.map((persona) => <Info key = {persona.id} inf = {persona.inf} index = {field[persona.index]}/>)}
            <FromTo  startmonth={startmonth} endmonth={endmonth} startyear={startyear} endyear={endyear}/>
            <div className= 'btn'>
                <Button color= 'darkgreen' background='lightblue' text= 'edit'  preview= {view} handleClick={Edit}/>
                <Button color = 'darkblue' background='lightyellow' text = 'delete' preview={view} handleClick={btn}/>
            </div>

        </div>  
    </div>
    </>
    )
}
function Education({view, btW}){
    const [add, setAdd] = useState('a');
    const [cards, setCards] = useState([])
    console.log(btW)
    const mapp = cards.map((card) => {return card})
        const delEdu = () => {
            setAdd(add)
            const inx = cards.findIndex(card => card.key == add)
            cards.splice(inx, 1);
            setCards(cards)
        }
    const addEducation = () =>{
        setAdd(add +1)
        cards.push( <li key={add}><Edu key={add} view={view} btW={btW} btn = {delEdu}/></li>)
        console.log(view)
    }
    if(add == 'a'){
        addEducation()
    }
    return (
            <>
                <div className={styles.education}>
                        <h3>Education</h3>
                        <Button color = 'blue' background = 'lightgreen' text = 'add' preview={view} handleClick={addEducation}/>
                </div>
                <div className='eu'>
                    {mapp}
                </div>
            </>
        ) 
}
 export {Education, Info, FromTo, Label}
