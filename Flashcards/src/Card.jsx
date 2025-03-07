import React from "react";
import { useState } from "react";
import flashCards from "./data";

const Card = () => {
    const [fliped, setFliped] = useState(false)
    const [index, setIndex] = useState(Math.floor(Math.random() * flashCards.length))

    const handleFlip = () => {
        setFliped(!fliped)
    }

    const getNextCard = () => {
        let randomIndex = Math.floor(Math.random() * flashCards.length)
        while (randomIndex == index){
            randomIndex = Math.floor(Math.random() * flashCards.length)
        }
        setIndex(randomIndex)
        setFliped(false)
    }

    return (
        <div className="card-containter">
            <div className={`card ${fliped ? "flipped" : ""} ${flashCards[index].difficulty}`} onClick={handleFlip}>
                <div className="card-front">
                    <h3>{flashCards[index].question}</h3>
                </div>
                <div className="card-back">
                    <h3>{flashCards[index].answer}</h3>
                </div>
            </div>
            <div className="button-container">
                <button onClick={getNextCard}>Next</button>
            </div>
        </div>
    )

}

export default Card