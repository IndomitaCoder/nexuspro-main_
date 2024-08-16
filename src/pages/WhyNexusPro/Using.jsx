import { useMode } from 'ModeContext';
import Board from 'components/Board';
import { DialogCustom } from 'components/Dialog';
import { ContactUsForm } from 'components/Dialog/ContactUs';
import Button from 'components/Input/Button_dark';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const data = [
  {
    title: 'Nexus pro For Businesses',
    desc: 'Onboard your business on Nexus Pro Ecosystem ',
    content:
      'Nexus Pro allows businesses to convert USD or Euro into US/EU or EU/US and vice versa, near-instantly with no/low fees. Today, Nexus Pro is for enterprise businesses and wholesale distributors of US/EU & EU/US.',
    image: '/assets/images/Mask group (2)-min.png',
    header: 'Nexus Pro For Businesses: Empowering Your Financial Edge',
    openUrl: 'business',
    body: (
      <div className="flex flex-col text-sm">
        <p className="pt-2 pb-3 text-lg italic font-bold text-light-green-700"></p>
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1"></p>
        Unlock a new dimension of financial efficiency for your business by
        onboarding onto the Nexus Pro Ecosystem. Tailored to meet the unique
        needs of enterprises and wholesale distributors, Nexus Pro introduces
        seamless conversion between USD, Euro, US/EU, and EU/US tokens creating
        an environment where speed, affordability, and reliability converge.
        <p className="pt-2 pb-3 text-lg italic font-bold text-light-green-700">
          Key Business Benefits:
        </p>
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Instant Currency Conversion:
        </p>
        Nexus Pro streamlines the process of converting USD or Euro into US/EU
        or EU/US tokens and vice versa. Enjoy near-instant currency conversion,
        reducing the time it takes for your business to respond to dynamic
        market conditions.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Low to No Fees:
        </p>
        Minimize the financial impact on your business operations with Nexus
        Pro's low to no fees structure. Our platform is designed to enhance your
        cost-effectiveness, allowing you to allocate resources strategically.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Global Financial Reach:
        </p>
        Expand your business's financial reach globally. Nexus Pro's US/EU and
        EU/US tokens facilitate efficient cross-border transactions, enabling
        your enterprise to engage in international trade with reduced friction.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Tailored for Enterprises:
        </p>
        Nexus Pro understands the unique requirements of enterprises. Our
        platform is tailored to accommodate the scale and complexity of business
        transactions, offering you a robust ecosystem that supports your growth
        objectives.
        <p className="pt-2 pb-3 text-lg italic font-bold text-light-green-700">
          How It Works for Businesses:
        </p>
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Create Your Business Account:
        </p>
        Seamlessly onboard your business onto the Nexus Pro Ecosystem by
        creating a dedicated business account. Our user-friendly onboarding
        process ensures a quick and straightforward setup.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Initiate Currency Conversion:
        </p>
        Utilize Nexus Pro to convert USD or Euro into US/EU or EU/US tokens and
        vice versa. The platform's intuitive interface ensures a user-friendly
        experience for businesses of all sizes.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Efficient Cross-Border Transactions:
        </p>
        Leverage the power of Nexus Pro's tokens for efficient cross-border
        transactions. Simplify international trade, reduce currency conversion
        complexities, and optimize your business's global financial operations.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Benefit from a Cost-Efficient Ecosystem:
        </p>
        Nexus Pro's low to no fees model ensures that your business benefits
        from a cost-efficient financial ecosystem. Allocate your resources
        strategically and enhance your bottom line. Join Nexus Pro and Elevate
        Your Business's Financial Edge Whether you're an enterprise business or
        a wholesale distributor, Nexus Pro invites you to experience the
        advantages of seamless currency conversion and global financial
        accessibility. Elevate your business's financial edge with Nexus Pro –
        where innovation, reliability, and cost-effectiveness converge for
        businesses of all sizes.
      </div>
    )
  },
  {
    title: 'Nexus Pro for Individuals / Private Investors / Trader ',
    desc: 'Get NexusPro for personal use',
    content: `Access Nexus Pro and easily convert between USD and local currency.
    Nexus Pro allows Individuals, Private Investors or Traders to convert USD or Euro into US/EU or EU/US and vice versa, near-instantly with no/low fees. Today.`,
    image: '/assets/images/Mask group (3)-min.png',
    header:
      'Nexus Pro build for Individuals, Private Investors, and Traders: Elevate Your Personal Finances',
    openUrl: 'person',
    body: (
      <div className="flex flex-col text-sm">
        Transform your personal financial journey with Nexus Pro – a platform
        designed to empower individuals, private investors, and traders. Gain
        access to seamless currency conversion, near-instant transactions, and a
        cost-efficient ecosystem that caters to your unique financial needs.
        <p className="pt-2 pb-3 text-lg italic font-bold text-light-green-700">
          Key Personal Benefits:
        </p>
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Personalized Financial Solutions:
        </p>
        Nexus Pro understands that personal finance is unique. Whether you're an
        individual, a private investor, or a trader, our platform offers
        personalized financial solutions that align with your goals.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Easy Currency Conversion:
        </p>
        Convert USD or Euro into US/EU or EU/US tokens effortlessly. Nexus Pro
        simplifies currency conversion, allowing you to navigate the global
        financial landscape with ease. Or crypto currency, ETH, WETH , USDT ,
        USDC , WBTC.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Near-Instant Transactions:
        </p>
        Experience the convenience of near-instant transactions. Nexus Pro
        ensures that your financial activities happen swiftly, providing you
        with the flexibility to respond to market dynamics promptly.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          No/Low Fees Model:
        </p>
        Keep more of your assets with Nexus Pro's no/low fees model. Whether
        you're converting currencies or engaging in other financial activities,
        our platform prioritizes cost-effectiveness for personal users.
        <p className="pt-2 pb-3 text-lg italic font-bold text-light-green-700">
          How It Works for Individuals, Private Investors, and Traders:
        </p>
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Create Your Personal Account:
        </p>
        Begin your Nexus Pro journey by creating a personal account. Our
        user-friendly onboarding process ensures that you can start utilizing
        the platform quickly.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Access Easy Currency Conversion:
        </p>
        Utilize Nexus Pro for seamless currency conversion between USD, Euro,
        US/EU, and EU/US tokens. Our platform's accessibility ensures that you
        have the tools you need for your financial activities.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Swift Financial Transactions:
        </p>
        Enjoy the speed of near-instant transactions. Nexus Pro is designed to
        cater to the fast-paced nature of personal finance, ensuring that your
        transactions happen when you need them.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Benefit from Cost-Efficiency:
        </p>
        Nexus Pro's no/low fees model contributes to cost-efficiency for
        personal users. Whether you're a private investor or a trader, our
        platform allows you to maximize the value of your financial activities.
        <p className="pt-2 pb-3 text-lg italic font-bold text-light-green-700">
          Join Nexus Pro and Redefine Your Personal Finance Experience
        </p>
        Embark on a journey of financial empowerment with Nexus Pro. Whether
        you're an individual looking for accessibility, a private investor
        seeking personalized solutions, or a trader navigating the markets,
        Nexus Pro is your partner in redefining your personal finance
        experience. Join us today and explore the possibilities of a seamless,
        cost-efficient financial ecosystem
      </div>
    )
  },
  {
    title: 'Nexus Pro For Developers',
    desc: 'Integrate NexusPro into an app',
    content: `Integrate NexusPro into existing apps or use it to build new Web3 experiences using robust APIs and SDKs. Available on Ethereum, and many more chains`,
    image: '/assets/images/Mask group (4)-min.png',
    header: 'Nexus Pro For Developers: Fueling Innovation in Web3 Experiences',
    openUrl: 'developer',
    body: (
      <div className="flex flex-col text-sm">
        Empower your applications with the cutting-edge capabilities of Nexus
        Pro. Developers, seize the opportunity to integrate Nexus Pro into your
        projects – whether you're enhancing existing apps or building new Web3
        experiences. Dive into our robust APIs and SDKs, available on Ethereum,
        and a multitude of other chains, to revolutionize the way users interact
        with digital finance.
        <p className="pt-2 pb-3 text-lg italic font-bold text-light-green-700">
          Key Developer Advantages:
        </p>
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Seamless Integration:
        </p>
        Nexus Pro offers developers a seamless integration process, allowing you
        to incorporate our powerful features into your applications
        effortlessly. Enhance the functionality of your apps with our
        user-friendly APIs and SDKs.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Coming soon - Versatile API and SDK Options:
        </p>
        Leverage our versatile APIs and SDKs to tailor your applications to the
        specific needs of your user base. Nexus Pro provides developers with a
        range of tools to create diverse and engaging user experiences.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Web3 Experiences:
        </p>
        Fuel the future of Web3 experiences with Nexus Pro. Whether you're
        enhancing decentralized finance (DeFi) applications, building
        blockchain-based solutions, or exploring innovative financial
        technologies, our platform is your gateway to the next frontier.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Multi-Chain Compatibility:
        </p>
        Nexus Pro goes beyond boundaries with multi-chain compatibility.
        Developers can integrate our platform into projects on Ethereum and
        several other chains, ensuring flexibility and accessibility for a
        diverse range of users.
        <p className="pt-2 pb-3 text-lg italic font-bold text-light-green-700">
          How Developers Can Get Started:
        </p>
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Access Developer Resources:
        </p>
        Explore the Nexus Pro developer resources to access documentation, APIs,
        and SDKs. Our developer-friendly materials are designed to facilitate a
        smooth integration process.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Choose Your Integration Approach:
        </p>
        Whether you're enhancing an existing app or building a new Web3
        experience, Nexus Pro allows you to choose the integration approach that
        suits your project requirements. Customize your applications with the
        power of Nexus Pro.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Build Innovative Solutions:
        </p>
        Nexus Pro opens the door to innovation. Developers can build
        applications that redefine digital finance, offering users a secure,
        efficient, and feature-rich environment for their financial activities.
        <p className="text-base font-semibold text-[#f47474] pt-3 pb-1">
          Explore Multi-Chain Opportunities:
        </p>
        Take advantage of Nexus Pro's multi-chain compatibility. Explore
        opportunities on Ethereum and various other chains, ensuring that your
        applications are accessible to a broad user base. Join Nexus Pro and
        Revolutionize Your Applications For developers seeking to innovate in
        the digital finance space, Nexus Pro is the catalyst for transformation.
        Integrate our platform into your applications, leverage versatile APIs
        and SDKs, and explore the possibilities of a multi-chain future. Join
        Nexus Pro today and be at the forefront of Web3 experiences in digital
        finance.
      </div>
    )
  }
];

