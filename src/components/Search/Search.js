import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { filterCountries } from '../../Redux/countries/countries';

const Search = () => {
  const notDisplay = useLocation().pathname.replace('/', '');
  const input = useSelector((state) => state.regionsReducer.input);
  const dispatch = useDispatch();
  return (
    <input
      className={`${notDisplay.length ? 'none' : 'block'}`}
      style={{
        borderWidth: '2px', borderRadius: '1rem', padding: '5px', fontSize: '1rem', textAlign: 'center', margin: '2rem auto',
      }}
      type="text"
      value={input}
      placeholder="Search Country"
      onChange={(e) => {
        dispatch(filterCountries(e.target.value));
      }}
    />
  );
};
export default Search;
