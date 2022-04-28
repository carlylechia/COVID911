import { getCountries } from '../apiFunctions';

const COUNTRY_LOAD = 'covid911/countries/COUNTRY_LOAD';
const COUNTRY_LOADED = 'covid911/countries/COUNTRY_LOADED';
const COUNTRY_LOAD_FAILED = 'covid911/countries/COUNTRY_LOAD_FAILED';

const FILTER_COUNTRIES = 'covid911/search/FILTER_COUNTRIES';

const REGIONS_LOAD = 'covid911/regions/REGIONS_LOAD';

export const filterCountries = (input) => ({
  type: FILTER_COUNTRIES, payload: input,
});
export const fetchCountries = () => (dispatch) => {
  dispatch({ type: COUNTRY_LOAD });
  return getCountries().then((countries) => dispatch({ type: COUNTRY_LOADED, payload: countries }))
    .catch(() => dispatch({ type: COUNTRY_LOAD_FAILED }));
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
    case FILTER_COUNTRIES:
      return {
        ...state,
        filteredCountries: state.countries.filter(
          (country) => country.name.toLowerCase().includes(action.payload.toLowerCase()),
        ),
      };
    case REGIONS_LOAD:
      return {
        ...state, filteredCountries: state.countries,
      };
    default:
      return state;
  }
};
export default countriesReducer;
