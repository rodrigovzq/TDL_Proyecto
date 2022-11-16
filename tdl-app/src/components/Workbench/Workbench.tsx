import React from 'react'
import Utensil, { utensil} from '../Utensil/Utensil'
import {ingredient} from '../Ingredient/Ingredient'
import Door from '../Door/Door'
import Recipes from '../Recipes/Recipes'
import './Workbench.css'

const ingredientImages = require.context('../Images', true)
const utensilImages = require.context('../Images', true)
const kitchenImage = require('./Kitchen.png')

interface Props {
    selectedUtensil: utensil[]
    selectedIngredients: ingredient[]
    recipes: ingredient[]
    onClick: Function
}

function Workbench({selectedUtensil, selectedIngredients, recipes, onClick}: Props) {

    return (
    <div className="workbench">
        <div className="workbenchHeader">
            Kitchen
        </div>
        <div className="kitchen">
            {/* <img className="kitchenImg" src={kitchenImage}/> */}
            { selectedUtensil.length === 0 ? 
            <div className="placeholder">
                <div>Select a utensil</div>
                <div className="placeholderForm">
                </div>
            </div> : 
            <div className="workbenchContent">
                    {selectedIngredients.length === 0? 
                        <div className='placeholder'>select Ingredients</div> : <></>}
                    <div className='ingredientsContainer'>
                        <div className='ingredientImgContainer'>
                            {selectedIngredients.length > 0 ?
                                <img className="ingredientImg" 
                                    src={ingredientImages(`./${ selectedIngredients[0].name }.png`)} 
                                    alt={`${selectedIngredients[0].name}`}/> : <></>}
                        </div>
                        <div className='ingredientImgContainer'>
                            {selectedIngredients.length > 1 ?
                                <img className="ingredientImg" 
                                    src={ingredientImages(`./${ selectedIngredients[1].name }.png`)} 
                                    alt={`${selectedIngredients[1].name}`}/> : <></>}
                        </div>
                    </div>
                    <Utensil utensil={selectedUtensil[0]} onClick={() => onClick(selectedIngredients)}/>
            </div>}
        </div>
        <div className="Instructions">

        </div>
    </div>
    )}

export default Workbench