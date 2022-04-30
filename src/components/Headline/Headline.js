import { useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import Search from '../Search/Search';
import './Headline.css';
import CountryImage from '../Countries/Country/CountryImage';

const Headline = () => {
  const { pathname } = useLocation();
  const mapCondition = pathname.replace('/', '');
  const newCases = useSelector((state) => state.regionsReducer.newCases, shallowEqual);
  const countryName = mapCondition.replace(/[_]/g, '-').replace('*', '').replace(',', '').toUpperCase();
  return (
    <div id="headline" className="flex ma0 justify-center items-center relative">
      <div className="structure">
        <CountryImage
          className={`${!mapCondition.length ? 'block' : 'none'} o-30 w-auto-ns w-50 h-100-ns h-50 maps`}
          alt=""
          src="world-map"
        />
        <CountryImage
          className={`${mapCondition.length ? 'block' : 'none'} o-30 w-auto-ns w-50 h-100-ns h-50 maps`}
          alt=""
          src={mapCondition}
        />

        <h1 className="topic white f2-l f4-m f4-ns f5">
          {!mapCondition.length ? (
            <span style={{ whiteSpace: 'pre-line' }}>
              {'Covid Statistics<br/> around the world.'.split('<br/>').join('\n')}
            </span>
          )
            : (
              <>
                <p>
                  {countryName}
                </p>
                <p>
                  Confirmed New Cases:
                  {newCases}
                </p>
              </>
            )}
        </h1>
      </div>
      <Search />
    </div>
  );
};
export default Headline;
