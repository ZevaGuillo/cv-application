import React from "react";
import { v4 as uuidv4 } from 'uuid';

import './education.css';

function Education(){
    const [listEducation, setListEducation] = React.useState([
        {
            id: uuidv4(),
            degree: ''
        }
    ])

    function handleAddButton(e){
        let concatList = listEducation.concat([
            {
                id: uuidv4(),
                degree: ''
            }
        ]);
        setListEducation(concatList)
    }

    function deleteEducationItem(id){
        let aux = listEducation.filter(a => a.id!== id);
        setListEducation(aux);
    }


    return (
        <div className="education">
            <div className="content-headers">
                <h2>Education</h2>
                <button onClick={handleAddButton}>Add</button>
            </div>
           
           <div>
                {
                    listEducation.map(edu => {
                        return (
                            <InputEducation 
                                key={edu.id} 
                                degreeS={edu.degree}
                                buttonDelete = {<button onClick={()=>deleteEducationItem(edu.id)}>Delete</button>}
                            />
                        )
                    })
                }
           </div>
        </div>
    );
}

function InputEducation({degreeS, buttonDelete}){
    const [degree, setDegree] = React.useState(degreeS);
    const [university, setUniversity] = React.useState('');
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');

 

    return (
        <form>
            <input type="text" defaultValue={degree} onChange={(e)=>setDegree(e.target.value)} placeholder='Degree' required/>
            <input type="text" defaultValue={university} onChange={(e)=>setUniversity(e.target.value)} placeholder='University' required/>
            <input type="text" defaultValue={from} onChange={(e)=>setFrom(e.target.value)} placeholder='From' required/>
            <input type="text" defaultValue={to} onChange={(e)=>setTo(e.target.value)} placeholder='To' required/>

            {buttonDelete}
        </form>
    )
}

export default Education;