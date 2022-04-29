import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../Redux/createStore';
import Country from './Country/Country';
import Countries from './Countries';

describe('Countries component test', () => {
  test('Countries snapshot', () => {
    const props = {
      name: 'country 1',
      image: 'country 1 image',
      total: 100,
      newCases: 50,
      pageUrl: 'url',
    };
    const {
      name, image, total, newCases, pageUrl,
    } = props;
    render(
      <Router>
        <Provider store={store}>
          <Country
            name={name}
            image={image}
            total={total}
            newCases={newCases}
            pageUrl={pageUrl}
          />
        </Provider>
      </Router>,
    );
    expect(render(
      <Router>
        <Provider store={store}>
          <Countries />
        </Provider>
      </Router>,
    )).toMatchSnapshot();
  });
});