const HowToUsing = ({ setSelectedPage, setContactOpened }) => {
  const { mode } = useMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleResize = () => {
    if (window.innerWidth > 1024) setIsMobileMenuOpen(false);
    else setIsMobileMenuOpen(true);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    handleResize();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [openDialog, setopenDialog] = useState(false);
  const [selectedTab, setselectedTab] = useState(0);
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/why_using_1-min.png")`;
  const backgroundImage_ = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/why_using_2-min.png")`;
  return (
    <div
      className={`flex flex-col relative overflow-hidden items-center py-16 bg-gradient-to-b from-[#757575] to-[#ffffff1c] sm:px-14 px-5 bg-white  ${
        mode ? 'text-white' : 'text-gray_md'
      } transition-all`}
    >
      <div
        className="absolute w-[1000px] h-[1000px] rounded-full -top-[500px] -left-[500px] blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(0,136,205,0.5) 1%, rgba(87,87,168,0) 100%)'
        }}
      />
      <div className="absolute w-[1000px] h-[1000px] rounded-full -top-[350px] -left-[350px] border border-gray-600" />
      <div
        className={`  w-56 h-56 absolute top-10 md:left-[20%] left-0 blur-sm`}
        style={{
          backgroundImage,
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      />
      <div
        className={`w-[500px] h-[500px] absolute -top-5 -right-[300px] opacity-40`}
        style={{
          backgroundImage: backgroundImage_,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      />
      <DialogCustom
        body={data[selectedTab]?.body}
        header={data[selectedTab]?.header}
        isOpen={openDialog}
        setOpen={setopenDialog}
      />
      <span className="z-10 mb-24 text-4xl font-bold text-center text-white">
        How to start using NexusPro
      </span>
      {/* <div className="flex w-full lg:gap-10 sm:gap-3 justify-center max-w-[1200px] z-10 md:flex-row flex-col"> */}
      {isMobileMenuOpen ? (
        <div className={`sm:w-[600px] w-full`}>
          <Carousel
            swipeable
            centerMode
            showStatus={false}
            useKeyboardArrows
            className="home_carousel"
          >
            <div className="w-full h-full pb-3 mx-5 selected-bigger_md">
              <div
                className={`bg-white rounded-2xl transition-all shadow-[1px_5px_5px_1px_rgba(0,0,0,0.1)] flex flex-col py-10 px-5 gap-3 h-full`}
              >
                <img
                  loading="lazy"
                  src={process.env.REACT_APP_PUBLIC_URL + data[0]?.image}
                  className="w-full "
                />
                <div className="relative flex flex-col text-base font-semibold text-blue-500 w-fit">
                  <span>{data[0]?.title}</span>
                </div>
                <div className="text-xl font-bold text-blue-gray-800">
                  {data[0]?.desc}
                </div>
                <span className="text-base font-inter">{data[0]?.content}</span>
                <div className="flex flex-col justify-start w-full gap-3 md:flex-row">
                  <div className="flex justify-start w-1/2">
                    <Button
                      dark
                      label="Learn More"
                      onClickHandle={() => {
                        scrollToTop();
                        setSelectedPage(data[0]?.openUrl);
                        // setopenDialog(true);
                      }}
                    />
                  </div>
                  <div
                    onClick={() => {
                      setContactOpened(true);
                    }}
                    className="flex items-center justify-center text-center text-blue-500 underline transition-all cursor-pointer font-inter hover:font-bold"
                  >
                    Contact Us
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full pb-3 mx-5 selected-bigger_md">
              <div
                className={`bg-white rounded-2xl transition-all shadow-[1px_5px_5px_1px_rgba(0,0,0,0.1)] flex flex-col py-10 px-5 gap-3 h-full`}
              >
                <img
                  loading="lazy"
                  src={process.env.REACT_APP_PUBLIC_URL + data[1]?.image}
                  className="w-full "
                />
                <div className="relative flex flex-col text-base font-semibold text-blue-500 w-fit">
                  <span>{data[1]?.title}</span>
                </div>
                <div className="text-xl font-bold text-blue-gray-800">
                  {data[1]?.desc}
                </div>
                <span className="text-base font-inter">{data[1]?.content}</span>
                <div className="flex flex-col justify-start w-full gap-3 md:flex-row">
                  <div className="flex justify-start w-1/2">
                    <Button
                      dark
                      label="Learn More"
                      onClickHandle={() => {
                        scrollToTop();
                        setSelectedPage(data[1]?.openUrl);
                        // setopenDialog(true);
                      }}
                    />
                  </div>
                  <div
                    onClick={() => {
                      setContactOpened(true);
                    }}
                    className="flex items-center justify-center text-center text-blue-500 underline transition-all cursor-pointer font-inter hover:font-bold"
                  >
                    Contact Us
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full pb-3 mx-5 selected-bigger_md">
              <div
                className={`bg-white rounded-2xl transition-all shadow-[1px_5px_5px_1px_rgba(0,0,0,0.1)] flex flex-col py-10 px-5 w-full gap-3 h-full`}
              >
                <img
                  loading="lazy"
                  src={process.env.REACT_APP_PUBLIC_URL + data[2]?.image}
                  className="w-full "
                />
                <div className="relative flex flex-col text-base font-semibold text-blue-500 w-fit">
                  <span>{data[2]?.title}</span>
                </div>
                <div className="text-xl font-bold text-blue-gray-800">
                  {data[2]?.desc}
                </div>
                <span className="text-base font-inter">{data[2]?.content}</span>
                <div className="flex flex-col justify-start w-full gap-3 md:flex-row">
                  <div className="flex justify-start w-1/2">
                    <Button
                      dark
                      label="Learn More"
                      onClickHandle={() => {
                        scrollToTop();
                        setSelectedPage(data[2]?.openUrl);
                        // setopenDialog(true);
                      }}
                    />
                  </div>
                  <div
                    onClick={() => {
                      setContactOpened(true);
                    }}
                    className="flex items-center justify-center text-center text-blue-500 underline transition-all cursor-pointer font-inter hover:font-bold"
                  >
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      ) : (
        <div className="flex w-full lg:gap-10 sm:gap-3 items-stretch justify-center max-w-[1200px] z-10 md:flex-row flex-col">
          <div className="md:w-[30%] w-full h-auto flex-shrink pb-3">
            <div
              className={`bg-white rounded-2xl transition-all justify-between shadow-[1px_5px_5px_1px_rgba(0,0,0,0.1)] flex flex-col py-10 px-5 gap-3 h-full`}
            >
              <img
                loading="lazy"
                src={process.env.REACT_APP_PUBLIC_URL + data[0]?.image}
                className="w-full "
              />
              <div className="relative flex flex-col text-base font-semibold text-blue-500 w-fit">
                <span>{data[0]?.title}</span>
              </div>
              <div className="text-xl font-bold text-blue-gray-800">
                {data[0]?.desc}
              </div>
              <span className="text-base font-inter">{data[0]?.content}</span>
              <div className="flex flex-col justify-start w-full gap-3 md:flex-row">
                <div className="flex justify-start w-1/2">
                  <Button
                    dark
                    label="Learn More"
                    onClickHandle={() => {
                      scrollToTop();
                      setSelectedPage(data[0]?.openUrl);
                    }}
                  />
                </div>
                <div
                  onClick={() => {
                    setContactOpened(true);
                  }}
                  className="flex items-center justify-center text-center text-blue-500 underline transition-all cursor-pointer font-inter hover:font-bold"
                >
                  Contact Us
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[30%] w-full h-auto flex-shrink pb-3 md:-mt-10 mt-0">
            <div
              className={`bg-white rounded-2xl transition-all justify-between shadow-[1px_5px_5px_1px_rgba(0,0,0,0.1)] flex flex-col py-10 px-5 gap-3 h-full`}
            >
              <img
                loading="lazy"
                src={process.env.REACT_APP_PUBLIC_URL + data[1]?.image}
                className="w-full "
              />
              <div className="relative flex flex-col text-base font-semibold text-blue-500 w-fit">
                <span>{data[1]?.title}</span>
              </div>
              <div className="text-xl font-bold text-blue-gray-800">
                {data[1]?.desc}
              </div>
              <span className="text-base font-inter">{data[1]?.content}</span>
              <div className="flex flex-col justify-start w-full gap-3 md:flex-row">
                <div className="flex justify-start w-1/2">
                  <Button
                    dark
                    label="Learn More"
                    onClickHandle={() => {
                      scrollToTop();
                      setSelectedPage(data[1]?.openUrl);
                    }}
                  />
                </div>
                <div
                  onClick={() => {
                    setContactOpened(true);
                  }}
                  className="flex items-center justify-center text-center text-blue-500 underline transition-all cursor-pointer font-inter hover:font-bold"
                >
                  Contact Us
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[30%] w-full h-auto flex-shrink pb-3">
            <div
              className={`bg-white rounded-2xl transition-all justify-between shadow-[1px_5px_5px_1px_rgba(0,0,0,0.1)] flex flex-col py-10 px-5 w-full gap-3 h-full`}
            >
              <img
                loading="lazy"
                src={process.env.REACT_APP_PUBLIC_URL + data[2]?.image}
                className="w-full "
              />
              <div className="relative flex flex-col text-base font-semibold text-blue-500 w-fit">
                <span>{data[2]?.title}</span>
              </div>
              <div className="text-xl font-bold text-blue-gray-800">
                {data[2]?.desc}
              </div>
              <span className="text-base font-inter">{data[2]?.content}</span>
              <div className="flex flex-col justify-start w-full gap-3 md:flex-row">
                <div className="flex justify-start w-1/2">
                  <Button
                    dark
                    label="Learn More"
                    onClickHandle={() => {
                      scrollToTop();
                      setSelectedPage(data[2]?.openUrl);
                    }}
                  />
                </div>
                <div
                  onClick={() => {
                    setContactOpened(true);
                  }}
                  className="flex items-center justify-center text-center text-blue-500 underline transition-all cursor-pointer font-inter hover:font-bold"
                >
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default HowToUsing;
