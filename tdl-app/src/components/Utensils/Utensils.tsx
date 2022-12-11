import React from 'react'
import './Utensils.css'
import {utensil} from '../Utensil/Utensil'
import Utensil from '../Utensil/Utensil'

const utensilImages = require.context('../Images', true)

interface Props {
    utensils: utensil[], // cambiarlo por un array de ingredientes.
    onClick: Function,
    onCancel: Function
}

const cancelBtn = require("../../button-images/cancel.png")
const instructionsBtn = require("../../button-images/book.png")
const bullet = require('../../button-images/light-bulb.png')
const utensilsImages = require.context("../Images", true)

function Utensils({utensils, onClick, onCancel} : Props) {
    return (
        <div className="utensils">
            <div className="utensilsHeader">
            <div className="recipesHeaderText">Utensils</div>
            <div className="actionsContainer">
                <button className="cancel" onClick={() => onCancel()}> <img src={cancelBtn}/></button>
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
                        <button className="utensil" onClick={() => onClick(utensil)}>
                            <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}} className="utensilName">
                            <span>{utensil.name.charAt(0).toUpperCase() +  utensil.name.slice(1)}</span>
                            </div>

                            <div className="utensilImg" style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                            <img src={utensilImages(`./${ utensil.name }.png`)} alt={`${utensil.name}`}/>
                            </div>
                        </button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Utensils