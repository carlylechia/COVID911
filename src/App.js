import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Countries from './components/Countries/Countries';
import { fetchCountries } from './Redux/countries/countries';
import NationalRegions from './components/NationalRegions/NationalRegions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:country" element={<NationalRegions />} />
      </Routes>
    </>
  );
};

export default App;
