import React from 'react'
import './Utensils.css'
import {utensil} from '../Utensil/Utensil'
import Utensil from '../Utensil/Utensil'

interface Props {
    utensils: utensil[], // cambiarlo por un array de ingredientes.
    onClick: Function
}


function Utensils({utensils, onClick} : Props) {
    return (
        <div className="utensils">
            <div className="utensilsHeader">
                Utensils
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