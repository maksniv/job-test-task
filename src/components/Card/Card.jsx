import styles from './Card.module.scss';

function Card({ id, name, model, year, color, price, latitude, longitude }) {
  return (
    <>
      <div className={styles.card}>
        <img
          className={styles.card__poster} alt={name}
          src={`https://placehold.co/260x200?text=${
            name + ' ' + model
          }&font=Oswald`}
        ></img>
        <div className={styles.card__description}>
          <div className={styles.card__name}>
            {name} {model}
          </div>
          {/* <div className={styles.card__year}>{year}</div>
          <div className={styles.card__color}>{color}</div> */}
          <div className={styles.card__price}>{price}</div>
        </div>
        <button className={styles.card__button}>Подробнее</button>
      </div>
    </>
  );
}

export default Card;
