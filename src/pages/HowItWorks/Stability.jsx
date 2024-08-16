import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

const Stability = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTinyMobile, setIsTinyMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth > 1024) setIsMobile(false);
    else setIsMobile(true);
    if (window.innerWidth > 500) setIsTinyMobile(false);
    else setIsTinyMobile(true);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    handleResize();
  }, []);
  return (
    <div className={`py-16 bg-white`}>
      <div className="flex flex-col xl:w-[90%] max-w-[1200px] w-full gap-8 px-4 mx-auto md:w-fit font-inter">
        {isMobile ? (
          <div className={`w-full`}>
            <Carousel
              className="how_carousel"
              swipeable
              centerSlidePercentage={100}
              showStatus={false}
              useKeyboardArrows
            >
              <div className="flex flex-col gap-10 px-8 py-8 mx-3 border border-gray-500 bg-gradient-to-b text-[#263238] from-gray-300 to-gray-50 rounded-xl">
                <div className="flex flex-col items-center justify-center gap-5 text-3xl font-bold md:text-4xl text-start text-gray_md">
                  <div>
                    <img
                      loading="lazy"
                      src={
                        process.env.REACT_APP_PUBLIC_URL +
                        '/assets/images/how_tokens_1-min.png'
                      }
                      alt="wing"
                      className="w-full "
                    />
                  </div>
                  <span
                    className={`text-[#263238] w-full lg:text-start text-center font-poppins`}
                  >
                    New Stability , More Growth
                  </span>
                </div>
                <span className="text-xl font-bold">
                  "Experience new stability and unlock greater growth
                  opportunities with Nexus Pro."
                </span>
                <span className={`text-lg`}>
                  Step into a realm of newfound stability and unleash
                  unparalleled growth potential with Nexus Pro. Our innovative
                  platform combines cutting-edge technology with robust
                  financial solutions, offering a seamless bridge between
                  traditional finance and the dynamic world of cryptocurrencies.
                  With Nexus Pro, you'll discover a trusted ecosystem where
                  stability isn't just a promise – it's a reality. Embrace the
                  future of digital finance and embark on a journey towards
                  unprecedented growth and prosperity.
                </span>
              </div>
              <div className="flex flex-col gap-10 px-8 py-8 mx-3 border border-gray-500 bg-gradient-to-b text-[#263238] from-gray-300 to-gray-50 rounded-xl">
                <div className="flex flex-col items-center justify-center gap-5 text-3xl font-bold md:text-4xl text-start text-gray_md">
                  <div>
                    <img
                      loading="lazy"
                      src={
                        process.env.REACT_APP_PUBLIC_URL +
                        '/assets/images/how_tokens_2-min.png'
                      }
                      alt="wing"
                      className="w-full "
                    />
                  </div>
                  <span
                    className={`text-[#263238] w-full lg:text-start text-center font-poppins`}
                  >
                    Blockchain Ready , Multichain
                  </span>
                </div>
                <span className="text-xl font-bold">
                  "Blockchain ready and multichain – Nexus Pro leads the way in
                  interoperability and scalability."
                </span>
                <span className={`text-lg`}>
                  Nexus Pro stands at the forefront of blockchain innovation,
                  equipped with robust infrastructure that is fully prepared for
                  the decentralized future. Our platform is blockchain ready,
                  meaning we seamlessly integrate with various blockchain
                  networks, ensuring compatibility and interoperability across
                  the ecosystem. With multi-chain capabilities, Nexus Pro
                  expands horizons, offering users access to a diverse range of
                  blockchain networks for enhanced functionality, scalability,
                  and security. Join us as we pave the way for a decentralized
                  tomorrow.
                </span>
              </div>
            </Carousel>
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-2 mb-6 space-x-5 text-start md:flex-row">
            <div className="flex flex-col gap-10 md:w-[46%] w-full px-8 text-[#263238] bg-gradient-to-b from-gray-300 to-gray-50 border border-gray-500 rounded-xl py-8">
              <div className="flex flex-col items-center justify-center gap-5 text-3xl font-bold text-start text-gray_md">
                <div>
                  <img
                    loading="lazy"
                    src={
                      process.env.REACT_APP_PUBLIC_URL +
                      '/assets/images/how_tokens_1-min.png'
                    }
                    alt="wing"
                    className="w-full "
                  />
                </div>
                <span
                  className={`text-[#263238] w-full md:text-start text-center font-poppins`}
                >
                  New Stability , More Growth
                </span>
              </div>
              <span className="text-xl font-bold">
                "Experience new stability and unlock greater growth
                opportunities with Nexus Pro."
              </span>
              <span className={`text-xl`}>
                Step into a realm of newfound stability and unleash unparalleled
                growth potential with Nexus Pro. Our innovative platform
                combines cutting-edge technology with robust financial
                solutions, offering a seamless bridge between traditional
                finance and the dynamic world of cryptocurrencies. With Nexus
                Pro, you'll discover a trusted ecosystem where stability isn't
                just a promise – it's a reality. Embrace the future of digital
                finance and embark on a journey towards unprecedented growth and
                prosperity.
              </span>
            </div>
            <div className="flex flex-col gap-10  md:w-[46%] w-full px-8 text-[#263238] bg-gradient-to-b from-gray-300 to-gray-50 border border-gray-500 rounded-xl py-8">
              <div className="flex flex-col items-center justify-center gap-5 text-3xl font-bold text-start text-gray_md">
                <div>
                  <img
                    loading="lazy"
                    src={
                      process.env.REACT_APP_PUBLIC_URL +
                      '/assets/images/how_tokens_2-min.png'
                    }
                    alt="wing"
                    className="w-full "
                  />
                </div>
                <span
                  className={`text-[#263238] w-full md:text-start text-center  font-poppins`}
                >
                  Blockchain Ready , Multichain
                </span>
              </div>
              <span className="text-xl font-bold">
                "Blockchain ready and multichain – Nexus Pro leads the way in
                interoperability and scalability."
              </span>
              <span className={`text-xl`}>
                Nexus Pro stands at the forefront of blockchain innovation,
                equipped with robust infrastructure that is fully prepared for
                the decentralized future. Our platform is blockchain ready,
                meaning we seamlessly integrate with various blockchain
                networks, ensuring compatibility and interoperability across the
                ecosystem. With multi-chain capabilities, Nexus Pro expands
                horizons, offering users access to a diverse range of blockchain
                networks for enhanced functionality, scalability, and security.
                Join us as we pave the way for a decentralized tomorrow.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stability;
