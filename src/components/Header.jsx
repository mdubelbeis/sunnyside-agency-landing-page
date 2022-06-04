import logo from '../images/logo.svg';
import menu from '../images/icon-hamburger.svg';

const Header = () => {
  return (
    <header className="bg-mobile-header-image">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <img src={menu} alt="menu" />
      </div>
    </header>
  );
};

export default Header;
