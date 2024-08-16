import { ContactUsForm } from 'components/Dialog/ContactUs';
import { useState } from 'react';

const Footer = ({ setContactOpened }) => {
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/blue_texture_bg.png")`;

  return (
    <div className={` w-full relative bg-blue-800 overflow-hidden`}>
      <div className="flex pt-[100px] flex-col w-full px-4 items-center justify-center relative z-20">
        <div className="flex-col w-full mb-6 text-center max-w-[1200px] text-white md:text-start md:w-[60%] mx-auto text-clip items-center justify-center pb-16 z-20">
          <div className="flex items-center justify-center w-full mb-8 text-3xl font-bold text-center">
            Join Nexus Pro and Redefine Your Personal Finance Experience
          </div>
          <div className="flex flex-col items-center pb-10 text-xl text-center">
            <span className="flex items-center justify-start w-full font-inter">
              Embark on a journey of financial empowerment with Nexus Pro.
              Whether you're an individual looking for accessibility, a private
              investor seeking personalized solutions, or a trader navigating
              the markets, Nexus Pro is your partner in redefining your personal
              finance experience. Join us today and explore the possibilities of
              a seamless, cost-efficient financial ecosystem.
            </span>
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              type="button"
              onClick={() => {
                setContactOpened(true);
              }}
              className={`flex border border-white rounded-lg xl:px-11 px-5 xl:py-4 py-2 text-lg leading-normal transition duration-150 ease-in-out  dark:text-gray text-white hover:shadow-[6px_5px_13px_0px_#0e6a94]`}
            >
              Contact Us
            </button>
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
    </div>
  );
};

export default Footer;
