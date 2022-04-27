import getCountries from '../apiFunctions';

const COUNTRY_LOAD = 'covid911/countries/COUNTRY_LOAD';
const COUNTRY_LOADED = 'covid911/countries/COUNTRY_LOADED';
const COUNTRY_LOAD_FAILED = 'covid911/countries/COUNTRY_LOAD_FAILED';

export const fetchCountries = () => (dispatch) => {
  dispatch({ type: COUNTRY_LOAD });
  getCountries().then((countries) => dispatch({ type: COUNTRY_LOADED, payload: countries }))
    .catch((err) => dispatch({ type: COUNTRY_LOAD_FAILED, payload: err }));
};

const initialState = {
  countries: [],
};
const countriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case COUNTRY_LOAD:
      return { ...state, wait: true, error: '' };
    case COUNTRY_LOADED:
      return { ...state, wait: false, countries: [...state.countries, ...action.payload] };
    case COUNTRY_LOAD_FAILED:
      return { ...state, wait: false, error: action.payload };
    default:
      return state;
  }
};
export default countriesReducer;
