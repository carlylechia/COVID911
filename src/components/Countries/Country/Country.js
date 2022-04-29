import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Country = ({
  name, image, total, newCases, pageUrl,
}) => (
  <NavLink
    to={`${pageUrl}`}
    className="country-card grow pointer flex flex-column justify-center items-center"
    style={{ minHeight: '25vh' }}
  >
    <div
      style={{
        width: '10rem',
        height: '70%',
        background: ` url(${image}) no-repeat 50% 50%`,
        backgroundSize: 'auto 80%',
        opacity: '0.2',
      }}
      loading="lazy"
    />
    <p className="pr3 white f4 b" style={{ fontSize: '1.3rem', color: 'aliceblue' }}>{name}</p>
    <span className="db pr3 white f5 b" style={{ fontSize: '1rem', color: 'azure' }}>
      Total:
      {` ${total}`}
    </span>
    <p className="db pr3 white f5 b" style={{ fontSize: '1rem', color: 'azure' }}>
      New Cases:
      {` ${newCases}`}
    </p>
  </NavLink>
);
Country.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  newCases: PropTypes.number.isRequired,
  pageUrl: PropTypes.string.isRequired,
};

export default Country;
