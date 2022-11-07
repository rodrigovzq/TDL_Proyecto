import React from 'react'
import {ingredient} from '../Ingredient/Ingredient'
import './Workbench.css'

const ingredientImages = require.context('../Images', true)

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
        { selectedIngredients.length === 0 ? 
            <div className="placeholder">
                Select ingredients to combine them
            </div> : 
            <div className="workbenchIng">
                <div>You selected</div>
                <div className="ingredientContainer">
                    <img src={ingredientImages(`./${ selectedIngredients[0].name }.png`)} 
                        alt={`${selectedIngredients[0].name}`}/> 
                    <span className="ingredientName">{selectedIngredients[0].name}</span>
                </div>
                {selectedIngredients.length > 1 ? 
                <> and 
                <div className="ingredientContainer">
                    <img src={ingredientImages(`./${ selectedIngredients[1].name }.png`)} 
                        alt={`${selectedIngredients[1].name}`}/> 
                    <span className="ingredientName">{selectedIngredients[1].name}</span>
                </div>
                <div className="btnContainer">
                <button className="combineBtn" onClick={() => onClick(selectedIngredients)}>Combine</button>
                </div>
                </> : <></>}
            </div>
        }
    </div>
    )}

export default Workbench