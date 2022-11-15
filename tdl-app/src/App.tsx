import React from 'react';
import { useState } from 'react';
import './App.css';
import Recipes from './components/Recipes/Recipes'
import { ingredient } from './components/Ingredient/Ingredient';
import Workbench from './components/Workbench/Workbench';
import Utensils from './components/Utensils/Utensils'
import Utensil, { utensil } from './components/Utensil/Utensil'
import Menu from './components/Menu/Menu'

const emptyIngredient = {
  name: '',
  isAvaialable: false
}

function App() {
  const [selectedIngredients, setIngredients] = useState<ingredient[]>([]);
  const [recipes, setRecipes] = useState<ingredient[]>([
    {
      name: 'baked-potato',
      isAvailable: false
    },
    {
      name: 'batter',
      isAvailable: false
    },
    {
      name: 'boiled-egg',
      isAvailable: false
    },
    {
      name: 'bread',
      isAvailable: false
    },
    {
      name: 'burger',
      isAvailable: false
    },
    {
      name: 'carrot',
      isAvailable: true
    },
    {
      name: 'cheese',
      isAvailable: true
    },
    {
      name: 'dough',
      isAvailable: false
    },
    {
      name: 'egg',
      isAvailable: true
    },
    {
      name: "flour",
      isAvailable: true
    },
    {
      name: 'fried-egg',
      isAvailable: false
    },
    {
      name: 'fruit',
      isAvailable: true
    },
    {
      name: 'fruit-salad',
      isAvailable: false
    },
    {
      name: 'garlic',
      isAvailable: true
    },
    {
      name: 'glass-of-water',
      isAvailable: false
    },
    {
      name: 'juice',
      isAvailable: false
    },
    {
      name: 'lettuce',
      isAvailable: true
    },
    {
      name: 'meat',
      isAvailable: true
    },
    {
      name: 'milk',
      isAvailable: true
    },
    {
      name: 'onion',
      isAvailable: true
    },
    {
      name: 'smoothie',
      isAvailable: false
    },
    {
      name: 'soda',
      isAvailable: false
    },
    {
      name: 'pizza-simple',
      isAvailable: false
    },
    {
      name: 'potato',
      isAvailable: true
    },
    {
      name: 'pre-pizza',
      isAvailable: false
    },
    {
      name: 'sugar',
      isAvailable: true
    },
    {
      name: 'tomato',
      isAvailable: true
    },
    {
      name: 'tomato-sauce',
      isAvailable: false
    },
    {
      name: "water",
      isAvailable: true
    }
  ])

  const [selectedUtensil, setSelectedUtensil] = useState<utensil[]>([]);
  const [utensils, setUtensils] = useState<utensil[]>([
    {
      name: 'oven',
      combinations: [['tomato-sauce','dough', 'pre-pizza'],
                    ['cheese','pre-pizza', 'pizza-simple']]
    },
    {
      name: 'pan',
      combinations: [['egg','','fried-egg']]
    },
    {
      name: 'pot',
      combinations: []
    },
    {
      name: 'bowl',
      combinations: [['water','flour', 'dough'],
                     ['water','tomato', 'tomato-sauce'], 
                     ['water','water', 'glass-of-water'],
                     ['fruit','sugar', 'fruit-salad'],
                     ['fruit','water', 'juice'],
                     ['glass-of-water','fruit', 'juice'], 
                     ['glass-of-water','sugar', 'soda']
                    ]
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
    setSelectedUtensil([utensil])
    setIngredients([])
    console.log(selectedUtensil)
  }

  const combineIngredients = (selectedIngredients: ingredient[]) => {
    const combinations = selectedUtensil[0].combinations;
    const selectedIngNames = [...selectedIngredients.map( (a) => a.name), '']

    const result = combinations.find((value) => (
      (value[0] === selectedIngNames[0] && value[1] === selectedIngNames[1])  ||
            (value[0] === selectedIngNames[1] && value[1] === selectedIngNames[0])
    ))
    console.log(result)

    if(result !== undefined){
      const resultName = result[2]
      const oldRecipe = recipes.find((ingredient) => (ingredient.name === resultName))
      if (oldRecipe === undefined) {
        alert("no combination exists")
      } else {
        if (oldRecipe.isAvailable === true) {
          alert(`You already discovered ${resultName}.`)
          return;
        }
        const newRecipe = { ...oldRecipe, isAvailable: true }
        const oldRecipes = recipes.filter((ingredient) => (ingredient.name !== resultName))
        setRecipes([...oldRecipes, newRecipe])
        alert(`Congrats! You discovered ${resultName} 👨‍🍳`)
      }
    }
    else 
      alert("no combination exists")
  }

  return (
    <div className="App">
      <div className="kitchenEl">
        <Recipes recipes={recipes} onClick={chooseIngredient} />
        <Utensils utensils={utensils} onClick={chooseUtensil} />
      </div>
      <Workbench selectedUtensil={selectedUtensil} selectedIngredients={selectedIngredients} onClick={combineIngredients} />
      <div className="restaurantEl">
        <Menu menu={[]} />
      </div>
    </div>
  );
}

export default App;
