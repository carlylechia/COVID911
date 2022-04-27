import { useSelector } from 'react-redux';
import Country from './Country/Country';

const Countries = () => {
  const countryList = useSelector((state) => state.countriesReducer.countries);
  return (
    !countryList.length ? <p>Error fetching data.</p>
      : (
        <>
          <h2 style={{ background: '#35548b' }}>STATS BY COUNTRY</h2>
          <main>
            {countryList.map((country) => (
              <Country
                key={country.id}
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
