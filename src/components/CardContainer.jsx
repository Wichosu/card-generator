import React, {useState} from 'react'
import Card from './Card'
import FormCard from './FormCard';

function CardContainer() {
    
  const [cards, setCards] = useState([]);
  
  const addCard = (card) => {
    console.log(card)
    const updateCards = [card, ...cards];
    setCards(updateCards)
  }

  return(
    <>
      <FormCard onSubmit={addCard} />
      <div className='cards-container'>
        {
          cards.map((card) => 
            <Card 
              key={card.id}
              id={card.id}
              img={'pic'}
              title={card.title}
              description={card.description}
            />
          )
        }
      </div>
    </>
  );
}

export default CardContainer;