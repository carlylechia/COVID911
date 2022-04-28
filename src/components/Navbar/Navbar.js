import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <header>
        <p className="navleft">
          <Link to="/"><IoIosArrowBack className="arrow" /></Link>
          {year}
        </p>
        {' '}
        <p>most views</p>
        <IoMdSettings className="setting" />
      </header>
      {/* <div id="headline">
        <h1 className="topic">
          <span style={{ whiteSpace: 'pre-line' }}>
            {'Covid Statistics<br/> around the world.'.split('<br/>').join('\n')}
          </span>
        </h1>
      </div> */}
    </>
  );
};
export default Navbar;
