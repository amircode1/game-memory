import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';
import ModalGame from './components/modal';


function App() {

  const [img,setImg] = useState([]);
  const [show,setShow] = useState(false);
  const [choiceOne,setChoiceOne] = useState(null);
  const [choiceTwo,setChoiceTwo] = useState(null);
  const [disable,setDisable] = useState(false);

  const imgList = [
    {"src":"/img/helmet-1.png", matched : false},
    {"src":"/img/potion-1.png", matched : false},
    {"src":"/img/ring-1.png", matched : false},
    {"src":"/img/scroll-1.png", matched : false},
    {"src":"/img/shield-1.png", matched : false},
    {"src":"/img/sword-1.png", matched : false}
  ]

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisable(true)
      if (choiceOne.src === choiceTwo.src) {
        setImg(prevCard => {
          return prevCard.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched : true}
            }else{
              return card
            }
          })
        })
        reset()
      }else{
        setTimeout(() => reset(),1000)
      }
    }
  },[choiceOne,choiceTwo])

  useEffect(() => {
    if (img.every(card => card.matched)) {
      setShow(true);
    }
  }, [img]);
  
  const shuffleCard = () => {
    const shuffledCard = [...imgList,...imgList]
    .sort(() => Math.random(Math.floor()) - 0.5)
    .map((card) => ({...card, id : Math.random()}))
    setImg(shuffledCard)
    setShow(false);
    reset();
  }
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }
  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisable(false);
    setShow(false);
  }

  useEffect(() => {
    shuffleCard()
  },[])

  useEffect(() => {
    
  },[img])
  return (
    <div className="App">
      {show && <ModalGame handleClick={shuffleCard} show={show}/>}
      <h1>Game memory</h1>
      <button onClick={shuffleCard}>new Game</button>
      <div className='card-grid'>
        {img.map(card => (
          <div key={card.id}>
            <SingleCard
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disable={disable}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;