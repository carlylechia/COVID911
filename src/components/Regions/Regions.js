import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Region from './Region/Region';
import { fetchRegions } from '../../Redux/regions/regions';
import loading from '../../Images/loading.gif';

const Regions = () => {
  const { pathname } = useLocation();

  const regionList = useSelector((state) => state.regionsReducer.regions);
  const wait = useSelector((state) => state.regionsReducer.wait);
  const dispatch = useDispatch();
  useEffect(() => {
    const countryName = pathname.replace('/', '');
    dispatch(fetchRegions(countryName));
  }, []);
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <h2 className="" style={{ background: '#d70040' }}>
        {`CITY/TOWN/REGION - ${year}`}
      </h2>
      <div>
        {regionList.map((region) => (
          <Region
            key={region.id}
            name={region.name}
            newCases={region.newCases}
          />
        ))}
      </div>
      {!regionList.length && !wait ? <p className="white f4 fw4 tc pa3">There is no data</p> : ''}
      {wait ? <img width="100" height="100" className="db center" alt="loading" src={loading} /> : ''}
    </>
  );
};

export default Regions;
