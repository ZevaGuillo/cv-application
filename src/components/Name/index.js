import React from "react";
import './name.css'

function Name(){
    const [name, setName] = React.useState('Name');
    const [edit, setEdit] = React.useState(false);

    const handleButton = (e)=>{
        e.preventDefault()
        if(edit){
            setEdit(false)
        }else{
            setEdit(true);
        }
    }

    return (
        <div className="name">
            <h2>Name</h2>
            <form onSubmit={handleButton}>
                {edit? 
                    <input type='text' onChange={(e)=>setName(e.target.value)} value={name} required/>
                :
                    <p>{name}</p>
                }

                <button>{edit?'save':'edit'}</button>
            </form>
        </div>
    );

}

export default Name;