import React from 'react'

export interface ingredient {
    name: string,
    combinations: {[key: string]: string},
    isAvailable: boolean
}

interface Props {
    ingredient: ingredient,
    onClick: Function
}

function Ingredient({ingredient, onClick}: Props) {
    return (
        <>
        {ingredient.isAvailable ? 
                <div className="ingredient">
                    <span>{ingredient.name}</span>
                    <button className="combineBtn" onClick={() => onClick(ingredient)}>Choose</button>
                </div> : <></>}
        </>
    )
}

export default Ingredient
