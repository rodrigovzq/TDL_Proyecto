import React from 'react'
import { ingredient } from '../Ingredient/Ingredient';
import './Utensil.css'
import {utensil} from '../utils'

const utensilImages = require.context('../Images', true)

interface Props {
    utensil: utensil,
    onClick: Function
}

function Utensil({utensil, onClick} : Props) {
    return (
        utensil.render(onClick)
)}

export default Utensil