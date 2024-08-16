import ButtonDark from 'components/Input/Button_dark';

const Transparency = ({ setSelectedPage }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/Transparency_bg-min.png")`;
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative z-10 flex flex-col items-center px-4 py-24 md:flex-row max-w-[1200px] justify-center w-full">
        <div className="flex flex-col items-start gap-3 text-white md:items-start sm:items-center">
          <h1
            className={`mb-8 font-bold lg:text-4xl text-3xl  md:text-left sm:text-center text-left`}
          >
            Building Trust Through Transparency: Nexus Pro's Commitment to
            Stability and Reserve Reports
          </h1>
          <p className="text-xl font-inter">
            At Nexus Pro, transparency and stability are at the core of
            everything we do. We believe in providing our users with full
            visibility into our operations and financial health, ensuring trust
            and confidence in our platform.{' '}
          </p>
          <p className="text-xl font-inter">
            Our commitment to transparency is demonstrated through regular
            reserve reports, which provide detailed insights into the assets
            backing our tokens. With Nexus Pro, you can rest assured knowing
            that your investments are supported by a secure and stable
            foundation.
          </p>
          <div className="flex items-center justify-center mb-8">
            <ButtonDark
              dark
              label="View Reserves"
              onClickHandle={() => {
                scrollToTop();
                setSelectedPage('transparency');
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center w-full gap-10 text-white md:px-10 sm:flex-col">
          <div className="flex w-full text-center ">
            <div
              className={`bg-white rounded-2xl transition-all shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] flex flex-col p-5 w-full`}
            >
              <div
                className={`flex sm:flex-row flex-col items-center justify-center gap-6 transition-all`}
              >
                <div className="flex flex-col items-center gap-3 h-[100px] w-[100px]">
                  <img
                    loading="lazy"
                    src={
                      process.env.REACT_APP_PUBLIC_URL +
                      '/assets/images/Nexus Pro_Icons_03-min.png'
                    }
                    alt="wing"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col items-center sm:text-center text-start sm:items-start">
                  <div className="font-bold text-gray-700">
                    <p className="text-xl text-center text-blue-gray-800 sm:text-start">
                      NexusPro in Circulation
                    </p>
                    <p className="mt-1 text-sm text-center font-inter sm:text-start">
                      as of February 15, 2024
                    </p>
                  </div>
                  <p className="w-full text-3xl font-bold text-center text-blue-500 sm:text-start">
                    €5B
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full text-center">
            <div
              className={`bg-white rounded-2xl transition-all shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] flex flex-col p-5 w-full`}
            >
              <div
                className={`flex sm:flex-row flex-col items-center justify-center gap-6  transition-all`}
              >
                <div className="flex flex-col items-center gap-3 h-[100px] w-[100px]">
                  <img
                    loading="lazy"
                    src={
                      process.env.REACT_APP_PUBLIC_URL +
                      '/assets/images/Nexus Pro_Icons_04-min.png'
                    }
                    alt="wing"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col items-center sm:text-center text-start sm:items-start">
                  <div className="font-bold text-gray-700">
                    <p className="text-xl text-center text-blue-gray-800 sm:text-start">
                      NexusPro in Circulation
                    </p>
                    <p className="mt-1 text-sm text-center font-inter sm:text-start">
                      as of February 15, 2024
                    </p>
                  </div>
                  <p className="w-full text-3xl font-bold text-center text-blue-500 sm:text-start">
                    $5B
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-0 w-full h-full shadow">
        <div
          className="absolute w-full h-full "
          style={{
            backgroundImage,
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'inherit',
            backgroundSize: 'cover'
          }}
        />
        <div className=" absolute w-full h-full opacity-60 to-[#0f2268] from-[#010514] bg-gradient-to-r " />
      </div>
    </div>
  );
};

export default Transparency;
