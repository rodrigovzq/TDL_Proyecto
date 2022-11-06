import React from 'react'
import Ingredient from '../Ingredient/Ingredient'

interface Props {
    recipes: any, // cambiarlo por un array de ingredientes.
    onClick: Function
}

function Recipes({recipes, onClick}: Props) {
    return (
        <div className="recipesList">
            {
            recipes.map((ingredient: any) => (
                <div className="recipesElement">
                    <Ingredient ingredient={ingredient} onClick={onClick}/>
                </div>
            ))
            }
        </div>
    )
}

export default Recipes