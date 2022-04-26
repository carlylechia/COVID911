import { IoMdSettings } from 'react-icons/io';
import './Navbar.css';

const Navbar = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <header>
        <p>{year}</p>
        <p>most views</p>
        <IoMdSettings className="setting" />
      </header>
      <div id="headline">
        <h1 className="topic">
          <text style={{ whiteSpace: 'pre-line' }}>
            {'Covid Statistics<br/> around the world.'.split('<br/>').join('\n')}
          </text>
        </h1>
        <div />
      </div>
    </>
  );
};
export default Navbar;
