import PropTypes from 'prop-types';

const Region = ({ name }) => (
  <>
    <p>Hi</p>
    <p>{name}</p>
  </>
);
Region.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Region;
