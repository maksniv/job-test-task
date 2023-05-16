import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './CardField.module.scss';
import { getCarsDescription } from '../../utils/carsAPI';
import SortingButton from '../SortingButton/SortingButton';

function CardField() {
  const [cars, setCars] = useState([]);

  const removeCar = (id) => {
    setCars([...cars].filter((car) => car.id !== id));
  };

  const sortCars = (sortName, sortIn) => {
    if (sortIn === 'up') {
      setCars((prev) => [...prev.sort((a, b) => a[sortName] - b[sortName])]);
    } else {
      setCars((prev) => [...prev.sort((a, b) => b[sortName] - a[sortName])]);
    }
    console.log(sortName, sortIn);
  };

  const loadingCarsDescription = async () => {
    const carsDescription = await getCarsDescription();
    setCars(carsDescription);
  };

  useEffect(() => {
    loadingCarsDescription();
  }, []);

  return (
    <>
      <div className={styles.card_field}>
        <SortingButton sortCars={sortCars}></SortingButton>
        {cars.map((car) => {
          return (
            <Card
              id={car.id}
              key={car.id}
              name={car.name}
              model={car.model}
              year={car.year}
              color={car.color}
              price={car.price}
              latitude={car.latitude}
              longitude={car.longitude}
              removeCar={removeCar}
            ></Card>
          );
        })}
      </div>
    </>
  );
}

export default CardField;
