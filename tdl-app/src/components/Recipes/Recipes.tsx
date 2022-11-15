import React from 'react'
import Ingredient from '../Ingredient/Ingredient'
import {ingredient} from '../Ingredient/Ingredient'
import './Recipes.css'

interface Props {
    recipes: ingredient[], // cambiarlo por un array de ingredientes.
    onClick: Function
}

function Recipes({recipes, onClick}: Props) {
    return (
        <div className="recipes">
            <div className="recipesHeader">
                Ingredients
            </div>
            <div className="recipesList">
                {
                recipes.map((ingredient: any) => (
                    <div className="recipesElement">
                        <Ingredient ingredient={ingredient} onClick={onClick}/>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Recipes