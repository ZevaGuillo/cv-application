import React from "react";
import './name.css'

function Name(){
    const [name, setName] = React.useState('Name');



    return (
        <div className="name">
            <h2>Name</h2>
            <form >
                <input type='text' onChange={(e)=>setName(e.target.value)} value={name} required/>
            </form>
        </div>
    );

}

export default Name;