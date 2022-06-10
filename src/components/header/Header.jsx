import Navbar from './Navbar';

const Header = () => {
  return (
    <header
      className={`w-full h-[600px] bg-desktop-header-image bg-no-repeat bg-cover bg-center p-4`}
    >
      <Navbar />
      <div className="flex flex-col items-center space-y-16">
        <div className="mt-16">
          <h1 className="font-fraunces text-pure-white font-bold text-4xl px-4 text-center tracking-widest">
            WE ARE CREATIVES
          </h1>
        </div>
        <div>
          <svg
            width="36"
            height="114"
            xmlns="http://www.w3.org/2000/svg"
          >
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
