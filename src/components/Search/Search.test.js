import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../Redux/createStore';
import Search from './Search';

describe('Search component test', () => {
  test('Search snapshot', () => {
    const search = render(
      <Router>
        <Provider store={store}>
          <Search />
        </Provider>
      </Router>,
    );
    expect(search).toMatchSnapshot();
  });
});
