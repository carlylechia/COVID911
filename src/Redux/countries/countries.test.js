import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
import countriesReducer, { filterCountries, fetchCountries } from './countries';

registerRequireContextHook();

describe('countries redux test', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  test('fetchCountries test', () => {
    const store = mockStore({});
    return store.dispatch(fetchCountries())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('covid911/countries/COUNTRY_LOAD');
        expect(actions[1].type).toEqual('covid911/countries/COUNTRY_LOADED');
      });
  });
  test('filerCountries test', () => {
    const store = mockStore({});
    store.dispatch(filterCountries());
    const actions = store.getActions();
    expect(actions[0].type).toEqual('covid911/search/FILTER_COUNTRIES');
  });
});

describe('countriesReducer', () => {
  test('test countriesReducer empty action', () => {
    const initialState = {
      countries: [],
    };
    const result = countriesReducer(initialState, {});
    expect(result.countries.length).toBe(0);
  });
  test('test countriesReducer empty action', () => {
    const initialState = {
      countries: [],
    };
    const result = countriesReducer(initialState, {});
    expect(result.countries.length).toBe(0);
  });
  test('test countriesReducer wait countries', () => {
    const initialState = {
      countries: [],
    };
    const action = {
      type: 'covid911/countries/COUNTRY_LOAD',
    };
    const result = countriesReducer(initialState, action);
    expect(result.wait).toBe(true);
  });
  test('test countriesReducer countries loaded', () => {
    const initialState = {
      countries: [],
    };
    const action = {
      type: 'covid911/countries/COUNTRY_LOADED',
      payload: ['country1', 'country2', 'country3', 'country4'],
    };
    const result = countriesReducer(initialState, action);
    expect(result.wait).toBe(false);
    expect(result.countries.length).toBe(4);
  });

  test('test countriesReducer countries load failed', () => {
    const initialState = {
      countries: [],
    };
    const action = {
      type: 'covid911/countries/COUNTRY_LOAD_FAILED',
      payload: 'error fetching data',
    };
    const result = countriesReducer(initialState, action);
    expect(result.wait).toBe(false);
    expect(result.error).toBe('error fetching data');
  });

  test('test countriesReducer filter countries', () => {
    const state = {
      countries: [
        { name: 'France' },
        { name: 'Egypt' },
        { name: 'Italy' },
        { name: 'Tiwan' },
      ],
    };
    const action = {
      type: 'covid911/search/FILTER_COUNTRIES',
      payload: 'egy',
    };
    const result = countriesReducer(state, action);
    expect(result.filteredCountries.length).toBe(1);
  });
  test('test countriesReducer reset search', () => {
    const state = {
      countries: [],
      filteredCountries: [],
    };
    const action = {
      type: 'covid911/regions/REGIONS_LOAD',
    };
    const result = countriesReducer(state, action);
    expect(result.filteredCountries).toBe(result.countries);
  });
});
