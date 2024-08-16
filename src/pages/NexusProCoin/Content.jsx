const Content = () => {
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/blue_texture_bg.png")`;
  return (
    <div
      className={` w-full relative bg-blue-800 overflow-hidden flex flex-col`}
    >
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 overflow-hidden">
        <div className="flex-col w-full py-12 text-center max-w-[1200px]  text-white md:text-start md:w-[60%] mx-auto text-clip items-center justify-center z-20">
          <div className="flex flex-col items-center text-xl text-center font-inter">
            <span>
              Welcome to Nexus Pro, where stability meets innovation. We are
              excited to present our two flagship stablecoins, <b>US/EU</b> and{' '}
              <b>EU/US</b>, designed to redefine your experience in the world of
              digital finance. Just like trusted stablecoins, these digital
              assets offer a secure and reliable means to navigate the crypto
              landscape.
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
      <div className="flex items-center justify-center w-full gap-0 py-10 bg-gray-200">
        <div className="max-w-[1200px] flex flex-wrap items-stretch justify-evenly w-full">
          <div className="flex flex-col items-center w-[90%] my-10 gap-5 pt-5 pb-16 border-gray-400 bg-[#EAEAEA] border-4 border-opacity-50 rounded-xl sm:w-[48%]">
            <div className="relative flex items-center -mt-6 -translate-y-1/2 w-36 h-36">
              <img
                loading="lazy"
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  `/assets/images/Nexus Pro_Icons_04-min.png`
                }
                alt="wing"
                className="w-full"
              />
            </div>
            <div className="w-full max-w-[1000px] px-10 -mt-24">
              <div className="relative flex flex-col my-8 text-4xl font-bold w-fit leading-[3rem]">
                <div className="flex">
                  US/EU: Unleashing the Power of Digital Stability
                </div>
              </div>
              <div className="text-lg  transition-all mt-[50px] font-inter">
                <b>US/EU</b> is your gateway to a digital dollar, anchored in
                stability and reliability. Pegged to a carefully curated
                reserve, <b>US/EU</b> ensures a steadfast value that remains
                resilient in the face of market fluctuations. Embrace the
                confidence of a stablecoin that mirrors the strength of the US
                dollar, providing you with a secure haven for your digital
                assets.
              </div>
              <div className={`text-2xl font-bold  mt-[23px] `}>
                Key Features of US/EU:
              </div>
              <div className={`text-xl mt-[20px] transition-all`}>
                <ul>
                  <li className="mt-[30px] flex flex-col font-inter">
                    <span className="font-bold text-[#128FC8] font-poppins">
                      Steadfast Value:
                    </span>{' '}
                    Pegged to a basket of major fiat currencies, US/EU maintains
                    a stable value, offering you predictability in the dynamic
                    world of cryptocurrencies.
                  </li>
                  <li className="mt-[30px] flex flex-col font-inter">
                    <span className="font-bold text-[#128FC8] font-poppins">
                      Transparency:
                    </span>{' '}
                    Nexus Pro is committed to transparency. Regular third-party
                    audits verify the reserves, ensuring that the value of US/EU
                    is backed by real-world assets, providing you with peace of
                    mind.
                  </li>
                  <li className="mt-[30px] flex flex-col font-inter">
                    <span className="font-bold text-[#128FC8] font-poppins">
                      Security:
                    </span>{' '}
                    Your transactions with US/EU are conducted in a
                    tamper-resistant environment, utilizing advanced blockchain
                    technology to safeguard your assets. Experience the security
                    that comes with Nexus Pro's commitment to protecting your
                    digital wealth.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[90%] my-10 gap-5 pt-5 pb-16 border-gray-400 bg-[#EAEAEA] border-4 border-opacity-50 rounded-xl sm:w-[48%]">
            <div className="relative flex items-center -mt-6 -translate-y-1/2 w-36 h-36">
              <img
                loading="lazy"
                src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/Nexus Pro_Icons_03-min.png`}
                alt="using_1"
                className="w-full"
              />
            </div>
            <div className="w-full max-w-[1000px] px-10 -mt-24">
              <div className="relative flex flex-col my-8 text-4xl font-bold w-fit">
                <span className="flex leading-[3rem]">
                  EU/US: Bridging Continents with Stability
                </span>
              </div>
              <div className="text-lg  transition-all mt-[50px] font-inter">
                <b>EU/US</b> brings stability to the European digital finance
                landscape. Pegged to a diversified reserve, <b>EU/US</b>{' '}
                provides a reliable digital representation of the Euro. Whether
                you're in the heart of Europe or anywhere around the globe,{' '}
                <b>EU/US</b> offers stability and accessibility in one seamless
                package.
              </div>
              <div className={`text-2xl font-bold  mt-[23px] `}>
                Key Features of EU/US:
              </div>
              <div className={`text-xl mt-[20px] transition-all`}>
                <ul>
                  <li className="mt-[30px] flex flex-col font-inter">
                    <span className="font-bold text-[#128FC8] font-poppins">
                      Euro Stability :
                    </span>{' '}
                    EU/US is pegged to a robust reserve, reflecting the
                    stability of the Euro. Experience the benefits of a digital
                    asset that aligns with the strength of European fiat
                    currencies.
                  </li>
                  <li className="mt-[30px] flex flex-col font-inter">
                    <span className="font-bold text-[#128FC8] font-poppins">
                      Global Accessibility :
                    </span>{' '}
                    EU/US is designed for users worldwide, providing a stable
                    and accessible digital asset that transcends borders.
                    Seamlessly transact and navigate the global financial
                    landscape with EU/US.
                  </li>
                  <li className="mt-[30px] flex flex-col font-inter">
                    <span className="font-bold text-[#128FC8] font-poppins">
                      Innovative Solutions :
                    </span>{' '}
                    Nexus Pro brings innovation to the stablecoin space with
                    EU/US. Our commitment to staying ahead of the curve in the
                    crypto ecosystem ensures that you experience cutting-edge
                    solutions in digital finance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
