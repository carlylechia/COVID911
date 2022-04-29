import PropTypes from 'prop-types';
import './Region.css';

const Region = ({ name, newCases }) => (
  <div className="f4 fw4 states-container pa5-ns pa3 pt3 pb3">
    <p className="f4 fw4 white">{name}</p>
    <p className="f4 fw4 tr pr3 white">{newCases}</p>
  </div>
);
Region.propTypes = {
  name: PropTypes.string.isRequired,
  newCases: PropTypes.number.isRequired,
};
export default Region;
