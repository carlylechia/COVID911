import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { useCountryImage } from './CountryImage';
import CountryClasses from './Country.module.css';

const Country = ({
  name, image, total, newCases, pageUrl,
}) => {
  const img = useCountryImage(image);

  return (
    <NavLink
      to={`${pageUrl}`}
      className="country-card grow pointer flex flex-column justify-center items-center"
      style={{ minHeight: '25vh' }}
    >
      <div
        to={`${pageUrl}`}
        style={{ color: '#fff', position: 'absolute', right: '0' }}
      >
        <IoIosArrowDroprightCircle />
      </div>
      <div
        style={{
          width: '10rem',
          height: '50%',
          backgroundImage: `url(${img})`,
          opacity: '0.2',
        }}
        className={CountryClasses.cover}
        loading="lazy"
      />
      <p
        className="pr3 white f4 b"
        style={{ fontSize: '1.3rem', color: 'aliceblue', textAlign: 'center' }}
      >
        {name}
      </p>
      <p
        className="db pr3 white f5 b"
        style={{ fontSize: '1rem', color: 'azure', textAlign: 'center' }}
      >
        Total:
        {` ${total}`}
      </p>
      <p
        className="db pr3 white f5 b"
        style={{ fontSize: '1rem', color: 'azure', textAlign: 'center' }}
      >
        New Cases:
        {` ${newCases}`}
      </p>
    </NavLink>
  );
};
Country.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  newCases: PropTypes.number.isRequired,
  pageUrl: PropTypes.string.isRequired,
};

export default Country;
