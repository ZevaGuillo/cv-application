import React from "react";
import './information.css'

function Information(){
    const [number, setNumber] = React.useState('Number...');
    const [email, setEmail] = React.useState('example@example.com');
    const [description, setDescription] = React.useState('decription...');

    return (
        <div className="eduaction">
           <h2>Information</h2>
           <form >
                <label>
                    Number
                    <input type='text' onChange={(e)=>setNumber(e.target.value)} value={number} required/>
                   
                </label>

                <label>
                    Email
                    <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                    
                </label>

                <label>
                    Description
                    <textarea onChange={(e)=>setDescription(e.target.value)} value={description} required/>
                </label>

           </form> 
           
        </div>
    );
}

export default Information;