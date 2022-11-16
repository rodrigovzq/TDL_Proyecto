import React from 'react'
import {useState} from 'react'
import './Welcome.css'

function Welcome() {
    const [Ack, setAck] = useState<boolean>(false)

    const acknowledge = () => {
        setAck(true);
    }

    return (
    <div className={`welcome ${Ack === true? 'Acked': ''}`}>
    <div className="welcomeHeader">Welcome to Little Restaurant </div>
    <div className="welcomeText">
      Open the cupboards to reveal ingredients and utensils! Combine them together to find all the recipes.
    </div>
    <button className="welcomeAck" onClick={() => acknowledge()}>Got it.</button>
  </div>)
}

export default Welcome