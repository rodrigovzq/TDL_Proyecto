import React from 'react';
import { useState } from 'react';
import './App.css';
import Recipes from './components/Recipes/Recipes'
import Alert from './components/Alert/Alert';
import { ingredient } from './components/Ingredient/Ingredient';
import Workbench from './components/Workbench/Workbench';
import Utensils from './components/Utensils/Utensils'
import Utensil from './components/Utensil/Utensil'
import {utensil} from './components/utils'
import Menu from './components/Menu/Menu'
import Welcome from './components/Welcome/Welcome'
import {Bowl, Oven, Pan, Pot} from './components/utils'


const emptyIngredient = {
  name: '',
  isAvaialable: false
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
      name: 'soda-water',
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
    },
    {
      name: 'pizza-onion',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'pizza-tomato',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'pizza-meat',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'pasta',
      isAvailable: false,
      isInMenu: false,
    },
    {
      name: 'milanesa',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'lasagna',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'steak',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'cake',
      isAvailable: false,
      isInMenu: true
    },
    {
      name: 'pastafrola',
      isAvailable: false,
      isInMenu: true
    },
    {
      name: 'cake-ddl',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'cake-carrot',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'burger-cheese',
      isAvailable: false,
      isInMenu: true
    },
    {
      name: 'mashed-potato',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'ddl',
      isAvailable: false,
      isInMenu: false,
    },
    {
      name: 'locro',
      isAvailable: false,
      isInMenu: true,
    },
    {
      name: 'gnochi',
      isAvailable: false,
      isInMenu: true
    },
    {
      name: 'pasta-tomato',
      isAvailable: false,
      isInMenu: true
    }
  ])

  const [selectedUtensil, setSelectedUtensil] = useState<utensil[]>([]);
  const [utensils, setUtensils] = useState<utensil[]>([
    new Oven(
       [
        ['dough', 'tomato-sauce', '', 'pre-pizza'],
        ['cheese', 'pre-pizza', '', 'pizza-simple'],
        ['onion', 'pre-pizza', '', 'pizza-onion'],
        // Platos de 3 ingredientes
        ['cheese', 'pre-pizza', 'tomato', 'pizza-tomato'],
        ['cheese', 'onion', 'pre-pizza', 'pizza-onion'],
        ['cheese', 'pre-pizza', 'meat,', 'pizza-meat'],
        /////////////////////////////
        ['potato', '', '', 'baked-potato'],
        ['dough', '', '', 'bread'],
        ['dough', 'egg', '', 'pasta'],
        ['bread', 'meat', '', 'milanesa'],
        ['meat', 'pasta', '', 'lasagna'],
        ['meat', '', '', 'steak'],
        ['cake-premix', '', '', 'cake'],
        ['cake-premix', 'fruit', '', 'pastafrola'],
        ['cake-premix', 'ddl', '', 'cake-ddl'],
        ['cake-premix', 'carrot', '', 'cake-carrot']
      ],
      selectedIngredients
    ),
    new Pan(
      [
        ['egg', '', 'fried-egg'],
        ['potato', '', 'french-fries'],
        ['meat', '', 'burger'],
        ['burger', 'cheese', 'burger-cheese'],
        ['burger', 'tomato', 'burger-tomato'],
      ],
      selectedIngredients
    ),
    new Pot(
      [
        ['water', 'egg', 'boiled-egg'],
        ['water', 'potato', 'mashed-potato'],
        ['tomato', 'onion', 'tomato-sauce'],
        ['tomato', 'garlic', 'tomato-sauce'],
        ['tomato', '', 'tomato-sauce'],
        ['milk', 'sugar', 'ddl'],
        ['meat', 'potato', 'locro'],
        ['pasta', 'potato', 'gnochi'],
        ['pasta', 'tomato', 'spaghetti'],
        ['pasta', 'meat', 'pasta-meatball'],
      ],
      selectedIngredients
    ),
    new Bowl(
    [
      ['water', 'flour', 'dough'],
      ['water', 'water', 'glass-of-water'],
      ['fruit', 'sugar', 'fruit-salad'],
      ['fruit', 'water', 'juice'],
      ['fruit', 'milk', 'smoothie'],
      ['glass-of-water', 'fruit', 'juice'],
      ['glass-of-water', 'sugar', 'soda-water'],
      ['flour', 'egg', 'pasta'],
      ['dough', 'sugar', 'cake-premix'],
      ['lettuce', 'tomato', 'salad'],
      ['pasta', 'tomato-sauce', 'spaghetti'],
      ['meat', 'bread', 'sandwich'],
      ['cake', 'fruit', 'cake-fruit'],
      ],
      selectedIngredients
    )
  ])

  const chooseIngredient = (ingredient: ingredient) => {
    if (selectedUtensil === undefined) return;

    setIngredients(selectedUtensil[0].setIngredients(ingredient))
  }

  const chooseUtensil = (utensil: utensil) => {
    if (selectedUtensil !== undefined) utensil.cleanUtensil();
    setSelectedUtensil([utensil])
    setIngredients([])
    console.log(selectedUtensil)
  }

  const combineIngredients = (selectedIngredients: ingredient[]) => {
    if (selectedIngredients.length === 0) {
      Alert.noIngredientSelected()
      return;
    }
    const resultName = selectedUtensil[0].combine();
    console.log(resultName)

    if(resultName !== undefined){
      const oldRecipe = recipes.find((ingredient) => (ingredient.name === resultName))
      if (oldRecipe === undefined) {
        Alert.noCombination()
      } 
      else {
        if (oldRecipe.isAvailable === true) {
          Alert.ingredientAlreadyDiscovered(resultName)
          return;
        }
        const newRecipe = { ...oldRecipe, isAvailable: true }
        const oldRecipes = recipes.filter((ingredient) => (ingredient.name !== resultName))
        setRecipes([...oldRecipes, newRecipe])

        if(newRecipe.isInMenu)
          Alert.recipeDiscovered(resultName)
        else
          Alert.ingredientDiscovered(resultName)        
        if((recipes.filter((a) => (a.isAvailable && a.isInMenu )).length + 1) === recipes.filter((a)=> (a.isInMenu)).length){
          Alert.allRecipesDiscovered();  
        }
      }
    }
    else
      Alert.noCombination()
  }

  const cancelUtensil = () => {
    setSelectedUtensil([])
  }

  const cancelIngredients = () => {
    selectedUtensil[0].cleanUtensil();
    setIngredients([])
  }

  return (
    <div className="App">
      <Welcome />
      <div className="AppName">Little Restaurant</div>
      <div className="progress">
        Recipes Found: {`${recipes.filter((a) => (a.isAvailable && a.isInMenu)).length} / 
                         ${recipes.filter((a) => (a.isInMenu)).length}`}
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
            onCancelUtensils={cancelUtensil} />
        </div>
        <div className="restaurantEl">
          <Menu menu={recipes.filter((a) => (a.isInMenu && a.isAvailable))} />
        </div>
      </div>
    </div>
  );
}

export default App;
