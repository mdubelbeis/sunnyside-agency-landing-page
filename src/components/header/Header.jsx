import { useState } from 'react';

import Navbar from './Navbar';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const headerImg =
    windowWidth < 768 ? 'bg-mobile-header-image' : 'bg-desktop-header-image';
  return (
    <header
      className={`w-full h-[750px] ${headerImg} bg-no-repeat bg-cover bg-center object-contain p-4`}
    >
      <Navbar />
      <div className="flex flex-col items-center space-y-16">
        <div className="mt-16">
          <h1 className="font-fraunces text-pure-white font-extrabold text-4xl px-4 text-center tracking-widest md:text-7xl">
            WE ARE CREATIVES
          </h1>
        </div>
        <div>
          <svg width="36" height="125" xmlns="http://www.w3.org/2000/svg">
            <g
              stroke="#FFF"
              strokeWidth="6"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 3v100M3 95.484l15 15 15-15" />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
