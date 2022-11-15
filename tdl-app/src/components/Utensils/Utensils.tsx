import React from 'react'
import './Utensils.css'
import {utensil} from '../Utensil/Utensil'
import Utensil from '../Utensil/Utensil'

interface Props {
    utensils: utensil[], // cambiarlo por un array de ingredientes.
    onClick: Function
}

const cancelBtn = require("../../button-images/cancel.png")
const instructionsBtn = require("../../button-images/book.png")
const bullet = require('../../button-images/light-bulb.png')
const utensilsImages = require.context("../Images", true)

function Utensils({utensils, onClick} : Props) {
    return (
        <div className="utensils">
            <div className="utensilsHeader">
            <div className="recipesHeaderText">Utensils</div>
            <div className="actionsContainer">
                <button className="cancel"> <img src={cancelBtn}/></button>
                <div className="instructions"> 
                    <img src={instructionsBtn}/>
                    <ul className="instructionsList">
                        {
                            utensils.map((a) => (
                                <li>
                                    <img className="bullet" src={bullet} />
                                    <div className="instructionText">Tap the <img className="icon" src={utensilsImages(`./${a.name}.png`)}/> to <strong>{a.action}</strong> ingredients</div>
                                </li>
                            ))
                        }
                    </ul>
                </div> 
            </div>
            </div>
            <div className="utensilsList">
                {
                utensils.map((utensil: any) => (
                    <div className="utensilsElement">
                        <Utensil utensil={utensil} onClick={onClick}/>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Utensils