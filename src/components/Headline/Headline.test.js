import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../Redux/createStore';
import Headline from './Headline';

describe('Headline component test', () => {
  test('Headline snapshot', () => {
    const headline = render(
      <Router>
        <Provider store={store}>
          <Headline />
        </Provider>
      </Router>,
    );
    expect(headline).toMatchSnapshot();
  });
});
