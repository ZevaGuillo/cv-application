import React from "react";
import Area from "./Area";
import Education from "./Education";
import Information from "./Information";
import Name from "./Name";
import Skills from "./Skills";

function FormCV(){
    return (
        <div className="formcv">
           <p>
                name, Area, information, education, skills, experience
           </p> 
           <Name/>
           <Information/>
           <Area/>
           <Skills/>
           <Education/>
        </div>
    );
}

export default FormCV;