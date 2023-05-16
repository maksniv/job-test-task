import styles from './SortingButton.module.scss';

function SortingButton() {
  return (
    <>
      <form className={styles.form_sort}>
        <button className={styles.form_sort__button}>
          Сортировать по году выпуска
        </button>
        <button className={styles.form_sort__button}>
          Сортировать по стоимости
        </button>
        <label className={styles.form_sort__label}>
          <input
            type="radio"
            name="sort"
            value="up"
            className={styles.form_sort__input}
          />
          По возрастанию
        </label>
        <label className={styles.form_sort__label}>
          <input
            type="radio"
            name="sort"
            value="down"
            className={styles.form_sort__input}
          />
          По убыванию
        </label>
      </form>
    </>
  );
}

export default SortingButton;
