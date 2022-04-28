import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Country = ({
  name, image, total, newCases, pageUrl,
}) => (
  <NavLink
    to={`${pageUrl}`}
    className="country-card"
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
    <p className="country-names">{name}</p>
    <span className="">
      Total:
      {` ${total}`}
    </span>
    <span className="">
      New Cases:
      {` ${newCases}`}
    </span>
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
