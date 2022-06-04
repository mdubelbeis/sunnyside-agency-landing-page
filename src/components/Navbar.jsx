import { useState } from 'react';

import logo from '../images/logo.svg';
import menu from '../images/icon-hamburger.svg';

import NavLinks from './NavLinks';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-6 lg:px-10">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <NavLinks showMenu={showMenu} />
      <div onClick={handleMenuClick} className="lg:hidden">
        <img src={menu} alt="menu" />
      </div>
    </nav>
  );
};

export default Navbar;
