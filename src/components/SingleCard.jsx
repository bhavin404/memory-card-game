import React from 'react'
import "./SingleCard.css"

const SingleCard = ({card,handleChoices,flipped}) => {
  
    const handleCards = () =>{
        handleChoices(card)
    }

    return (
    <div className="card" >
            <div className={flipped ? "flipped" : ""}>
              <img src={card.src} alt="front-card" className="front" />
              <img 
              src="/img/cover.webp" 
              alt="back-card" 
              className="back"
              onClick={handleCards}
              />
            </div>

          </div>
  )
}

export default SingleCard