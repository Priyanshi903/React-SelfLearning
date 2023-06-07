import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();//or can initialize with null

  // function returned to useeffect should not return promise, it may return cleanup func only
  useEffect(() => {

    // if we want to use asyn await inside the useeffect , we need to create function
    const fetchMeals = async () => {

      // const response = await fetch('https://food-order-app-react-c1c7d-default-rtdb.firebaseio.com/wrong');
      const response = await fetch('https://food-order-app-react-c1c7d-default-rtdb.firebaseio.com/meals.json');

      if (!response.ok) {
        console.log('errror');
        throw new Error('Something went wrong!');
      }
      const responseData = await response.json(); //responseData is an object
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    // fetchMeals() return promise, therefore we need to add await otherwise it will just reject the promise but will not throw error
    // fetchMeals().then().catch()
    fetchMeals().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>)
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>)
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
