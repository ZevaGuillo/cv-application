import React from "react";
import ReactToPrint from 'react-to-print';

import Area from "./Area";
import Education from "./Education";
import Experience from "./Experience";
import Information from "./Information";
import Name from "./Name";
import Skills from "./Skills";

function FormCV(){
    
    const componentRef = React.useRef();

    return (
        <div className="formcv">
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
           <p>
                name, Area, information, education, skills, experience
           </p> 
           <div className="cv" ref={componentRef}>
                <Name/>
                <Information/>
                <Area/>
                <Skills/>
                <Education/>
                <Experience/>
           </div>
           
        </div>
    );
}

export default FormCV;