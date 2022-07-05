import React from "react";
import './area.css';

function Area(){
    
    const [name, setName] = React.useState('');


    function hanfleOnChangeInput(e){
        setName(e.target.value)
    }

    return (
        <div className="area">
            <form className="content-form">
                <input type='text' onChange={hanfleOnChangeInput} value={name} placeholder="Area" required/>

            </form>
        </div>
    );
}

export default Area;