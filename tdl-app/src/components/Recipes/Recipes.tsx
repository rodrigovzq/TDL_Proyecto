import React from 'react'
import Ingredient from '../Ingredient/Ingredient'
import {ingredient} from '../Ingredient/Ingredient'
import './Recipes.css'


const cancelBtn = require("../../button-images/cancel.png")
const bullet = require('../../button-images/light-bulb.png')
const instructionsBtn = require("../../button-images/book.png")

interface Props {
    recipes: ingredient[], // cambiarlo por un array de ingredientes.
    onClick: Function,
    onCancel: Function
}

function Recipes({recipes, onClick, onCancel}: Props) {
	return (
		<div className="recipes">
			<div className="recipesHeader">
				<div className="recipesHeaderText">Ingredients</div>
				<div className="actionsContainer">
					<button className="cancel" onClick={() => onCancel()}> <img src={cancelBtn}/></button>
					<div className="instructions"> 
						<img src={instructionsBtn}/>
						<ul className="instructionsList">
							<li>
								<img className="bullet" src={bullet} />
								<div className="instructionText">
										Tap the ingredients to place them inside a utensil
								</div>
							</li>
						</ul>
					</div> 
				</div>
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