import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Headline from './components/Headline/Headline';
import Countries from './components/Countries/Countries';
import { fetchCountries } from './Redux/countries/countries';
import Regions from './components/Regions/Regions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return (
    <>
      <Navbar />
      <Headline />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:country" element={<Regions />} />
      </Routes>
    </>
  );
};

export default App;
