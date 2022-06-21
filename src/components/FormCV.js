import React from "react";
import Area from "./Area";
import Name from "./Name";

function FormCV(){
    return (
        <div className="formcv">
           <p>
                name, Area, information, education, skills, experience
           </p> 
           <Name/>
            <Area/>
        </div>
    );
}

export default FormCV;