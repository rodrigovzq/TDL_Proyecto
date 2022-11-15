import React from 'react';
import { useState } from 'react';
import './App.css';
import Recipes from './components/Recipes/Recipes'
import { ingredient } from './components/Ingredient/Ingredient';
import Workbench from './components/Workbench/Workbench';
import Utensils from './components/Utensils/Utensils'
import { utensil } from './components/Utensil/Utensil'
import Menu from './components/Menu/Menu'


function App() {
  const [selectedIngredients, setIngredients] = useState<ingredient[]>([]);
  const [recipes, setRecipes] = useState<ingredient[]>([
    {
      name: 'fruit',
      combinations: { 'sugar': 'fruit-salad', 'water': 'juice' },
      isAvailable: true
    },
    {
      name: 'milk',
      combinations: {},
      isAvailable: true
    },
    {
      name: 'juice',
      combinations: { 'milk': 'smoothie' },
      isAvailable: false
    },
    {
      name: 'smoothie',
      combinations: {},
      isAvailable: false
    },
    {
      name: 'soda',
      combinations: {},
      isAvailable: false
    },
    {
      name: 'lettuce',
      combinations: {},
      isAvailable: true
    },
    {
      name: 'potato',
      combinations: {},
      isAvailable: true
    },
    {
      name: 'meat',
      combinations: {},
      isAvailable: true
    },
    {
      name: 'sugar',
      combinations: {},
      isAvailable: true
    },
    {
      name: "flour",
      combinations: { 'water': 'dough' },
      isAvailable: true
    },
    {
      name: "water",
      combinations: { 'flour': 'dough', 'tomato': 'tomato-sauce', 'water': 'glass-of-water' },
      isAvailable: true
    },
    {
      name: 'glass-of-water',
      combinations: { 'fruit': 'juice', 'sugar': 'soda' },
      isAvailable: false
    },
    {
      name: 'tomato',
      combinations: { 'water': 'tomato-sauce' },
      isAvailable: true
    },
    {
      name: 'cheese',
      combinations: { 'pre-pizza': 'pizza-simple' },
      isAvailable: true
    },
    {
      name: 'onion',
      combinations: {},
      isAvailable: true
    },
    {
      name: 'garlic',
      combinations: {},
      isAvailable: true
    },
    {
      name: 'carrot',
      combinations: {},
      isAvailable: true
    },
    {
      name: 'potato',
      combinations: {},
      isAvailable: true
    },
    {
      name: 'egg',
      combinations: {},
      isAvailable: true
    },
    {
      name: 'tomato-sauce',
      combinations: { 'dough': 'pre-pizza' },
      isAvailable: false
    },
    {
      name: 'dough',
      combinations: { 'tomato-sauce': 'pre-pizza' },
      isAvailable: false
    },
    {
      name: 'pre-pizza',
      combinations: { 'cheese': 'pizza-simple' },
      isAvailable: false
    },
    {
      name: 'pizza-simple',
      combinations: {},
      isAvailable: false
    }
  ])
  const [selectedUtensil, setSelectedUtensil] = useState({});
  const [utensils, setUtensils] = useState<utensil[]>([
    {
      name: 'oven',
      combinations: {},
    },
    {
      name: 'pan',
      combinations: {}
    },
    {
      name: 'pot',
      combinations: {}
    }
  ])

  const chooseIngredient = (ingredient: ingredient) => {
    if (selectedIngredients.length < 2) {
      const newIngredients = [...selectedIngredients, ingredient]
      setIngredients(newIngredients)
      console.log(selectedIngredients)
    } else {
      setIngredients([ingredient])
      console.log(selectedIngredients)
    }
  }

  const chooseUtensil = (utensil: utensil) => {
    setSelectedUtensil(utensil)
  }

  const combineIngredients = (selectedIngredients: ingredient[]) => {
    const combinations = selectedIngredients[0].combinations
    const result = combinations[selectedIngredients[1].name]
    const oldRecipe = recipes.find((ingredient) => (ingredient.name === result))
    if (oldRecipe === undefined) {
      console.log(result)
      alert("no combination exists")
    } else {
      if (oldRecipe.isAvailable === true) {
        alert(`You already discovered ${result}.`)
        return;
      }
      const newRecipe = { ...oldRecipe, isAvailable: true }
      const oldRecipes = recipes.filter((ingredient) => (ingredient.name !== result))
      setRecipes([...oldRecipes, newRecipe])
      alert(`Congrats! You discovered ${result} 👨‍🍳`)
    }
  }

  return (
    <div className="App">
      <div className="kitchenEl">
        <Recipes recipes={recipes} onClick={chooseIngredient} />
        <Utensils utensils={utensils} onClick={chooseUtensil} />
      </div>
      <Workbench selectedIngredients={selectedIngredients} onClick={combineIngredients} />
      <div className="restaurantEl">
        <Menu menu={[]} />
      </div>
    </div>
  );
}

export default App;
