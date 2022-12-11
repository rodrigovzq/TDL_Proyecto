import React from 'react';
import { useState } from 'react';
import './App.css';
import Recipes from './components/Recipes/Recipes'
import Alert from './components/Alert/Alert';
import { ingredient } from './components/Ingredient/Ingredient';
import Workbench from './components/Workbench/Workbench';
import Utensils from './components/Utensils/Utensils'
import Utensil, { utensil } from './components/Utensil/Utensil'
import Menu from './components/Menu/Menu'
import Welcome from './components/Welcome/Welcome'


const emptyIngredient = {
  name: '',
  isAvaialable: false
}

class Oven extends utensil {
  constructor(name: string, combinations: string[][]) {
    super(name, combinations, 'bake');
  }
  public render(onClick: Function) {
    console.log("es oven")
    return (<></>)
  }
}

class Bowl extends utensil {
  constructor(name: string, combinations: string[][]) {
    super(name, combinations, 'fry or grill');
  }
  public render(onClick: Function) {
    console.log("es bowl")
    return (<></>)
  }
}

class Pot extends utensil {
  constructor(name: string, combinations: string[][]) {
    super(name, combinations, 'boil');
  }
  public render(onClick: Function) {
    console.log("es Pot")
    return (<></>)
  }
}

class Pan extends utensil {
  constructor(name: string, combinations: string[][]) {
    super(name, combinations, 'combine');
  }
  public render(onClick: Function) {
    console.log("es Pan")
    return (<></>)
  }
}

// render oven
function renderOven(onClick: Function) {
  // mostrar cantidad 
  console.log("es otra cosa")
  return (<></>)
}

function renderBowl(onClick: Function) {
  // mostrar cantidad 
  console.log("es el bowl")
  return (<></>)
}


function App() {
  const [selectedIngredients, setIngredients] = useState<ingredient[]>([]);
  const [recipes, setRecipes] = useState<ingredient[]>([
    {
      name: 'baked-potato',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'batter',
      isAvailable: false,
      isInMenu: false,
    },
    {
      name: 'boiled-egg',
      isAvailable: false,
      isInMenu: false,
    },
    {
      name: 'bread',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'burger',
      isAvailable: false,
      isInMenu: false,
    },
    {
      name: 'carrot',
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: 'cheese',
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: 'dough',
      isAvailable: false,
      isInMenu: false,
    },
    {
      name: 'egg',
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: "flour",
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: 'french-fries',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'fried-egg',
      isAvailable: false,
      isInMenu: false,
    },
    {
      name: 'fruit',
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: 'fruit-salad',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'garlic',
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: 'glass-of-water',
      isAvailable: false,
      isInMenu: false,
    },
    {
      name: 'juice',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'lettuce',
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: 'meat',
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: 'milk',
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: 'onion',
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: 'smoothie',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'soda',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'pizza-simple',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'potato',
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: 'pre-pizza',
      isAvailable: false,
      isInMenu: false,
    },
    {
      name: 'sugar',
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: 'tomato',
      isAvailable: true,
      isInMenu: false,
    },
    {
      name: 'tomato-sauce',
      isAvailable: false,
      isInMenu: false,
    },
    {
      name: "water",
      isAvailable: true,
      isInMenu: false,
    }
  ])

  const [selectedUtensil, setSelectedUtensil] = useState<utensil[]>([]);
  const [utensils, setUtensils] = useState<utensil[]>([
    new Oven(
      'oven',
      [['tomato-sauce','dough', 'pre-pizza'],
                    ['cheese','pre-pizza', 'pizza-simple'],
                    ['potato', '', 'baked-potato'],
                    ['dough', '', 'bread']],
    ),
    new Pan(
      'pan',
      [['egg','','fried-egg'],
                    ['potato', '', 'french-fries']],
    ),
    new Pot(
      'pot',
      [],
    ),
    new Bowl(
      'bowl',
      [['water','flour', 'dough'],
                     ['water','tomato', 'tomato-sauce'], 
                     ['water','water', 'glass-of-water'],
                     ['fruit','sugar', 'fruit-salad'],
                     ['fruit','water', 'juice'],
                     ['fruit', 'milk', 'smoothie'],
                     ['glass-of-water','fruit', 'juice'], 
                     ['glass-of-water','sugar', 'soda-water'],
                    ],
    )
  ])

  const chooseIngredient = (ingredient: ingredient) => {
    if (selectedUtensil === undefined) return;

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
    if (selectedIngredients.length===0) {
      Alert.noIngredientSelected()
      return;
    }
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

        Alert.noCombination()
      } else {
        if (oldRecipe.isAvailable === true) {
          Alert.ingredientAlreadyDiscovered(resultName)
          return;
        }
        const newRecipe = { ...oldRecipe, isAvailable: true }
        const oldRecipes = recipes.filter((ingredient) => (ingredient.name !== resultName))
        setRecipes([...oldRecipes, newRecipe])
        Alert.ingredientDiscovered(resultName)
      }
    }
    else 
    Alert.noCombination()
  }

  const cancelUtensil = () => {
    setSelectedUtensil([])
  }

  const cancelIngredients = () => {
    setIngredients([])
  }

  return (
    <div className="App">
      <Welcome />
      <div className="AppName">Little Restaurant</div>
      <div className="progress">
        Recipes Found: {`${recipes.filter((a) => (a.isAvailable && a.isInMenu )).length} / 
                         ${recipes.filter((a)=> (a.isInMenu)).length}`}
      </div>
      <div className="AppContent">
        <div className="workbenchEl">
          <Workbench selectedUtensil={selectedUtensil} 
                     selectedIngredients={selectedIngredients} 
                     recipes={recipes.filter((a) => (a.isAvailable))}
                     utensils={utensils}
                     onChooseIngredient={chooseIngredient}
                     onChooseUtensil={chooseUtensil}
                     onCombine={combineIngredients}
                     onCancelIngredients={cancelIngredients}
                     onCancelUtensils={cancelUtensil}/>
        </div>
        <div className="restaurantEl">
          <Menu menu={recipes.filter((a) => (a.isInMenu && a.isAvailable))} />
        </div>
      </div>
    </div>
  );
}

export default App;
