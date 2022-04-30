const countriesAPI = 'https://api.covid19tracking.narrativa.com/api/';

const createDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const day = (`0${date.getDate() - 1}`).slice(-2);
  const currentDate = `${year}-${month}-${day}`;

  return currentDate;
};

export const getCountries = async () => {
  const date = createDate();
  const response = await fetch(`${countriesAPI}${date}`)
    .then((res) => res.json()).then((result) => result);

  const { countries } = Object.values(response.dates)[0];
  delete countries.Israel;
  const mappedCountries = Object.values(countries).map((country) => ({
    id: country.id,
    name: country.name === 'West Bank and Gaza' ? 'Palestine' : country.name,
    regions: country.regions,
    total: country.today_confirmed,
    newCases: country.today_new_confirmed,
  }));
  mappedCountries.sort((a, b) => b.newCases - a.newCases);
  return mappedCountries;
};
export const getRegions = async (countryName) => {
  const date = createDate();
  const response = await fetch(`${countriesAPI}${date}/country/${countryName}`)
    .then((res) => res.json()).then((result) => result);

  const { countries } = Object.values(response.dates)[0];
  const { regions, name, today_new_confirmed: newCases } = Object.values(countries)[0];
  const mappedRegions = regions.map((region) => ({
    id: region.id,
    name: region.name,
    newCases: region.today_new_confirmed ? region.today_new_confirmed : 0,
  }));
  mappedRegions.sort((a, b) => b.newCases - a.newCases);
  return { countryName: name, newCases, regions: mappedRegions };
};
getCountries();
