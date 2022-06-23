import React from "react";
import { v4 as uuidv4 } from 'uuid';

import './education.css';

function Education(){
    const [listEducation, setListEducation] = React.useState([
        {
            id: uuidv4(),
            degree: 'Degree...'
        }
    ])

    function handleAddButton(e){
        let concatList = listEducation.concat([
            {
                id: uuidv4(),
                degree: 'New Degree...'
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
           <h2>Education</h2>
           <div>
                <button onClick={handleAddButton}>Add</button>
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
    const [university, setUniversity] = React.useState('University...');
    const [from, setFrom] = React.useState('From...');
    const [to, setTo] = React.useState('To...');

 

    return (
        <form >
            <label>
                Degree:
                <input type="text" defaultValue={degree} onChange={(e)=>setDegree(e.target.value)} required/>
            </label>
            <label>
                University:
                <input type="text" defaultValue={university} onChange={(e)=>setUniversity(e.target.value)} required/>
            </label>
            <label>
                From:
                <input type="text" defaultValue={from} onChange={(e)=>setFrom(e.target.value)} required/>
            </label>
            <label>
                To:
                <input type="text" defaultValue={to} onChange={(e)=>setTo(e.target.value)} required/>
            </label>
            {buttonDelete}
        </form>
    )
}

export default Education;