import styles from './Modal.module.scss';

function Modal({
  modal,
  setModal,
  id,
  name,
  model,
  year,
  color,
  price,
  latitude,
  longitude,
  removeCar,
}) {
  return (
    <>
      <div
        className={
          modal ? styles.overlay + ' ' + styles.active : styles.overlay
        }
        onClick={() => setModal(false)}
      >
        <div
          className={modal ? styles.modal + ' ' + styles.active : styles.modal}
          onClick={(event) => event.stopPropagation()}
        >
          <div className={styles.modal__card} id={id}>
            <img
              className={styles.modal__card__poster}
              alt={name}
              src={`https://placehold.co/300x300?text=${
                name + ' ' + model
              }&font=Oswald`}
            ></img>
            <div className={styles.modal__description}>
              <div className={styles.modal__card__name}>Марка: {name}</div>
              <div className={styles.modal__card__model}>Модель: {model}</div>
              <div className={styles.modal__card__year}>
                Год выпуска: {year}
              </div>
              <div className={styles.modal__card__color}>
                Цвет машины: {color}
              </div>
              <div className={styles.modal__card__price}>Цена: {price}</div>
              <div className={styles.modal__card__map}></div>
              <button
                className={styles.modal__card__button_delete}
                onClick={() => [setModal(false), removeCar(id)]}
              >
                Удалить
              </button>
              <button
                className={styles.modal__card__button_edit}
                onClick={() => setModal(false)}
              >
                Редактировать
              </button>
            </div>
            <button
              className={styles.modal__card__button}
              onClick={() => setModal(false)}
            >
              &#10006;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
