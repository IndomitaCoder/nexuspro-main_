import { useMode } from 'ModeContext';
import { ContactUsForm } from 'components/Dialog/ContactUs';
import ButtonDark from 'components/Input/Button_dark';

import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Footer = ({ setSelectedPage, setContactOpened }) => {
  const { mode } = useMode();
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(enteredEmail));
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`flex flex-col w-full bg-gradient-to-b from-[#263238] to-[#364E59] text-gray-400`}
    >
      <div className="flex flex-row flex-wrap items-start justify-center w-full px-4 py-12 space-y-2 bg-blue text-start">
        <div className="flex flex-col px-5  md:border-r-[#B5DCEE33] border-opacity-50 w-full md:w-[20%] gap-5">
          <span className={`text-2xl font-bold  transition-all text-white `}>
            Bridging New Stability Borders
          </span>
          <span className="text-lg font-semibold text-[rgba(200, 200, 200, 0.50)] mb-[20px]">
            Become a part of the Nexus Pro community and embark on a journey
            where stability, innovation, and trust redefine your digital finance
            experience. Whether you're looking for a secure store of value or
            cutting-edge solutions, Nexus Pro is your partner in navigating the
            dynamic world of cryptocurrencies
          </span>
        </div>
        <div className="flex flex-col px-5 w-1/2 md:w-[15%]  gap-5 min-h-[200px]">
          <span className={`text-xl font-bold transition-all text-white`}>
            Company
          </span>
          <div className="flex flex-col gap-2 text-[rgba(200, 200, 200, 0.50)]">
            <span
              className="text-lg font-semibold underline cursor-pointer hover:opacity-50"
              onClick={() => {
                scrollToTop();
                setSelectedPage('aboutus');
              }}
            >
              About Us
            </span>
            <span className="text-lg font-semibold underline cursor-pointer hover:opacity-50 ">
              <a
                target="_blank"
                href={`https://static.nexuspro.io/nexuspro-whitepaper.pdf`}
              >
                Whitepaper
              </a>
            </span>
            <span
              className="text-lg font-semibold underline cursor-pointer hover:opacity-50"
              onClick={() => {
                scrollToTop();
                setSelectedPage('career');
              }}
            >
              Careers
            </span>
            <span
              className="text-lg font-semibold underline cursor-pointer hover:opacity-50"
              onClick={() => {
                setContactOpened(true);
              }}
            >
              Contact Us
            </span>
            <span
              className="text-lg font-semibold underline cursor-pointer hover:opacity-50"
              onClick={() => {
                scrollToTop();
                setSelectedPage('terms');
              }}
            >
              Terms of Use
            </span>
            <span
              className="text-lg font-semibold underline cursor-pointer hover:opacity-50"
              onClick={() => {
                scrollToTop();
                setSelectedPage('privacy');
              }}
            >
              Private Policy
            </span>
          </div>
        </div>
        <div className="flex flex-col px-5  w-1/2 md:w-[15%]  gap-5 min-h-[200px]">
          <span className={`text-xl font-bold transition-all text-white`}>
            Resources
          </span>
          <div className="flex flex-col gap-2 text-[rgba(200, 200, 200, 0.50)]">
            <span
              className="text-lg font-semibold underline cursor-pointer hover:opacity-50"
              onClick={() => {
                scrollToTop();
                setSelectedPage('news');
              }}
            >
              News
            </span>
            <span
              className="text-lg font-semibold underline cursor-pointer hover:opacity-50"
              onClick={() => {
                scrollToTop();
                setSelectedPage('faqs');
              }}
            >
              FAQs
            </span>
            <span
              className="text-lg font-semibold underline cursor-pointer hover:opacity-50"
              onClick={() => {
                setContactOpened(true);
              }}
            >
              Integration Guidelines
            </span>
            <span className="text-lg font-semibold underline cursor-pointer hover:opacity-50">
              Media Assets
            </span>
          </div>
        </div>
        <div className="flex flex-col px-5 w-full md:w-[30%] gap-5 min-h-[200px]">
          <span
            className={`text-xl font-semibold transition-all text-white mt-5 sm:mt-0`}
          >
            Subscribe to NexusPro NewsLetter
          </span>
          <div
            className={`flex justify-start gap-3 transition-all p-5 rounded-xl  md:items-stretch sm:items-stretch items-stretch xl:items-stretch`}
          >
            <input
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
              className={`md:w-2/3 w-1/2 h-full md:text-xl text-base text-black placeholder:text-gray-800 transition-all outline-none bg-white p-2 rounded-xl`}
            />
            <div className="flex justify-end">
              <button
                onClick={() => {
                  if (isEmailValid) {
                    console.log('Email is valid:', email);
                    emailjs
                      .send(
                        process.env.REACT_APP_SERVICE_ID,
                        process.env.REACT_APP_TEMPLATE_SUBSCRIBE_ID,
                        {
                          email
                        },
                        process.env.REACT_APP_PUBLIC_KEY
                      )
                      .then(
                        (response) => {
                          console.log(
                            'SUCCESS!',
                            response.status,
                            response.text
                          );
                          alert('Thanks! We will response soon!');
                        },
                        (err) => {
                          console.log('FAILED...', err);
                        }
                      );
                  } else {
                    alert('Invalid email');
                  }
                }}
                className={`inline-block rounded-lg  xl:px-11 px-5 py-2 text-xs leading-normal transition duration-150 ease-in-out bg-[#0088CD] dark:text-gray text-white hover:shadow-[6px_5px_13px_0px_#0e6a94]`}
              >
                Subscribe
              </button>
            </div>
          </div>

          <span className="text-sm font-semibold text-[rgba(200, 200, 200, 0.50)]">
            By submitting this form, you agree to receive marketing and other
            communications from NexusPro about the NexusPro Products and other
            company updates. You can unsubscribe from these communications at
            any time. For more information on our privacy practices, please
            review our{' '}
            <span
              className="underline cursor-pointer hover:opacity-65"
              onClick={() => {
                scrollToTop();
                setSelectedPage('privacy');
              }}
            >
              Privacy Policy
            </span>
            .
          </span>
        </div>
      </div>
      <div
        className={`${
          !mode ? 'bg-white' : 'bg-black_sm'
        } p-5 flex md:flex-row flex-col text-center transition-all items-center justify-between`}
      >
        <span className="flex items-center h-20 mt-0 transition-all cursor-pointer hover:opacity-80">
          <img
            loading="lazy"
            src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/Nexus Pro_Logo 1-min.png`}
            alt="wing"
            className="h-2/3"
          />
        </span>

        <span className={`text-lg text-gray-700 transition-all`}>
          Copyright © 2023-2024 Nexus Pro AG Operation Limited. All Rights
          Reserved.
        </span>
        <div className="flex flex-wrap gap-3">
          <div className="cursor-pointer hover:opacity-50 w-[30px] h-[40px]">
            <a href="https://t.me/+fB8NaPx6WzgyMzc5" target="_blank">
              <img
                loading="lazy"
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  '/assets/images/Telegram App.png'
                }
                alt="wing"
              />
            </a>
          </div>
          <div className="cursor-pointer hover:opacity-50 w-[30px] h-[40px]">
            <a href="https://twitter.com/NexusPro_io" target="_blank">
              <img
                loading="lazy"
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  '/assets/images/Twitter.png'
                }
                alt="wing"
              />
            </a>
          </div>
          <div className="cursor-pointer hover:opacity-50 w-[30px] h-[40px]">
            <a href="https://www.tiktok.com/@nexuspro.io" target="_blank">
              <img
                loading="lazy"
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  '/assets/images/tik tok.png'
                }
                alt="wing"
              />
            </a>
          </div>
          <div className="cursor-pointer hover:opacity-50 w-[30px] h-[40px]">
            <a
              href="https://www.linkedin.com/company/nexuspro-io/"
              target="_blank"
            >
              <img
                loading="lazy"
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  '/assets/images/linked_in.png'
                }
                alt="wing"
              />
            </a>
          </div>
          <div className="cursor-pointer hover:opacity-50 w-[30px] h-[40px]">
            <a
              href="https://www.facebook.com/profile.php?id=61557079761256"
              target="_blank"
            >
              <img
                loading="lazy"
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  '/assets/images/Facebook.png'
                }
                alt="wing"
              />
            </a>
          </div>
          <div className="cursor-pointer hover:opacity-50 w-[30px] h-[40px]">
            <a href="https://www.instagram.com/nexuspro.io/" target="_blank">
              <img
                loading="lazy"
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  '/assets/images/Instagram.png'
                }
                alt="wing"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
