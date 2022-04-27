import { getRegions } from '../apiFunctions';

const REGIONS_LOAD = 'covid-statistics/countries/REGIONS_LOAD';
const REGIONS_LOADED = 'covid-statistics/countries/REGIONS_LOADED';
const REGIONS_LOAD_FAILED = 'covid-statistics/countries/REGIONS_LOAD_FAILED';

export const fetchRegions = (name) => (dispatch) => {
  dispatch({ type: REGIONS_LOAD });
  getRegions(name).then(({ regions, countryName, newCases }) => dispatch({
    type: REGIONS_LOADED, payload: regions, countryName, newCases,
  }))
    .catch((err) => dispatch({ type: REGIONS_LOAD_FAILED, payload: err }));
};

const initialState = {
  regions: [],
  countryName: '',
  newCases: '',
  error: '',
  wait: true,
};
const regionsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGIONS_LOAD:
      return {
        ...state, wait: true, error: '', regions: [], countryName: '', newCases: '',
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
        ...state, wait: false, error: action.payload, regions: [], countryName: '', newCases: '',
      };
    default:
      return state;
  }
};
export default regionsReducer;
