import PropTypes from 'prop-types';
import './Region.css';

const Region = ({ name, newCases }) => (
  <div className="states-container">
    <p className="">{name}</p>
    <p className="">{newCases}</p>
  </div>
);
Region.propTypes = {
  name: PropTypes.string.isRequired,
  newCases: PropTypes.number.isRequired,
};
export default Region;
