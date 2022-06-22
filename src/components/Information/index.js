import React from "react";
import './information.css'

function Information(){
    const [number, setNumber] = React.useState('Number...');
    const [email, setEmail] = React.useState('example@example.com');
    const [description, setDescription] = React.useState('decription...');
    const [edit, setEdit] = React.useState(false);

    function handleSubmit (e){
        e.preventDefault();
        setEdit(!edit);

    }

    return (
        <div className="eduaction">
           <h2>Information</h2>
           <form onSubmit={handleSubmit}>
                <label>
                    Number
                    {edit? 
                        <input type='text' onChange={(e)=>setNumber(e.target.value)} value={number} required/>
                    :
                        <p>{number}</p>
                    }
                </label>

                <label>
                    Email
                    {edit? 
                        <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                    :
                        <p>{email}</p>
                    }
                </label>

                <label>
                    Description
                    {edit? 
                        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} required/>
                    :
                        <p>{description}</p>
                    }
                </label>

                <button>edit</button>
           </form> 
           
        </div>
    );
}

export default Information;