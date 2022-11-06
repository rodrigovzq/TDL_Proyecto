import React from 'react'
import {ingredient} from '../Ingredient/Ingredient'
import Ingredient from '../Ingredient/Ingredient'

interface Props {
    selectedIngredients: ingredient[]
    onClick: Function
}

function Workbench({selectedIngredients, onClick}: Props) {
    return (<div className="Workbench">
        <br></br>
            You selected {selectedIngredients[0].name}
            {selectedIngredients.length > 1 ? 
            <> and {selectedIngredients[1].name} &nbsp;
                <button onClick={() => onClick(selectedIngredients)}>Combine</button>
                </> : <></>}
    </div>)
}

export default Workbench