/* eslint-disable react/prop-types */
import styles from "./CountriesList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

export default function CountriesList({ cities, isLoading }) {
  console.log(cities);
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const counties = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {counties?.map((country, index) => (
        <CountryItem key={index} country={country}></CountryItem>
      ))}
    </ul>
  );
}
