import React from 'react'
import './Utensil.css'

const utensilImages = require.context('../Images', true)

export interface utensil {
    name: string,
    combinations: string[][]
}

interface Props {
    utensil: utensil,
    onClick: Function
}

function Utensil({utensil, onClick} : Props) {
    return (
    <button className="utensil" onClick={() => onClick(utensil)}>
        <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
        <span>{utensil.name.charAt(0).toUpperCase() +  utensil.name.slice(1)}</span>
        </div>

        <div className="utensilImg" style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
        <img src={utensilImages(`./${ utensil.name }.png`)} alt={`${utensil.name}`}/>
        </div>

        {/* <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
        <button className="combineBtn" onClick={() => onClick(ingredient)}>Choose</button>
        </div> */}
    </button>
)}

export default Utensil