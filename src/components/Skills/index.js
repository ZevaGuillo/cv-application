import React from "react";
import { v4 as uuidv4 } from 'uuid';

import './skills.css';

function Skills({activeButton}){

    
    const [listSkills, setListSkills] = React.useState([
        {
            id: uuidv4(),
            name: ''
        }
    ])

    function handleAddButton(e){
        let concatList = listSkills.concat([
            {
                id: uuidv4(),
                name: ''
            }
        ]);
        setListSkills(concatList)
    }

    function deleteAreaItem(id){
        let aux = listSkills.filter(a => a.id!== id);
        setListSkills(aux);
    }

    return (
        <div className="skills">
            <div className="content-headers">
                <h2>Skills</h2>
                {
                    activeButton?
                    <button onClick={handleAddButton}><i class="fas fa-plus"></i></button>:''
                }
                
            </div>
            
           {
            listSkills.map(skill => {
                return (
                    <InputSkill 
                        key={skill.id} 
                        pname={skill.name}
                        deleteBtn={
                            activeButton?
                            <button className="deletebtn" onClick={()=>deleteAreaItem(skill.id)} ><i class="fas fa-minus"></i></button>:''
                        }
                    />
                )
            })
           }
        </div>
    );
}

function InputSkill({pname, deleteBtn}){
    const [name, setName] = React.useState(pname);

    return (
        <form className="content-form">
            <input type='text' onChange={(e)=>setName(e.target.value)} value={name} placeholder='Skill' required/>
            {deleteBtn}
        </form>
    )

}

export default Skills;