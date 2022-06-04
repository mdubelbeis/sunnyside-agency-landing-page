import downArrow from '../../images/icon-arrow-down.svg';

import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="w-full h-[538px] bg-mobile-header-image bg-no-repeat bg-cover p-4">
      <Navbar />
      <div className="flex flex-col items-center space-y-16">
        <div className="mt-16">
          <h1 className="font-fraunces text-pure-white font-bold text-4xl px-4 text-center tracking-widest">
            WE ARE CREATIVES
          </h1>
        </div>
        <div>
          <img src={downArrow} alt="down arrow" />
        </div>
      </div>
    </header>
  );
};

export default Header;
