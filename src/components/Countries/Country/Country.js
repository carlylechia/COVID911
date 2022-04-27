import PropTypes from 'prop-types';
import './Country.css';

const Country = ({
  name, image, total, newCases,
}) => (
  <div id="country-card">
    <img id="country-map" style={{ width: '100%', height: 'auto' }} alt={`${name} map`} src={image} loading="lazy" />
    <p id="country-name">{name}</p>
    <span id="new-cases">
      New Cases:
      {' '}
      {newCases}
    </span>
    <span id="total">
      Total:
      {' '}
      {total}
    </span>
  </div>
);
Country.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  newCases: PropTypes.number.isRequired,
};
export default Country;
