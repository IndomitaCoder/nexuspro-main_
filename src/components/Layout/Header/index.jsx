import cn from 'classnames';
import Button from 'components/Input/Button_dark';

export const navLinks = [
  { label: 'Dashboard', link: 'dashboard', hidden: true },
  { label: 'Why NexusPro', link: 'whynexuspro' },
  { label: 'NexusPro Coin', link: 'nexusprocoin' },
  { label: 'About Us', link: 'aboutus' },
  { label: 'Products', link: 'products' },
  { label: 'How it works', link: 'howitworks' },
  { label: 'News', link: 'news' },
  { label: 'Transparency', link: 'transparency' }
];

const Header = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setSelectedPage,
  selectedPage
}) => {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-row flex-wrap justify-between items-center py-[20px] font-inter px-[30px] absolute bg-white top-0 w-full z-20">
      {/* Mobile Breadcrumb */}
      <div
        className={cn(
          `absolute left-0 z-10 flex flex-row justify-start w-full h-screen p-12 overflow-hidden transition-all bg-white lg:hidden`,
          `${
            isMobileMenuOpen
              ? ' max-h-screen sm:top-32 top-20'
              : 'max-h-0 -top-44'
          }`
        )}
      >
        <div className="flex flex-col w-1/3 space-y-12">
          {navLinks.map((nav, index) => {
            return nav?.hidden === true ? null : (
              <div
                className={`flex flex-col space-y-3 text-[16px] cursor-pointer`}
                key={index}
              >
                {
                  <div
                    onClick={() => {
                      scrollToTop();
                      setIsMobileMenuOpen(false);
                      setSelectedPage(nav?.link);
                    }}
                    key={index}
                  >
                    <span>{nav?.label}</span>
                  </div>
                }
              </div>
            );
          })}

          <div className="flex items-center gap-5 px-4 ">
            <div
              onClick={() => {
                scrollToTop();
                setIsMobileMenuOpen(false);
                window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/?page=login`;
              }}
              className={
                selectedPage === 'login'
                  ? `flex transition-all border-blue-500 border-b cursor-pointer`
                  : `flex transition-all       border-opacity-0 border-b cursor-pointer`
              }
            >
              <div className="flex items-center text-base font-semibold uppercase transition-all gap-x-2 hover:text-gray-400">
                Login
              </div>
            </div>
            <Button
              label="SignUp"
              dark
              onClickHandle={() => {
                scrollToTop();
                setIsMobileMenuOpen(false);
                window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/?page=signup`;
              }}
            />
          </div>
        </div>
      </div>

      <nav className="z-30 flex flex-wrap items-center justify-start w-full gap-8 text-gray-600 lg:justify-evenly">
        <a href={`http://www.nexuspro.io`}>
          <span className="flex items-center mt-0 transition-all cursor-pointer xl:h-20 h-14 hover:opacity-80">
            <img
              loading="lazy"
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/Nexus Pro_Logo 1-min.png`}
              alt="wing"
              className="h-2/3"
            />
          </span>
        </a>

        {/* Hamburger Menu for Mobile */}
        <div
          className="absolute z-30 flex items-center justify-end text-white cursor-pointer lg:hidden right-12 lg:right-16"
          onClick={toggleMobileMenu}
        >
          {!isMobileMenuOpen ? (
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL + '/assets/svg/breadcrumbs.svg'
              }
              alt="wing"
            />
          ) : (
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/svg/breadcrumbs-close.svg'
              }
              alt="wing"
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <div
          className={cn('hidden xl:gap-x-6 gap-x-3 lg:flex', {
            'lg:flex': !isMobileMenuOpen
          })}
        >
          {navLinks.map((link, index) => {
            return link?.hidden ? null : (
              <div
                onClick={() => {
                  scrollToTop();
                  setSelectedPage(link?.link);
                }}
                key={index}
                className={`flex transition-all border-white border-b-4 cursor-pointer bg-white relative`}
              >
                {link?.link === selectedPage ? (
                  <div className="absolute w-full border-b-4 border-blue-700 xl:top-[62px] 2xl:top-[65px] top-[54px] " />
                ) : null}

                <div className="flex items-center text-xs font-semibold uppercase transition-all xl:text-sm 2xl:text-base hover:text-gray-400">
                  {link.label}
                </div>
              </div>
            );
          })}
        </div>
        <div className={`lg:flex hidden items-center gap-5 px-4`}>
          <span className={`flex transition-all text-gray_md cursor-pointer`}>
            <a href={`${process.env.REACT_APP_DASHBOARD_URL}?page=login`}>
              <div className="flex items-center text-base font-semibold uppercase transition-all gap-x-2 hover:text-gray-400">
                Login
              </div>
            </a>
          </span>
          <Button
            label="SignUp"
            dark
            onClickHandle={() => {
              window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/?page=signup`;
            }}
          />
          {/* <ThemeSwitcher /> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
