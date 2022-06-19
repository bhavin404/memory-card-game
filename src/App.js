import {useEffect, useState} from "react";
import SingleCard from "./components/SingleCard";
import './App.css';

const cardImages = [
  {"src": "/img/dog.png",match:false},
  {"src": "/img/cat.png",match:false},
  {"src": "/img/panda.png",match:false},
  {"src": "/img/lion.png",match:false},
  {"src": "/img/elephant.png",match:false},
  {"src": "/img/rabbit.png",match:false},

]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);


  const shuffleCards = ()=>{
    const shuffleCards = [...cardImages,...cardImages]
          .sort(()=> Math.random()-0.5)
          .map((card)=> ({...card,id:Math.random()}))  
    setCards(shuffleCards)
    setTurns(0)
  }

  // handle choices

  const handleChoices =(card) =>{
    choiceOne ?  setChoiceTwo(card) : setChoiceOne(card)

  }

  useEffect(() => {
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(newCard =>{
            if(newCard.src === choiceTwo.src){
              return {...newCard,match:true}
            }else{
              return newCard
            }
          })
        })
        resetTurn()
      }else{
        setTimeout(()=>{
          resetTurn()
          },1000)
      }
    }
  }, [choiceOne,choiceTwo])
  

  const resetTurn =()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  console.log("hello",cards);

  return (
    <div className="App">
      <h1>Magic Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns:{turns}</p>

      <div className="card-grid">
        {cards.map(card => (
         <SingleCard
         key={card.id}
         card={card}
          handleChoices={handleChoices} 
          flipped ={card === choiceOne || card === choiceTwo || card.match}
         />
        ))}



      </div>
    </div>
  );
}

export default App;
