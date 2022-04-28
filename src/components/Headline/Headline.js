import { useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import Search from '../Search/Search';
import { getImage } from '../../Redux/apiFunctions';
import './Headline.css';

const Headline = () => {
  const { pathname } = useLocation();
  const mapCondition = pathname.replace('/', '');
  const newCases = useSelector((state) => state.regionsReducer.newCases, shallowEqual);
  const countryName = mapCondition.replace(/[_]/g, '-').replace('*', '').replace(',', '').toUpperCase();
  return (
    <div id="headline">
      <div className="structure">
        <img
          className={`${!mapCondition.length ? 'block' : 'none'}`}
          alt=""
          src={getImage('world-map')}
        />
        <img
          className={`${mapCondition.length ? 'block' : 'none'} maps`}
          alt=""
          src={mapCondition.length ? getImage(mapCondition) : '#'}
        />

        <h1 className="topic">
          {!mapCondition.length ? (
            <span style={{ whiteSpace: 'pre-line' }}>
              {'Covid Statistics<br/> around the world.'.split('<br/>').join('\n')}
            </span>
          )
            : `${countryName} \n Confirmed New Cases: ${newCases}`}
        </h1>
      </div>
      <Search />
    </div>
  );
};
export default Headline;
