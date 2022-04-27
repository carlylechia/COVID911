import { useSelector } from 'react-redux';
import Country from './Country/Country';
import loading from '../../Images/loading.gif';
import './Countries.css';

const Countries = () => {
  const countryList = useSelector((state) => state.countriesReducer.countries);
  return (
    !countryList.length ? <img className="loading" width="100" height="100" alt="loading" src={loading} />
      : (
        <>
          <h2 style={{ background: 'rgb(222, 49, 99)' }}>STATS BY COUNTRY</h2>
          <main id="countries-container">
            {countryList.map((country) => (
              <Country
                key={country.id}
                pageUrl={country.id}
                image={country.image}
                name={country.name}
                total={country.total}
                newCases={country.newCases}
              />
            ))}
          </main>
        </>
      )
  );
};

export default Countries;
