import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const getCountrySlug = (name) => {
  let countryName = name.replace(/[_]/g, '-').replace('*', '').replace(',', '');
  if (countryName === 'diamond-princess' || countryName === 'ms-zaandam') countryName = 'ship';
  if (countryName === 'south-sudan') countryName = 'sudan';
  if (countryName.includes('congo')) countryName = 'congo';
  if (countryName === 'west-bank-and-gaza') countryName = 'palestine';
  if (countryName.includes('timor')) countryName = 'timor';
  if (countryName === 'us') countryName = 'usa';

  return countryName;
};

export const useCountryImage = (src) => {
  const [map] = useState(getCountrySlug(src));
  const [url, setUrl] = useState(`/images/${map}.png`);

  useEffect(() => {
    const img = new Image();
    img.onerror = () => {
      setUrl(`https://mapsvg.com/static/maps/geo-calibrated/${map}.svg`);
    };
    img.src = url;
  }, [url]);

  return url;
};

const CountryImage = ({ src, alt, className }) => {
  const url = useCountryImage(src);

  return <img src={url} alt={alt} className={className} />;
};

CountryImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CountryImage.defaultProps = {
  className: '',
};

export default CountryImage;
