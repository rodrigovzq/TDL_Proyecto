import React from 'react'
import Swal from 'sweetalert2'
const ingredientImages = require.context('../Images', true)
const soundFiles = require.context('../Sounds', true)



namespace Alert {

    export function noIngredientSelected(){
        new Audio(soundFiles('./no_ingredient_selected.mp3')).play();
        Swal.fire({text:"At least one ingredient must be selected.", icon: "error"})
    }

    export function noCombination(){
        new Audio(soundFiles('./no_combination.mp3')).play();
        Swal.fire({text:"No combination exists.", icon: "warning"})
    }

    export function ingredientAlreadyDiscovered(ingredientName: string){
        new Audio(soundFiles('./ingredient_already_discovered.mp3')).play();
        Swal.fire({text:`You already discovered ${ingredientName}.`, icon:"warning"})
    }

    export function ingredientDiscovered(ingredientName: string){
        new Audio(soundFiles('./ingredient_discovered.mp3')).play();
        Swal.fire({text:`Congrats! You discovered ${ingredientName} 👨‍🍳`, imageUrl:ingredientImages(`./${ingredientName}.png`), imageHeight:100, imageWidth:100})
    }

}

export default Alert