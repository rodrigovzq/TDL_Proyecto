import React from 'react'

const ingredientImages = require.context('../Images', true)

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
                    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                    <span>{ingredient.name.charAt(0).toUpperCase() +  ingredient.name.slice(1)}</span>
                    </div>

                    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                    <img src={ingredientImages(`./${ ingredient.name }.png`)}/>
                    </div>

                    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                    <button className="combineBtn" onClick={() => onClick(ingredient)}>Choose</button>
                    </div>
                </div> : <></>
        }
        </>
    )
}

export default Ingredient