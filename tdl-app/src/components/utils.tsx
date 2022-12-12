import { ingredient } from "./Ingredient/Ingredient";
const utensilImages = require.context('./Images', true)

export abstract class utensil {
    name: string;
    combinations: string[][];
    action: string;
    maxIngredients: number;

    constructor(name: string, combinations: string[][], action: string, maxIngredients: number) {
        this.name = name;
        this.combinations = combinations;
        this.action = action;
        this.maxIngredients = maxIngredients;
    }

    public abstract render(onClick: Function) : React.ReactElement;
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
}


export class Bowl extends utensil {
    constructor(name: string, combinations: string[][]) {
      super(name, combinations, 'fry or grill', 2);
    }
    public render(onClick: Function) {
      return (    
        <>
            {this.display(onClick)}
        </>)
    }
  }

export class Oven extends utensil {
  constructor(name: string, combinations: string[][]) {
    super(name, combinations, 'bake', 3);
  }
  public render(onClick: Function) {
    return (    
        <>
            {this.display(onClick)}
        </>)
  }
}
  
export class Pot extends utensil {
    constructor(name: string, combinations: string[][]) {
      super(name, combinations, 'boil', 2);
    }
    public render(onClick: Function) {
      return (    
        <>
            {this.display(onClick)}
        </>)
    }
  }
  
export class Pan extends utensil {
    constructor(name: string, combinations: string[][]) {
      super(name, combinations, 'combine', 2);
    }
    public render(onClick: Function) {
      return (    
        <>
            {this.display(onClick)}
        </>)
    }
  }
  
