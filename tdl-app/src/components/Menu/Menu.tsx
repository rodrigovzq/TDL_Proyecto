import React from 'react'
import './Menu.css'

export interface menu {

}

interface Props {
    menu: menu[]
}

function Menu({menu}: Props) {
    return (
        <div className="menuContainer">
            <div className="menuHeader">
                Menu
            </div>
            <div className="menuContent">
                {menu.length === 0 ? 
                <div className="placeholder">
                    There are no items available yet
                </div> :
                // @todo:  show menu elements
                <></>} 
            </div>
        </div>
)}

export default Menu