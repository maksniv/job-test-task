import styles from './Card.module.scss';
import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';

function Card({
  id,
  name,
  model,
  year,
  color,
  price,
  latitude,
  longitude,
  removeCar,
  updateCarDescription,
}) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal
        modal={modal}
        setModal={setModal}
        id={id}
        name={name}
        model={model}
        year={year}
        color={color}
        price={price}
        latitude={latitude}
        longitude={longitude}
        removeCar={removeCar}
        updateCarDescription={updateCarDescription}
      />
      <div className={styles.card} id={id}>
        <img
          className={styles.card__poster}
          alt={name}
          src={`https://placehold.co/260x200?text=${
            name + ' ' + model
          }&font=Oswald`}
        ></img>
        <div className={styles.card__description}>
          <div className={styles.card__name}>
            {name} {model}
          </div>
          <div className={styles.card__price}>{price}</div>
          <div className={styles.card__year}>{year}</div>
        </div>
        <button className={styles.card__button} onClick={() => setModal(true)}>
          Подробнее
        </button>
      </div>
    </>
  );
}

export default Card;
