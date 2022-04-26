const images = require.context('../Images', true);
const countriesAPI = 'https://api.covid19tracking.narrativa.com/api/';
const getImage = (name) => {
  let countryName = name.replace(/[_]/g, '-').replace('*', '').replace(',', '');
  if (countryName === 'diamond-princess' || countryName === 'ms-zaandam') countryName = 'ship';
  if (countryName === 'south-sudan') countryName = 'sudan';
  if (countryName.includes('congo')) countryName = 'congo';
  if (countryName === 'west-bank-and-gaza') countryName = 'palestine';
  if (countryName.includes('timor')) countryName = 'timor';
  if (countryName === 'us') countryName = 'usa';
  return images.keys().includes(`./${countryName}.png`) ? images(`./${countryName}.png`)
    : `https://mapsvg.com/static/maps/geo-calibrated/${countryName}.svg`;
};

const getCountries = async () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);
  const currentDate = `${year}-${month}-${day}`;
  const response = await fetch(`${countriesAPI}/${currentDate}`)
    .then((res) => res.json()).then((result) => result);

  const { countries } = Object.values(response.dates)[0];
  delete countries.Israel;
  const mappedCountries = Object.values(countries).map((country) => {
    const image = getImage(country.id);
    return {
      id: country.id,
      name: country.name === 'West Bank and Gaza' ? 'Palestine' : country.name,
      regions: country.regions,
      total: country.today_confirmed,
      newCases: country.today_new_confirmed,
      image,
    };
  });
  return mappedCountries;
};

export default getCountries;
