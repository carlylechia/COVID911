import PropTypes from 'prop-types';

const Country = ({ name }) => (
  <>
    <p>Hi</p>
    <p>{name}</p>
  </>
);
Country.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Country;
