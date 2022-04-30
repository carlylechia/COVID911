import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../Redux/createStore';
import Region from './Region';

describe('Region component test', () => {
  test('Region snapshot', () => {
    const props = {
      name: 'region 1',
      newCases: 50,
    };
    const {
      name, newCases,
    } = props;
    const region = render(
      <Router>
        <Provider store={store}>
          <Region
            name={name}
            newCases={newCases}
          />
        </Provider>
      </Router>,
    );
    expect(region).toMatchSnapshot();
  });
});
