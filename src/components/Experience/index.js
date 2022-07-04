import React from "react";
import { v4 as uuidv4 } from 'uuid';

import './experience.css'

function Experience(){
    const [listExperience, setlistExperience] = React.useState([
        {
            id: uuidv4(),
            name: ''
        }
    ])

    function handleAddButton(e){
        let concatList = listExperience.concat([
            {
                id: uuidv4(),
                name: ''
            }
        ]);
        setlistExperience(concatList)
    }

    function deleteEducationItem(id){
        let aux = listExperience.filter(a => a.id!== id);
        setlistExperience(aux);
    }


    return (
        <div className="experience">
            <div className="content-headers">
                <h2>Experience</h2>
                <button onClick={handleAddButton}>Add</button>
            </div>
           <div>
                {
                    listExperience.map(expe => {
                        return (
                            <InputEducation 
                                key={expe.id} 
                                title={expe.name}
                                buttonDelete = {<button onClick={()=>deleteEducationItem(expe.id)}>Delete</button>}
                            />
                        )
                    })
                }
           </div>
        </div>
    );
}

function InputEducation({title, buttonDelete}){
    const [jobTitle, setJobTitle] = React.useState(title);
    const [company, setCompany] = React.useState('');
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    const [description, setDescription] = React.useState('');

 

    return (
        <form >
            <input type="text" defaultValue={jobTitle} onChange={(e)=>setJobTitle(e.target.value)} placeholder='Job Title' required/>
            <input type="text" defaultValue={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Company' required/>
            <input type="text" defaultValue={from} onChange={(e)=>setFrom(e.target.value)} placeholder='From' required/>
            <input type="text" defaultValue={to} onChange={(e)=>setTo(e.target.value)} placeholder='To' required/>
            <textarea onChange={(e)=>setDescription(e.target.value)} value={description} placeholder='Description' required/>

            {buttonDelete}
        </form>
    )
}


export default Experience;