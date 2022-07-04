import React from "react";
import { v4 as uuidv4 } from 'uuid';

import './area.css';

function Area(){
    const [ListAreaExpertise, setListAreaExpertise] = React.useState([
        {
            id: uuidv4(),
            name: ''
        }
    ])
 
    function handleAddButton(e){
        let concatList = ListAreaExpertise.concat([
            {
                id: uuidv4(),
                name: ''
            }
        ]);
        setListAreaExpertise(concatList)
    }

    function deleteAreaItem(id){
        let aux = ListAreaExpertise.filter(a => a.id!== id);
        setListAreaExpertise(aux);
    }

    return (
        <div className="area">
            <div className="content-headers">
                <button onClick={handleAddButton}>add</button>
            </div>
            
            <div>
                {ListAreaExpertise.map(area => {
                    return (
                        <InputAreaExpertise 
                            key={area.id} 
                            areaName={area.name} 
                            buttonDelete={<button onClick={()=>deleteAreaItem(area.id)}>Delete</button>}
                        />
                            
                    )
                     
                })}
            </div>

        </div>
    );
}

function InputAreaExpertise ({areaName,buttonDelete}){
    const [name, setName] = React.useState(areaName);



    function hanfleOnChangeInput(e){
        setName(e.target.value)
    }

    return (
        <form className="content-form">
            <input type='text' onChange={hanfleOnChangeInput} value={name} placeholder="Area" required/>

            {buttonDelete}
        </form>
    )
}

export default Area;