import styles from './Modal.module.scss';
import { Map, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';

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
  updateCarDescription,
}) {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newModel, setNewModel] = useState(model);
  const [newPrice, setNewPrice] = useState(price);

  return (
    <>
      <div
        className={
          modal ? styles.overlay + ' ' + styles.overlay__active : styles.overlay
        }
        onClick={() => setModal(false)}
      >
        <div
          className={
            modal ? styles.modal + ' ' + styles.modal__active : styles.modal
          }
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
              {editing ? (
                <>
                  <input
                    className={styles.modal__card__input}
                    value={newName}
                    type="text"
                    onChange={(event) => setNewName(event.target.value)}
                  />
                  <input
                    className={styles.modal__card__input}
                    value={newModel}
                    type="text"
                    onChange={(event) => setNewModel(event.target.value)}
                  />
                  <input
                    className={styles.modal__card__input}
                    value={newPrice}
                    type="text"
                    onChange={(event) => setNewPrice(event.target.value)}
                  />
                </>
              ) : (
                <>
                  <div className={styles.modal__card__name}>Марка: {name}</div>
                  <div className={styles.modal__card__model}>
                    Модель: {model}
                  </div>
                  <div className={styles.modal__card__price}>Цена: {price}</div>
                </>
              )}
              <div className={styles.modal__card__year}>
                Год выпуска: {year}
              </div>
              <div className={styles.modal__card__color}>
                Цвет машины: {color}
              </div>
              <Map
                className={styles.modal__card__map}
                defaultState={{ center: [latitude, longitude], zoom: 14 }}
              >
                <Placemark defaultGeometry={[latitude, longitude]} />
              </Map>
              <div className={styles.modal__card__button_wrapper}>
                <button
                  className={styles.modal__card__button}
                  onClick={() => [setModal(false), removeCar(id)]}
                >
                  Удалить
                </button>
                {editing ? (
                  <button
                    className={styles.modal__card__button}
                    onClick={() => [
                      setEditing(false),
                      updateCarDescription(id, newName, newModel, newPrice),
                    ]}
                  >
                    Сохранить
                  </button>
                ) : (
                  <button
                    className={styles.modal__card__button}
                    onClick={() => setEditing(true)}
                  >
                    Редактировать
                  </button>
                )}
              </div>
            </div>
            <button
              className={styles.modal__card__button_close}
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
