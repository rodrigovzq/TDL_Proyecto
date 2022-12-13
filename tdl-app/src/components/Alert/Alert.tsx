import React from 'react'
import Swal from 'sweetalert2'
const ingredientImages = require.context('../Images', true)
const soundFiles = require.context('../Sounds', true)



namespace Alert {

    export function noIngredientSelected(){
        new Audio(soundFiles('./no_ingredient_selected.mp3')).play();
        Swal.fire({html:"<b>At least one ingredient must be selected.", icon: "error"})
    }

    export function noCombination(){
        new Audio(soundFiles('./no_combination.mp3')).play();
        Swal.fire({html:"<b>No combination exists.", 
        icon: "warning",
        confirmButtonText: 'Continue'})
    }

    export function ingredientAlreadyDiscovered(ingredientName: string){
        new Audio(soundFiles('./ingredient_already_discovered.mp3')).play();
        Swal.fire({html:`<b>You already discovered ${ingredientName}.`, 
        icon:"warning",
        confirmButtonText: 'Continue'})
    }

    export function ingredientDiscovered(ingredientName: string){
        new Audio(soundFiles('./ingredient_discovered.mp3')).play();
        Swal.fire({html:'<b>Congrats! You discovered a new ingredient.' + '<br/>' + `<b>You discovered ${ingredientName} 👨‍🍳`, 
        imageUrl:ingredientImages(`./${ingredientName}.png`), 
        background: '#FFFFF0', 
        imageHeight:100, 
        imageWidth:100,
        confirmButtonText: 'Continue'})
    }

    export function recipeDiscovered(recipeName: string)
    {
        new Audio(soundFiles('./recipe_discovered.mp3')).play();
        Swal.fire({html:'<b>Congrats! You discovered a new recipe.' + '<br/>' + `<b>You discovered ${recipeName} 👨‍🍳`, 
        imageUrl:ingredientImages(`./${recipeName}.png`),
        background: '#EFF5FB', 
        imageHeight:100, 
        imageWidth:100,
        confirmButtonText: 'Continue'})
    }

    export function allRecipesDiscovered(){
        new Audio(soundFiles('./victory_sound_effect.mp3')).play();

        Swal.fire({
            title: 'Congrats! You discovered all the recipes on the menu!',
            text: 'You are a great cook! 👨‍🍳',
            width: 600,
            padding: '3em',
            confirmButtonText: 'Continue',
            color: '#716add',
            backdrop: `rgba(0,0,123,0.4) url(${ingredientImages(`./fireworks.gif`)}) top no-repeat`
          })     
    }

}

export default Alert