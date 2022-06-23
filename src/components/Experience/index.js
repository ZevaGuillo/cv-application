import React from "react";
import { v4 as uuidv4 } from 'uuid';

import './experience.css'

function Experience(){
    const [listExperience, setlistExperience] = React.useState([
        {
            id: uuidv4(),
            name: 'Job Title...'
        }
    ])

    function handleAddButton(e){
        let concatList = listExperience.concat([
            {
                id: uuidv4(),
                name: 'New Job...'
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
           <h2>Experience</h2>
           <div>
                <button onClick={handleAddButton}>Add</button>
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
    const [company, setCompany] = React.useState('Company name...');
    const [from, setFrom] = React.useState('From...');
    const [to, setTo] = React.useState('To...');
    const [description, setDescription] = React.useState('decription...');

 

    return (
        <form >
            <label>
                Job Title:
                <input type="text" defaultValue={jobTitle} onChange={(e)=>setJobTitle(e.target.value)} required/>
            </label>
            <label>
                Company name:
                <input type="text" defaultValue={company} onChange={(e)=>setCompany(e.target.value)} required/>
            </label>
            <label>
                From:
                <input type="text" defaultValue={from} onChange={(e)=>setFrom(e.target.value)} required/>
            </label>
            <label>
                To:
                <input type="text" defaultValue={to} onChange={(e)=>setTo(e.target.value)} required/>
            </label>
            <label>
                Description
                <textarea onChange={(e)=>setDescription(e.target.value)} value={description} required/>
            </label>
            {buttonDelete}
        </form>
    )
}


export default Experience;