import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './CardField.module.scss';
import { getCarsDescription } from '../../utils/carsAPI';

function CardField() {
  const [cards, setCards] = useState([]);

  const loadingCarsDescription = async () => {
    const carsDescription = await getCarsDescription();
    setCards(carsDescription);
  };

  useEffect(() => {
    loadingCarsDescription();
  }, []);

  return (
    <>
      <div className={styles.card_field}>
        {cards.map((card) => {
          return (
            <Card
              id={card.id}
              key={card.id}
              name={card.name}
              model={card.model}
              year={card.year}
              color={card.color}
              price={card.price}
              latitude={card.latitude}
              longitude={card.longitude}
            ></Card>
          );
        })}
      </div>
    </>
  );
}

export default CardField;
