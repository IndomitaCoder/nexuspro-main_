import ButtonDark from 'components/Input/Button_dark';

const Forth = () => {
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/products_bg_2-min.png")`;
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-8 md:flex-row">
        <div className="flex flex-row flex-wrap items-stretch justify-center w-full gap-10 px-10 text-white h-fit">
          <div className="w-[280px] gap-5 bg-gradient-to-b from-gray-50 h-auto to-gray-400 py-10 px-7 rounded-xl flex flex-col items-center text-center text-[#263238]">
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/02_products_integration 1-min.png'
              }
              alt="using_1"
            />
            <span className="text-2xl font-bold ">
              Forex Integration - Expanding Possibilities
            </span>
            <span className="text-sm">
              Nexus Pro is not just about stablecoins; it's about expanding
              possibilities. By integrating forex into our platform, we offer
              our users a comprehensive solution for navigating both traditional
              and digital financial markets.
            </span>

            <span className="text-sm">
              Trade seamlessly between fiat currencies and stablecoins,
              harnessing the potential of forex in a digitized landscape.
            </span>
          </div>
          <div className="w-[280px] gap-5 bg-gradient-to-b from-gray-50 h-auto to-gray-400 py-10 px-7 rounded-xl flex flex-col items-center text-center text-[#263238]">
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/02_products_innovation 1-min.png'
              }
              alt="using_1"
            />
            <span className="text-2xl font-bold ">
              Innovative Solutions for Forex Enthusiasts
            </span>
            <span className="text-sm">
              Innovation is at the core of Nexus Pro's DNA. We go beyond the
              ordinary to bring you cutting-edge solutions for forex trading.
              Our user-friendly platforms are designed to cater to both seasoned
              forex enthusiasts and newcomers, providing an intuitive interface
              for trading, analysis, and portfolio management.
            </span>
          </div>

          <div className="w-[280px] gap-5 bg-gradient-to-b from-gray-50 h-auto to-gray-400 py-10 px-7 rounded-xl flex flex-col items-center text-center text-[#263238]">
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/02_products_transparency 1-min.png'
              }
              alt="using_1"
            />
            <span className="text-2xl font-bold ">
              Transparency and Trust Across Markets
            </span>
            <span className="text-sm">
              In the interconnected worlds of crypto and forex, trust is
              paramount. Nexus Pro prioritizes transparency with regular
              third-party audits ensuring that our stablecoins are backed by
              real-world assets.
            </span>

            <span className="text-sm">
              This commitment to transparency extends to our forex integration,
              providing users with a clear view of their trades and investments.
            </span>
          </div>
          <div className="w-[280px] gap-5 bg-gradient-to-b from-gray-50 h-auto to-gray-400 py-10 px-7 rounded-xl flex flex-col items-center text-center text-[#263238]">
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/02_products_user 1-min.png'
              }
              alt="using_1"
            />
            <span className="text-2xl font-bold ">
              Forex Integration - Expanding Possibilities
            </span>
            <span className="text-sm">
              Your experience matters, especially in the fast-paced world of
              forex. Nexus Pro is committed to a user-centric approach, offering
              tools and features that cater to the unique needs of forex
              traders. Whether you're looking to diversify your portfolio, hedge
              against market volatility, or explore new trading opportunities,
              Nexus Pro is your gateway to a world of possibilities.
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-0 w-full h-full shadow">
        <div
          className="absolute w-full h-full "
          style={{
            backgroundImage,
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
          }}
        />
        <div className=" absolute w-full h-full opacity-30 to-[#0088CD] from-[#263238] bg-gradient-to-r " />
      </div>
    </div>
  );
};

export default Forth;
