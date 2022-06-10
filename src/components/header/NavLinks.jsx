import { useEffect, useState } from 'react';

const NavLinks = ({ showMenu }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const clippedMenu = windowWidth < 768 ? 'nav-clip' : '';

  return (
    <div
      className={`${clippedMenu} absolute top-20 left-10 bg-pure-white text-center border-1 w-10/12 p-20 ${
        showMenu ? '' : 'hidden'
      } lg:block lg:static lg:bg-transparent lg:top-0 lg:left-0 lg:m-0 lg:p-0 lg:h-full lg:w-auto`}
    >
      <ul className="font-barlow text-very-dark-grayish-blue tracking-wider text-[20px] space-y-10 lg:flex lg:space-y-0 lg:space-x-10 lg:text-pure-white">
        <li className="hover:text-black">
          <a href="#">About</a>
        </li>
        <li className="hover:text-black">
          <a href="#">Services</a>{' '}
        </li>
        <li className="hover:text-black">
          <a href="#">Projects</a>
        </li>
        <li>
          <a
            className="bg-yellow px-6 py-4 rounded-full text-black hover:text-white hover:bg-blue-800 font-fraunces"
            href="#"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
