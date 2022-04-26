import { useSelector } from 'react-redux';
import Region from './Region/Region';

const Regions = () => {
  const regionList = useSelector((state) => state);
  return (
    <>
      {regionList.map((region) => <Region key={region.id} name={region.name} />)}
    </>

  );
};

export default Regions;
