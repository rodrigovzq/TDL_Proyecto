import React from 'react'
import {useState} from 'react'
import './Welcome.css'

const instructionsBtn = require("../../button-images/book.png")

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
      <div className="instructionsText">
        Tap the <img className="instructionsIcon" src={instructionsBtn}/> button to show the instructions.
      </div>
    <button className="welcomeAck" onClick={() => acknowledge()}>Got it.</button>
  </div>)
}

export default Welcome