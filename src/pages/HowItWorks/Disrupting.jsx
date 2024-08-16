import { useMode } from 'ModeContext';
import ButtonDark from 'components/Input/Button_dark';
import { DialogCustom } from 'components/Dialog';
import { useEffect, useState } from 'react';
import Button from 'components/Input/Button_dark';
import { Carousel } from 'react-responsive-carousel';
import { ContactUsForHowitWorks } from 'components/Dialog/ContactUsForHowitWorks';

const Disrupting = () => {
  const [openDialog, setopenDialog] = useState(false);
  const [selectedTab, setselectedTab] = useState(0);
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

  const data = [
    {
      title: 'Nexus Pro for Merchants',
      img: 'how_dis_1-min.png',
      desc: 'Onboard your business on Nexus Pro Ecosystem ',
      content: `Nexus Pro offers a tailored solution for merchants, empowering businesses with seamless access to digital financial services. With Nexus Pro, merchants can leverage the benefits of blockchain technology to streamline transactions, reduce costs, and enhance security. Whether you're a small retailer or a large enterprise, Nexus Pro provides the tools and infrastructure you need to thrive in the digital economy. Join us and unlock new opportunities for growth and innovation in your business.`,
      header: 'Nexus Pro For Merchants',
      body: (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 text-lg font-medium text-gray-800">
            <p>
              Nexus Pro presents an all-encompassing solution designed
              specifically for merchants, catering to the diverse needs of
              businesses in today's digital landscape. By embracing Nexus Pro,
              merchants gain access to a wealth of benefits that streamline
              operations, enhance financial efficiency, and elevate the overall
              customer experience.
            </p>

            <p>
              One of the key advantages of Nexus Pro is its seamless integration
              of blockchain technology, which enables merchants to securely
              process transactions with increased speed and transparency. By
              leveraging the decentralized nature of blockchain, merchants can
              reduce the risk of fraud and chargebacks, ultimately leading to
              cost savings and enhanced trust among customers.
            </p>

            <p>
              Moreover, Nexus Pro offers merchants access to a global network of
              customers, allowing businesses to expand their reach and tap into
              new markets. With Nexus Pro, merchants can accept payments in
              various cryptocurrencies, offering customers greater flexibility
              and convenience in their purchasing experience.
            </p>

            <p>
              Additionally, Nexus Pro provides merchants with robust tools for
              managing their finances and accessing real-time insights into
              their sales and revenue. From advanced analytics to customizable
              reporting features, Nexus Pro empowers merchants with the
              data-driven insights they need to make informed business decisions
              and drive growth.
            </p>

            <p>
              Furthermore, Nexus Pro offers competitive transaction fees,
              ensuring that merchants can maximize their profitability while
              providing customers with fair and transparent pricing. With Nexus
              Pro, merchants can enjoy lower processing fees compared to
              traditional payment methods, further enhancing their bottom line.
            </p>

            <p>
              In summary, Nexus Pro is the ultimate solution for merchants
              looking to thrive in the digital age. With its comprehensive suite
              of features, seamless integration with blockchain technology, and
              competitive pricing, Nexus Pro equips merchants with the tools and
              resources they need to succeed in today's competitive marketplace.
            </p>
          </div>
          <ContactUsForHowitWorks setopenDialog={setopenDialog} />
        </div>
      )
    },
    {
      title: 'Nexus Pro for individuals',
      img: 'how_dis_2-min.png',
      desc: 'Get NexusPro for personal use',
      content: (
        <div className="flex flex-col gap-3">
          <p>
            Nexus Pro offers a comprehensive suite of financial services
            tailored to meet the needs of individuals in the ever-evolving
            digital landscape.
          </p>
          <p>
            Whether you're an experienced investor or a newcomer to the world of
            cryptocurrencies, Nexus Pro provides a user-friendly platform that
            empowers you to manage your digital assets with ease.
          </p>
        </div>
      ),
      header: 'Nexus Pro for individuals',
      body: (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 text-lg font-medium text-gray-800">
            <p>
              With Nexus Pro, individuals gain access to a wide range of
              benefits that enhance their financial capabilities and provide
              greater flexibility in managing their wealth. From seamless
              transactions to secure storage solutions, Nexus Pro offers
              individuals the tools they need to navigate the complexities of
              the digital economy.
            </p>

            <p>
              One of the key advantages of Nexus Pro for individuals is its
              user-friendly interface, which makes it easy to buy, sell, and
              trade US/EU or EU/US with just a few clicks. Whether you're
              looking to invest in stable digital assets, Nexus Pro provides a
              hassle-free experience that puts you in control of your financial
              future.
            </p>

            <p>
              Moreover, Nexus Pro offers individuals access to advanced security
              features that protect their digital assets from unauthorized
              access and cyber threats. With features such as multi-factor
              authentication and cold storage solutions, Nexus Pro ensures that
              your investments are safe and secure at all times.
            </p>

            <p>
              Additionally, Nexus Pro provides individuals with valuable
              insights and analytics tools that help them make informed
              decisions about their investments. From real-time market data to
              customizable reports, Nexus Pro equips individuals with the
              information they need to stay ahead of the curve and maximize
              their returns.
            </p>

            <p>
              Furthermore, Nexus Pro offers competitive transction rates and low
              fees, ensuring that individuals can maximize their profits and
              minimize their expenses when buying, selling, or trading digital
              assets. With Nexus Pro, individuals can enjoy cost-effective
              solutions that help them grow their wealth over time.
            </p>

            <p>
              In summary, Nexus Pro is the ultimate platform for individuals
              looking to harness the power of fiat currncy  and cryptocurrencies
              and take control of their financial future. With its user-friendly
              interface, advanced security features, and competitive pricing,
              Nexus Pro empowers individuals to achieve their financial goals
              and thrive in the digital economy.
            </p>
          </div>
          <ContactUsForHowitWorks setopenDialog={setopenDialog} />
        </div>
      )
    },
    {
      title: 'Nexus pro for crypto exchanges ',
      img: 'how_dis_3-min.png',
      desc: 'Integrate NexusPro into an app',
      content: (
        <div className="flex flex-col gap-3">
          <p>
            Nexus Pro offers a comprehensive solution tailored specifically for
            crypto exchanges, providing a range of features and services
            designed to enhance efficiency, security, and profitability.
          </p>
          <p>
            With Nexus Pro, crypto exchanges can streamline their operations,
            attract more users, and stay ahead of the competition in today's
            rapidly evolving digital landscape.
          </p>
        </div>
      ),
      header: 'Nexus Pro for Crypto Exchanges',
      body: (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 text-lg font-medium text-gray-800">
            <p>
              One of the key advantages of Nexus Pro for crypto exchanges is its
              advanced technology infrastructure, which is built to handle high
              volumes of transactions with ease. With scalable architecture and
              robust security measures, Nexus Pro ensures that exchanges can
              operate seamlessly and securely, even during periods of peak
              demand.
            </p>

            <p>
              Moreover, Nexus Pro API provides exchanges with access to a
              diverse selection to track activity on US/EU and US/EU tokens This
              enables exchanges to expand their asset offerings and cater to the
              diverse needs of their user base, attracting new customers and
              increasing trading volume.
            </p>

            <p>
              Additionally, Nexus Pro API offers comprehensive compliance
              solutions, helping exchanges ensure compliance with international
              regulations and industry standards. With features such as KYC/AML
              verification, transaction monitoring, and regulatory reporting
              tools, exchanges can operate with confidence and trust, fostering
              a secure and compliant trading environment for their users.
            </p>

            <p>
              Nexus Pro provides crypto exchanges with access to liquidity pools
              and market-making services, helping to ensure deep order books and
              tight spreads for a smooth trading experience. By partnering with
              Nexus Pro, exchanges can offer their users competitive pricing and
              a seamless trading experience that keeps them coming back for
              more.
            </p>

            <p>
              In summary, Nexus Pro is the ultimate solution for crypto
              exchanges looking to optimize their operations, attract more
              users, and drive growth in today's competitive market. With its
              advanced technology infrastructure, diverse asset selection,
              liquidity solutions, and compliance features, Nexus Pro provides
              exchanges with everything they need to succeed in the fast-paced
              world of digital asset trading.
            </p>
          </div>
          <ContactUsForHowitWorks setopenDialog={setopenDialog} />
        </div>
      )
    }
  ];

  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}assets/images/why_using_1-min.png")`;
  const backgroundImage_ = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/why_using_2-min.png")`;
  return (
    <div
      className={`flex flex-col relative overflow-hidden items-center py-16 bg-gray-300 sm:px-14 px-5 transition-all`}
    >
      <div
        className="absolute w-[1000px] h-[1000px] rounded-full -top-[500px] -left-[500px] blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 137, 205, 0.232) 1%, rgba(87,87,168,0) 100%)'
        }}
      />
      <div
        className={`w-[800px] h-[800px] absolute -bottom-16 -right-[300px] opacity-60 blur-sm`}
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
      <span
        className={`text-[#263238] text-center md:w-1/2 w-[90%] my-4 z-10 text-4xl py-10 font-bold`}
      >
        The token that is disrupting the global financial industry
      </span>

      {isMobileMenuOpen ? (
        <div className={` w-full`}>
          <Carousel swipeable showStatus={false} useKeyboardArrows>
            {data?.map((d, i) => (
              <div
                key={i}
                className=" gap-8 flex flex-col shadow-lg mx-3 items-center rounded-2xl lg:p-10 p-5 sm:h-[550px] xs:h-[650px] h-[700px] bg-white z-10"
              >
                <div
                  className={`relative flex flex-col gap-3 p-3 my-5 bg-white justify-between text-start items-center rounded-2xl h-full`}
                >
                  <div className="flex flex-col items-center justify-start gap-3 text-start">
                    <div className="">
                      <img
                        loading="lazy"
                        src={
                          process.env.REACT_APP_PUBLIC_URL +
                          '/assets/images/' +
                          d?.img
                        }
                        alt="wing"
                        className=" sm:max-w-[400px] z-0 w-full"
                      />
                    </div>
                    <span className="gap-10 text-xl font-bold text-blue">
                      {d?.title}
                    </span>
                    <span
                      className={`z-10 text-base font-semibold text-gray-800 font-inter`}
                    >
                      {d?.content}
                    </span>
                  </div>
                  <div className="z-10 inline-block py-3">
                    <ButtonDark
                      onClickHandle={() => {
                        setselectedTab(i);
                        setopenDialog(true);
                      }}
                      label={'Learn more'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <div className="flex justify-center w-full gap-3 my-10 h-fit md:gap-10 flex-row max-w-[1200px] mx-auto">
          <div className="flex flex-col items-stretch justify-center w-full lg:flex-row lg:justify-between ">
            {data?.map((d, i) => (
              <div
                key={i}
                className="w-[32%] xl:w-[30%] gap-8 flex flex-col shadow-lg items-start rounded-2xl lg:p-10 p-5 bg-white z-10"
              >
                <div
                  className={`relative flex flex-col gap-3 justify-between h-full`}
                >
                  <div className="flex flex-col items-start justify-start gap-3 text-start">
                    <div className="">
                      <img
                        loading="lazy"
                        src={
                          process.env.REACT_APP_PUBLIC_URL +
                          '/assets/images/' +
                          d?.img
                        }
                        alt="wing"
                        className=" sm:max-w-[400px] z-0 w-full"
                      />
                    </div>
                    <span className="gap-10 text-xl font-bold text-blue">
                      {d?.title}
                    </span>
                    <span
                      className={`z-10 text-base font-semibold text-gray-800  font-inter`}
                    >
                      {d?.content}
                    </span>
                  </div>
                  <div className="z-10 inline-block py-3">
                    <ButtonDark
                      onClickHandle={() => {
                        setselectedTab(i);
                        setopenDialog(true);
                      }}
                      label={'Learn more'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Disrupting;
