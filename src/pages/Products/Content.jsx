import ButtonDark from 'components/Input/Button_dark';

const Content = ({ setSelectedPage }) => {
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/blue_texture_bg.png")`;
  return (
    <div className={` w-full relative bg-blue-800 overflow-hidden`}>
      <div className="flex pt-[50px] flex-col w-full px-4 items-center justify-center relative z-20">
        <div className="flex-col w-full mb-6 text-center max-w-[900px]  text-white md:text-start md:w-[60%] mx-auto text-clip items-center justify-center pb-12 z-20">
          <div className="flex w-full mb-8 text-3xl font-bold text-center">
            Innovation and reliability converge to offer you a suite of
            cutting-edge solutions in the world of digital finance.
          </div>
          <div className="flex flex-col items-center gap-8 text-xl text-center font-inter">
            <span>
              Our products are designed with your financial needs in mind,
              providing a seamless and secure experience that bridges the gap
              between traditional finance and the dynamic realm of
              cryptocurrencies.
            </span>
          </div>
        </div>
        <div
          className={`w-full h-full absolute top-0 right-0`}
          style={{
            backgroundImage: backgroundImage,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'left top',
            backgroundAttachment: 'local'
          }}
        />
      </div>

      <div className="flex flex-col w-full">
        <div className={`flex flex-col bg-white z-20`}>
          <div className="flex flex-col-reverse items-center justify-center w-full gap-5 py-5 md:flex-row-reverse ">
            <div className="w-full md:w-[60%] max-w-[700px] font-inter">
              <div className="relative flex flex-col w-full gap-4 my-8">
                <span className="flex flex-col text-3xl font-bold md:inline font-poppins">
                  1. NexusPro Stablecoins:{' '}
                  <span className="inline font-normal text-blue-500">
                    The Anchor of Stability
                  </span>
                </span>
                <span className="absolute w-1/3 -bottom-5"></span>
                <span
                  className={`text-xl font-semibold font-inter transition-all`}
                >
                  Our products are designed with your financial needs in mind,
                  providing a seamless and secure experience that bridges the
                  gap between traditional finance and the dynamic realm of
                  cryptocurrencies.
                </span>
                <span>
                  The major difference with other digital currencies is that
                  they are 1:1 correlated with the world’s leading real
                  currencies, including the USD and the Euro.The stability
                  provides a low volatility option for funds, merchants, and
                  traders to exit market holdings. Every Nexus Pro coin is 100%
                  backed by Nexus Pros reserves and is tied 1-to-1 with an
                  equivalent fiat currency. For example, 1 USDPro = 1 USD and 1
                  EuroPro = 1 Euro. As an open and honest company, we make
                  available a list of the current reserve assets.
                </span>
                <span>
                  Whether you're a seasoned investor seeking a secure store of
                  value or a newcomer navigating the crypto landscape, NexusPro
                  Stablecoins offer a reliable and steadfast anchor for your
                  digital assets.
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <img
                loading="lazy"
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  '/assets/images/02_products_01b 1-min.png'
                }
                alt="using_1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-center gap-5 py-5 bg-white sm:bg-[#EAEAEA] md:flex-row">
          <div className="w-full md:w-[60%] max-w-[700px] font-inter">
            <div className="relative flex flex-col w-full gap-4 my-8">
              <span className="flex flex-col text-3xl font-bold md:inline font-poppins">
                2. Nexus Pro Exchange:
                <span className="inline font-normal text-blue-500">
                  Your Gateway to Crypto Trading
                </span>
              </span>
              <span className="absolute w-1/3 -bottom-5"></span>
              <span
                className={`text-xl font-semibold font-inter transition-all`}
              >
                Navigate the crypto markets with ease on the NexusPro Exchange.
              </span>
              <span>
                Our user-friendly platform empowers you to buy, sell, and trade
                a variety of digital assets, including NexusPro Stablecoins,
                Bitcoin, Ethereum, and more. With a sleek interface and robust
                security features, the NexusPro Exchange is designed for both
                beginners and experienced traders, providing a seamless trading
                experience.
              </span>
            </div>
          </div>
          <div className="">
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/02_products_02 1-min.png'
              }
              alt="wing"
              className=" sm:max-w-[400px] "
            />
          </div>
        </div>
        <div
          className={`flex flex-col-reverse items-center justify-center  py-5 w-full gap-5 md:flex-row-reverse bg-white`}
        >
          <div className="w-full md:w-[60%] max-w-[700px] font-inter">
            <div className="relative flex flex-col w-full gap-4 my-8">
              <span className="flex flex-col text-3xl font-bold md:inline font-poppins">
                3. NexusPro Wallet:
                <span className="inline font-normal text-blue-500">
                  Securely Manage Your Digital Assets
                </span>
              </span>
              <span className="absolute w-1/3 -bottom-5"></span>
              <span
                className={`text-xl font-semibold font-inter transition-all`}
              >
                The NexusPro Wallet is your personal vault for securely managing
                your digital assets.
              </span>
              <span>
                Whether you prefer the convenience of a mobile wallet or the
                enhanced security of a hardware wallet, NexusPro has you
                covered. Easily store, send, and receive NexusPro Stablecoins
                and other supported cryptocurrencies, knowing that your assets
                are protected by advanced security measures.
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/02_products_03 1-min.png'
              }
              alt="using_1"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-center gap-5 py-5 bg-white sm:bg-[#EAEAEA] md:flex-row">
          <div className="w-full md:w-[60%] max-w-[700px] font-inter">
            <div className="relative flex flex-col w-full gap-4 my-8">
              <span className="flex flex-col text-3xl font-bold md:inline font-poppins">
                4.NexusPro API:
                <span className="inline font-normal text-blue-500">
                  Powering Innovation and Integration
                </span>
              </span>
              <span className="absolute w-1/3 -bottom-5"></span>
              <span
                className={`text-xl font-semibold font-inter transition-all`}
              >
                For developers and businesses looking to integrate NexusPro
                services into their applications, the NexusPro API offers a
                robust solution.
              </span>
              <span>
                Access our stablecoins, exchange functionality, and wallet
                services through our API, enabling you to build innovative
                financial applications and seamlessly integrate NexusPro into
                your ecosystem.
              </span>
            </div>
          </div>
          <div className="">
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/02_products_04 1-min.png'
              }
              alt="wing"
              className=" sm:max-w-[400px] "
            />
          </div>
        </div>
        <div
          className={`flex flex-col-reverse items-center justify-center  py-5 w-full gap-5 md:flex-row-reverse bg-white`}
        >
          <div className="w-full md:w-[60%] max-w-[700px] font-inter">
            <div className="relative flex flex-col w-full gap-4 my-8">
              <span className="flex flex-col text-3xl font-bold md:inline font-poppins">
                5. NexusPro Insights:
                <span className="inline font-normal text-blue-500">
                  Unveiling the Future of Finance
                </span>
              </span>
              <span className="absolute w-1/3 -bottom-5"></span>
              <span
                className={`text-xl font-semibold font-inter transition-all`}
              >
                Stay informed and engaged with the NexusPro Insights section.
              </span>
              <span>
                Explore thoughtprovoking articles, market analyses, and
                exclusive content that provide valuable perspectives on the
                latest trends, regulatory developments, and innovations shaping
                the digital finance landscape. NexusPro Insights is your go-to
                resource for unlocking a deeper understanding of the evolving
                world of cryptocurrencies and stablecoins.
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/02_products_05 1-min.png'
              }
              alt="using_1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
