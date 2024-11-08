import React from "react";
import "./SingleCard.css";

export default function SingleCard({ handleChoice, card , flipped ,disable}) {
  const handleClick = () => {
    if(!disable) {
      handleChoice(card); 
    }
  };
  return (
    <div className="card">
        <div className={flipped ? "flipped" : "s"}>
            <img className="front" src={card.src} alt="card front" />
            <img className="back" src="/img/cover.png" alt="card back" onClick={handleClick} />
        </div>
    </div>
  );
}
