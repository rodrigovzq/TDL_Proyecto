import React from 'react'
import './Ingredient.css'

const ingredientImages = require.context('../Images', true)

export interface ingredient {
    name: string,
    isAvailable: boolean,
    isInMenu: boolean,
}

interface Props {
    ingredient: ingredient,
    onClick: Function
}

function Ingredient({ingredient, onClick}: Props) {
    return (
        <>
            <button className="ingredient" onClick={() => onClick(ingredient)}>
                <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                <span>{ingredient.name.charAt(0).toUpperCase() +  ingredient.name.slice(1)}</span>
                </div>

                <div className="ingredientImg" style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                <img src={ingredientImages(`./${ ingredient.name }.png`)} alt={`${ingredient.name}`}/>
                </div>
            </button>
        </>
    )
}

export default Ingredient