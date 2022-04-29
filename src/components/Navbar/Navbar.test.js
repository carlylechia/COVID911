import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../Redux/createStore';
import Navbar from './Navbar';

describe('Navbar component test', () => {
  test('Navbar snapshot', () => {
    const navbar = render(
      <Router>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </Router>,
    );
    expect(navbar).toMatchSnapshot();
  });
});
