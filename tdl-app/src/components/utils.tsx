import { ReactElement, JSXElementConstructor } from "react";
import { ingredient } from "./Ingredient/Ingredient";

const utensilImages = require.context('./Images', true)
const ingredientImages = require.context('./Images', true)


export abstract class utensil {
    name: string;
    combinations: string[][];
    action: string;
    maxIngredients: number;
    ingredients : ingredient []

    constructor(name: string, combinations: string[][], action: string, maxIngredients: number, ingredients: ingredient[]) {
        this.name = name;
        this.combinations = combinations;
        this.action = action;
        this.maxIngredients = maxIngredients;
        this.ingredients = ingredients;
    }

    public render(onClick: Function) : React.ReactElement {
        return (<>
            {this.displayIngredients()}
            {this.display(onClick)}
        </>)
    }
    public display(onClick: Function) : React.ReactElement {
        return (    
            <button className="utensil" onClick={() => onClick(this)}>
                <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}} className="utensilName">
                <span>{this.name.charAt(0).toUpperCase() +  this.name.slice(1)}</span>
                </div>
    
                <div className="utensilImg" style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                <img src={utensilImages(`./${ this.name }.png`)} alt={`${this.name}`}/>
                </div>
            </button>)
    };
    protected abstract displayIngredients() : React.ReactElement;
    public abstract combine() : string | undefined;

    public setIngredients(ingredient: ingredient) : ingredient[] {
        if (this.ingredients.length < this.maxIngredients) {
            const newIngredients = [...this.ingredients, ingredient]
            this.ingredients = newIngredients
            console.log(this.ingredients)
          } else {
            this.ingredients = [ingredient]
            console.log(this.ingredients)
          }
        return this.ingredients
    }
    public cleanUtensil() : void {
        this.ingredients = [];
    }
}


export class Bowl extends utensil {
    constructor(combinations: string[][], ingredients: ingredient[]) {
      super('bowl', combinations, 'fry or grill', 2, ingredients);
    }

    protected displayIngredients(): React.ReactElement {
        return (
        <div className='ingredientsContainer'>
            <div className='ingredientImgContainer'>
                {this.ingredients.length > 0 ?
                    <img className="ingredientImg" 
                        src={ingredientImages(`./${ this.ingredients[0].name }.png`)} 
                        alt={`${this.ingredients[0].name}`}/> : <></>}
            </div>
            <div className='ingredientImgContainer'>
                {this.ingredients.length > 1 ?
                    <img className="ingredientImg" 
                        src={ingredientImages(`./${ this.ingredients[1].name }.png`)} 
                        alt={`${this.ingredients[1].name}`}/> : <></>}
            </div>
        </div>
        )
    }

    public combine() {
        const selectedIngNames = [...this.ingredients.map( (a) => a.name), '']
    
        const result = this.combinations.find((value) => (
            (value[0] === selectedIngNames[0] && value[1] === selectedIngNames[1])  ||
                (value[0] === selectedIngNames[1] && value[1] === selectedIngNames[0])
        ))
        this.cleanUtensil();
        console.log(result)
        if (result !== undefined) {return result[this.maxIngredients]};
        return undefined
    }

  }

export class Oven extends utensil {
  constructor(combinations: string[][], ingredients: ingredient[]) {
    super('oven', combinations, 'bake', 3, ingredients);
  }

  protected displayIngredients(): React.ReactElement {
    return (
    <div className='ingredientsContainer'>
        <div className='ingredientImgContainer'>
            {this.ingredients.length > 0 ?
                <img className="ingredientImg" 
                    src={ingredientImages(`./${ this.ingredients[0].name }.png`)} 
                    alt={`${this.ingredients[0].name}`}/> : <></>}
        </div>
        <div className='ingredientImgContainer'>
            {this.ingredients.length > 1 ?
                <img className="ingredientImg" 
                    src={ingredientImages(`./${ this.ingredients[1].name }.png`)} 
                    alt={`${this.ingredients[1].name}`}/> : <></>}
        </div>
        <div className='ingredientImgContainer'>
            {this.ingredients.length > 2 ?
                <img className="ingredientImg" 
                    src={ingredientImages(`./${ this.ingredients[1].name }.png`)} 
                    alt={`${this.ingredients[1].name}`}/> : <></>}
        </div>
    </div>
    )
}
  
  public combine() {
    const selectedIngNames = [...this.ingredients.map( (a) => a.name).sort((a,b) =>  (a > b ? 1 : -1)), 
                              ...Array(this.maxIngredients-1).fill('')]
    console.log(selectedIngNames)

    const result = this.combinations.find(
        (value) => (value.slice(0,-1).every((x,i) => (x === selectedIngNames[i]))
    ))
    console.log(result)
    this.cleanUtensil();
    if (result !== undefined) {return result[this.maxIngredients]};
    return undefined
  }
}
  
export class Pot extends utensil {
    constructor(combinations: string[][], ingredients: ingredient[]) {
      super('pot', combinations, 'boil', 2, ingredients);
    }

    protected displayIngredients(): React.ReactElement {
        return (
        <div className='ingredientsContainer'>
            <div className='ingredientImgContainer'>
                {this.ingredients.length > 0 ?
                    <img className="ingredientImg" 
                        src={ingredientImages(`./${ this.ingredients[0].name }.png`)} 
                        alt={`${this.ingredients[0].name}`}/> : <></>}
            </div>
            <div className='ingredientImgContainer'>
                {this.ingredients.length > 1 ?
                    <img className="ingredientImg" 
                        src={ingredientImages(`./${ this.ingredients[1].name }.png`)} 
                        alt={`${this.ingredients[1].name}`}/> : <></>}
            </div>
        </div>
        )
    }

    public combine() {
        const selectedIngNames = [...this.ingredients.map( (a) => a.name), '']
    
        const result = this.combinations.find((value) => (
            (value[0] === selectedIngNames[0] && value[1] === selectedIngNames[1])  ||
                (value[0] === selectedIngNames[1] && value[1] === selectedIngNames[0])
        ))
        console.log(result)
        this.cleanUtensil();
        if (result !== undefined) {return result[this.maxIngredients]};
        return undefined
    }
  }
  
export class Pan extends utensil {
    constructor(combinations: string[][], ingredients: ingredient[]) {
      super('pan', combinations, 'combine', 2, ingredients);
    }

    protected displayIngredients(): React.ReactElement {
        return (
        <div className='ingredientsContainer'>
            <div className='ingredientImgContainer'>
                {this.ingredients.length > 0 ?
                    <img className="ingredientImg" 
                        src={ingredientImages(`./${ this.ingredients[0].name }.png`)} 
                        alt={`${this.ingredients[0].name}`}/> : <></>}
            </div>
            <div className='ingredientImgContainer'>
                {this.ingredients.length > 1 ?
                    <img className="ingredientImg" 
                        src={ingredientImages(`./${ this.ingredients[1].name }.png`)} 
                        alt={`${this.ingredients[1].name}`}/> : <></>}
            </div>
        </div>
        )
    }

    public combine() {
        const selectedIngNames = [...this.ingredients.map( (a) => a.name), '']
    
        const result = this.combinations.find((value) => (
            (value[0] === selectedIngNames[0] && value[1] === selectedIngNames[1])  ||
                (value[0] === selectedIngNames[1] && value[1] === selectedIngNames[0])
        ))
        console.log(result)
        this.cleanUtensil();
        if (result !== undefined) {return result[this.maxIngredients]};
        return undefined
    }
  }
  
