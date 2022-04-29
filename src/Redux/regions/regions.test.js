import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import regionsReducer, { fetchRegions } from './regions';

describe('regions redux test', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  test('fetchRegions test', () => {
    const store = mockStore({});
    return store.dispatch(fetchRegions('italy'))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('covid911/countries/REGIONS_LOAD');
        expect(actions[1].type).toEqual('covid911/countries/REGIONS_LOADED');
      });
  });
});

describe('regionsReducer', () => {
  test('test regionsReducer empty action', () => {
    const initialState = {
      regions: [],
      countryName: '',
      newCases: '',
      error: '',
      wait: true,
    };
    const result = regionsReducer(initialState, {});
    expect(result.regions.length).toBe(0);
  });
  test('test regionsReducer empty action', () => {
    const initialState = {
      regions: [],
      countryName: '',
      newCases: '',
      error: '',
      wait: true,
    };
    const result = regionsReducer(initialState, {});
    expect(result.regions.length).toBe(0);
  });
  test('test regionsReducer wait regions', () => {
    const initialState = {
      regions: [],
      countryName: '',
      newCases: '',
      error: '',
      wait: true,
    };
    const action = {
      type: 'covid911/regions/REGIONS_LOAD',
    };
    const result = regionsReducer(initialState, action);
    expect(result.wait).toBe(true);
  });
  test('test regionsReducer regions loaded', () => {
    const initialState = {
      regions: [],
      countryName: '',
      newCases: '',
      error: '',
      wait: true,
    };
    const action = {
      type: 'covid911/regions/REGIONS_LOADED',
      payload: ['region1', 'region2', 'region3', 'region4'],
    };
    const result = regionsReducer(initialState, action);
    expect(result.wait).toBe(true);
    expect(result.regions.length).toBe(0);
  });

  test('test regionsReducer regions load failed', () => {
    const initialState = {
      regions: [],
      countryName: '',
      newCases: '',
      error: '',
      wait: true,
    };
    const action = {
      type: 'covid911/regions/REGIONS_LOAD_FAILED',
    };
    const result = regionsReducer(initialState, action);
    expect(result.wait).toBe(true);
    expect(result.error).toBe('');
  });
  test('test regionsReducer reset search', () => {
    const initialState = {
      regions: [],
      countryName: '',
      newCases: '',
      error: '',
      wait: true,
      input: 'dsda',
    };
    const action = {
      type: 'covid911/search/FILTER_COUNTRIES',
      action: 'doit',
    };
    const result = regionsReducer(initialState, action);
    expect(result.input).toBe(action.payload);
  });
});
