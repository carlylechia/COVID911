import { useSelector } from 'react-redux';
import Country from './Country/Country';

const Countries = () => {
  const countryList = useSelector((state) => state.countriesReducer.countries);
  return (
    !countryList.length ? <p>Error fetching data.</p>
      : (
        <>
          {countryList.map((country) => <Country key={country.id} name={country.name} />)}
        </>
      )
  );
};

export default Countries;
