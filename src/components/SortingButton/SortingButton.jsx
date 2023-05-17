import styles from './SortingButton.module.scss';
import { useState } from 'react';

function SortingButton({ sortCars }) {
  const [radioButtonValue, setRadioButtonValue] = useState('up');

  const changeValue = (event) => {
    setRadioButtonValue(event.target.value);
  };

  return (
    <>
      <div className={styles.form_sort}>
        <button
          className={styles.form_sort__button}
          onClick={() => sortCars('year', radioButtonValue)}
        >
          Сортировать по году
        </button>
        <button
          className={styles.form_sort__button}
          onClick={() => sortCars('price', radioButtonValue)}
        >
          Сортировать по стоимости
        </button>
        <label className={styles.form_sort__label}>
          <input
            type="radio"
            name="sort"
            value="up"
            className={styles.form_sort__input}
            checked={radioButtonValue === 'up' ? true : false}
            onChange={changeValue}
            autoFocus
          />
          <span className={styles.form_sort__span}>По возрастанию</span>
        </label>
        <label className={styles.form_sort__label}>
          <input
            type="radio"
            name="sort"
            value="down"
            className={styles.form_sort__input}
            checked={radioButtonValue === 'down' ? true : false}
            onChange={changeValue}
          />
          <span className={styles.form_sort__span}>По убыванию</span>
        </label>
      </div>
    </>
  );
}

export default SortingButton;
