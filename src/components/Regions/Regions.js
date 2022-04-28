import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Region from './Region/Region';
import { fetchRegions } from '../../Redux/regions/regions';
import loading from '../../Images/loading.gif';

const Regions = () => {
  const { pathname } = useLocation();

  const regionList = useSelector((state) => state.regionsReducer.regions, shallowEqual);
  const wait = useSelector((state) => state.regionsReducer.wait, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    const countryName = pathname.replace('/', '');
    dispatch(fetchRegions(countryName));
  }, []);
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <h2 className="white f6 tracked fw3 pa2" style={{ background: '#d70040' }}>
        {`CITY/TOWN/REGION - ${year}`}
      </h2>
      {regionList.map((region) => (
        <Region
          key={region.id}
          name={region.name}
          newCases={region.newCases}
        />
      ))}
      {!regionList.length && !wait ? <p className="white f4 fw4 tc pa3">There is no data</p> : ''}
      {wait ? <img width="100" height="100" className="db center" alt="loading" src={loading} /> : ''}
    </>
  );
};

export default Regions;
