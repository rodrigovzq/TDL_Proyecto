import React from 'react'
import './Menu.css'
import Ingredient, {ingredient} from '../Ingredient/Ingredient'


interface Props {
    menu: ingredient[]
}

function Menu({menu}: Props) {
    return (
        <div className="menuContainer">
            <div className="menuHeader">
                <div className="menuHeaderText">Menu</div>
            </div>
            <div className="menuContent">
                {menu.length === 0 ? 
                <div className="placeholder">
                    There are no items available yet
                </div> :<>
                {menu.map((recipe) =><Ingredient ingredient={recipe} onClick={() => {}}/>)}
                </>} 
            </div>
        </div>
)}

export default Menu