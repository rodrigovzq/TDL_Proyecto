import React from 'react'
import Utensil from '../Utensil/Utensil'
import {utensil} from '../utils'
import {ingredient} from '../Ingredient/Ingredient'
import Door from '../Door/Door'
import Recipes from '../Recipes/Recipes'
import Utensils from '../Utensils/Utensils'
import './Workbench.css'

const ingredientImages = require.context('../Images', true)
const utensilImages = require.context('../Images', true)
const kitchenImage = require('./Kitchen.png')
const instructionsBtn = require("../../button-images/book.png")
const bullet = require('../../button-images/light-bulb.png')


interface Props {
    selectedUtensil: utensil[],
    selectedIngredients: ingredient[],
    recipes: ingredient[],
    utensils: utensil [],
    onChooseIngredient: Function,
    onChooseUtensil: Function,
    onCombine: Function,
    onCancelIngredients: Function,
    onCancelUtensils: Function,
}

function Workbench({selectedUtensil, selectedIngredients, recipes, utensils, 
                    onCombine, onChooseIngredient, onChooseUtensil,
                    onCancelIngredients, onCancelUtensils}: Props) {

    return (
    <div className="workbench">
        <div className="workbenchHeader">
            Kitchen
        </div>
        <div className="kitchen">
            <div className="recipesCupboard">
                <Door />
                <Recipes recipes={recipes} onClick={onChooseIngredient} onCancel={onCancelIngredients}/>
            </div>
            <div className="utensilsCupboard">
                <Door />
                <Utensils utensils={utensils} onClick={onChooseUtensil} onCancel={onCancelUtensils}/>
            </div>
            { selectedUtensil.length === 0 ? 
            <div className="placeholder">
                <div>Select a utensil</div>
                <div className="placeholderForm">
                </div>
            </div> : 
            <div className="workbenchContent">
                    {selectedIngredients.length === 0? 
                        <div className='placeholder'>select Ingredients</div> : <></>}
                    <Utensil utensil={selectedUtensil[0]} onClick={() => onCombine(selectedIngredients)}/>
                    <div className="instructions"> 
                        <img src={instructionsBtn}/>
                        <ul className="instructionsList">
                                <li>
                                    <img className="bullet" src={bullet} />
                                    <div className="instructionText">Tap the utensil to combine the ingredients inside it</div>
                                </li>
                        </ul>
                    </div> 
            </div>}
        </div>
        <div className="Instructions">

        </div>
    </div>
    )}

export default Workbench