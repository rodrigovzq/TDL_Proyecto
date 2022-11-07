import React from 'react'
import {ingredient} from '../Ingredient/Ingredient'
import './Workbench.css'

// const ingredientImages = require.context('../Images', true)

interface Props {
    selectedIngredients: ingredient[]
    onClick: Function
}

function Workbench({selectedIngredients, onClick}: Props) {
    return (
    <div className="workbench">
        <div className="workbenchHeader">
            Workbench
        </div>
        <div className="workbenchIng">
            You selected {selectedIngredients[0].name} 
            {selectedIngredients.length > 1 ? 
            <> and {selectedIngredients[1].name}
                <button className="combineBtn" onClick={() => onClick(selectedIngredients)}>Combine</button>
                </> : <></>}
        </div>
    </div>
    )}

export default Workbench