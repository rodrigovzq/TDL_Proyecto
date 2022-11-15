import React from 'react'
import {utensil} from '../Utensil/Utensil'
import {ingredient} from '../Ingredient/Ingredient'
import './Workbench.css'

const ingredientImages = require.context('../Images', true)
const utensilImages = require.context('../Images', true)

interface Props {
    selectedUtensil: utensil[]
    selectedIngredients: ingredient[]
    onClick: Function
}

function Workbench({selectedUtensil, selectedIngredients, onClick}: Props) {
    return (
    <div className="workbench">
        <div className="workbenchHeader">
            Workbench
        </div>
        { selectedUtensil.length === 0 ? 
            <div className="placeholder">
                Select a utensil
            </div> : 
            <div className="workbenchContent">
                <div>You selected</div>
                <div className="utensilContainer">
                    <img src={utensilImages(`./${ selectedUtensil[0].name }.png`)} 
                        alt={`${selectedUtensil[0].name}`}/> 
                    <span className="utensilName">{selectedUtensil[0].name}</span>
                </div>
                {selectedIngredients.length !== 0 ? 
                <> and
                <div className="ingredientContainer">
                    <img src={ingredientImages(`./${ selectedIngredients[0].name }.png`)} 
                        alt={`${selectedIngredients[0].name}`}/> 
                    <span className="ingredientName">{selectedIngredients[0].name}</span>
                 </div>
                 </> : <></>}
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