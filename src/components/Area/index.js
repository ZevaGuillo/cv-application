import React from "react";
import { v4 as uuidv4 } from 'uuid';

import './area.css';

function Area(){
    const [ListAreaExpertise, setListAreaExpertise] = React.useState([
        {
            id: uuidv4(),
            name: 'Add name of Area'
        }
    ])
 
    function handleAddButton(e){
        let concatList = ListAreaExpertise.concat([
            {
                id: uuidv4(),
                name: 'New Area'
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
            <h2>Area(s) of expertise</h2>
            <div>
                <button onClick={handleAddButton}>add</button>
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
        <form>
            <input type='text' onChange={hanfleOnChangeInput} value={name} required/>

            {buttonDelete}
        </form>
    )
}

export default Area;