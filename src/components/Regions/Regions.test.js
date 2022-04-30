import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../Redux/createStore';
import Region from './Region/Region';
import Regions from './Regions';

describe('Regions component test', () => {
  test('test Regions component', () => {
    const props = {
      name: 'region 1',
      newCases: 50,
    };
    const {
      name, newCases,
    } = props;
    render(
      <Router>
        <Provider store={store}>
          <Region
            name={name}
            newCases={newCases}
          />
        </Provider>
      </Router>,
    );
    expect(render(
      <Router>
        <Provider store={store}>
          <Regions />
        </Provider>
      </Router>,
    )).toMatchSnapshot();
  });
});
