import { getRegions } from '../apiFunctions';

const REGIONS_LOAD = 'covid911/countries/REGIONS_LOAD';
const REGIONS_LOADED = 'covid911/countries/REGIONS_LOADED';
const REGIONS_LOAD_FAILED = 'covid911/countries/REGIONS_LOAD_FAILED';
const FILTER_COUNTRIES = 'covid911/search/FILTER_COUNTRIES';

export const fetchRegions = (name) => (dispatch) => {
  dispatch({ type: REGIONS_LOAD });
  return getRegions(name).then(({ regions, countryName, newCases }) => dispatch({
    type: REGIONS_LOADED, payload: regions, countryName, newCases,
  }))
    .catch(() => dispatch({ type: REGIONS_LOAD_FAILED }));
};

const initialState = {
  regions: [],
  countryName: '',
  newCases: '',
  error: '',
  wait: true,
  input: '',
};
const regionsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGIONS_LOAD:
      return {
        ...state, wait: true, error: '', regions: [], countryName: '', newCases: '', input: '',
      };
    case REGIONS_LOADED:
      return {
        ...state,
        wait: false,
        regions: [...state.regions, ...action.payload],
        countryName: action.countryName,
        newCases: action.newCases,
      };
    case REGIONS_LOAD_FAILED:
      return {
        ...state, wait: false, error: 'error fetching data', regions: [], countryName: '', newCases: '',
      };
    case FILTER_COUNTRIES:
      return {
        ...state, input: action.payload,
      };
    default:
      return state;
  }
};
export default regionsReducer;
