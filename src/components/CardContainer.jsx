import React, {useState} from 'react'
import Card from './Card'
import FormCard from './FormCard';
import '../styles/CardContainer.css';

function CardContainer() {
    
  const [cards, setCards] = useState([]);
  
  const addCard = (card) => {
    console.log(card)
    const updateCards = [card, ...cards];
    setCards(updateCards)
  }

  const deleteCard = (id) => {
    const updateCards = cards.filter(card => card.id !== id)
    setCards(updateCards)
  }

  return(
    <div className='container'>
      <FormCard onSubmit={addCard} className='form'/>
      <div className='cards-container'>
        {
          cards.map((card) => 
            <Card 
              key={card.id}
              id={card.id}
              img={card.image}
              title={card.title}
              description={card.description}
              hasImg={card.hasImg}
              deleteCard={deleteCard}
            />
          )
        }
      </div>
    </div>
  );
}

export default CardContainer;