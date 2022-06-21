import React, { Children } from "react";

function Area(){
    const [ListAreaExpertise, setListAreaExpertise] = React.useState(['Add name of Area'])
 
    function handleAddButton(e){
        let concatList = ListAreaExpertise.concat(['new area']);
        setListAreaExpertise(concatList)
    }

    function deleteAreaItem(name){
        let aux = ListAreaExpertise.filter(a => a!== name);
        setListAreaExpertise(aux);
    }

    return (
        <div className="Area">
            <h2>Area(s) of expertise</h2>
            <div>
                <button onClick={handleAddButton}>add</button>
                {ListAreaExpertise.map(area => {
                    return (
                        <InputAreaExpertise 
                            key={area} 
                            areaName={area} 
                            button={<button onClick={()=>deleteAreaItem(area)}>Delete</button>}
                        />
                            
                    )
                     
                })}
            </div>

        </div>
    );
}

function InputAreaExpertise ({areaName,button}){
    const [name, setName] = React.useState(areaName);
    const [isEdit, setIsEdit] = React.useState(false);


    function handleSubmit(e){
        e.preventDefault();
        setIsEdit(!isEdit)
    }

    function hanfleOnChangeInput(e){
        setName(e.target.value)
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            {isEdit? 
                <input type='text' onChange={hanfleOnChangeInput} value={name} required/>
            :
                <p>{name}</p>
            }

            <button>{isEdit?'save':'edit'}</button>
            {button}
        </form>
    )
}

export default Area;