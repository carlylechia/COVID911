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
        height: '60%',
        background: ` url(${image}) no-repeat 50% 50%`,
        backgroundSize: 'auto 80%',
        opacity: '0.2',
      }}
      loading="lazy"
    />
    <p className="pr3 white f4 b" style={{ fontSize: '1.3rem', color: 'aliceblue', textAlign: 'center' }}>{name}</p>
    <p className="db pr3 white f5 b" style={{ fontSize: '1rem', color: 'azure', textAlign: 'center' }}>
      Total:
      {` ${total}`}
    </p>
    <p className="db pr3 white f5 b" style={{ fontSize: '1rem', color: 'azure', textAlign: 'center' }}>
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
