import React from 'react'
import { ingredient } from '../Ingredient/Ingredient';
import './Utensil.css'

const utensilImages = require.context('../Images', true)

// export interface utensil {
//     name: string,
//     combinations: string[][]
//     action: string,
// }

export abstract class utensil {
    name: string;
    combinations: string[][];
    action: string;

    constructor(name: string, combinations: string[][], action: string) {
        this.name = name;
        this.combinations = combinations;
        this.action = action;
    }

    public abstract render(onClick: Function) : React.ReactElement;
}

interface Props {
    utensil: utensil,
    onClick: Function
}

function Utensil({utensil, onClick} : Props) {
    return (
    <button className="utensil" onClick={() => onClick(utensil)}>
        {utensil.render(onClick)}
        <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}} className="utensilName">
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