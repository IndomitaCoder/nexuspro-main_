const Content = () => {
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/blue_texture_bg.png")`;
  return (
    <div className={` w-full relative bg-blue-800 overflow-hidden -mt-5`}>
      <div className="flex pt-[50px] flex-col w-full px-4 items-center overflow-hidden justify-center relative z-20">
        <div className="flex-col w-full mb-6 text-center max-w-[900px]  text-white md:text-start md:w-[60%] font-inter mx-auto text-clip items-center justify-center pb-12  z-20">
          <div className="flex items-center justify-center w-full mb-8 text-4xl font-bold text-center">
            Ready to explore a new dimension of stability with US/EU and EU/US?
          </div>
          <div className="flex flex-col items-center gap-8 text-2xl text-center font-inter">
            <span>
              Join the Nexus Pro community and embark on a journey where
              innovation, reliability, and security converge. Whether you're a
              seasoned investor or a newcomer, Nexus Pro stablecoins are here to
              redefine your digital financial experience.
            </span>
            <span>
              "Nexus Pro - Elevating Stability, Innovating Digital Finance."
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
      <section className="w-full py-10 overflow-hidden text-[#263238] bg-white">
        <div className="relative flex flex-row flex-wrap items-stretch justify-center w-full gap-3  max-w-[1600px] mx-auto font-inter">
          <div className="flex flex-col items-center md:w-[450px] sm:w-[80%] font-p w-[90%] my-16 py-5 text-lg bg-gradient-to-b rounded-xl border-2 border-gray-400 from-gray-200 to-gray-100 px-10 text-center gap-3">
            <img
              loading="lazy"
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/01_About Us_mission 1-min.png`}
              className="w-[190px] h-[181px] -mt-[100px]"
            />
            <p className="my-3 text-3xl font-bold font-poppins">Our Mission</p>
            <p className="">
              At Nexus Pro, our mission is clear - to empower individuals with
              secure and innovative digital financial tools.
            </p>
            <p>
              We strive to bridge the gap between traditional finance and the
              evolving world of cryptocurrencies, offering a seamless and
              trustworthy experience for all users.
            </p>
          </div>
          <div className="flex flex-col items-center md:w-[450px] sm:w-[80%] font-p w-[90%] my-16 py-5 text-lg bg-gradient-to-b rounded-xl border-2 border-gray-400 from-gray-200 to-gray-100 px-10 text-center gap-3">
            <img
              loading="lazy"
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/01_About Us_stability 1-min.png`}
              className="w-[190px] h-[181px] -mt-[100px]"
            />
            <p className="my-3 text-3xl font-bold font-poppins">
              Stability at the Core
            </p>
            <p className="">
              In an ever-changing crypto environment, stability is paramount.
              Nexus Pro introduces a new era of stability with our flagship
              stablecoins, US/EU and EU/US.
            </p>
            <p>
              These digital assets are meticulously crafted to provide users
              with a reliable and secure store of value, anchored in the
              strength of major fiat currencies.
            </p>
          </div>
          <div className="flex flex-col items-center md:w-[450px] sm:w-[80%] font-p w-[90%] my-16 py-5 text-lg bg-gradient-to-b rounded-xl border-2 border-gray-400 from-gray-200 to-gray-100 px-10 text-center gap-3">
            <img
              loading="lazy"
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/01_About Us_innovation 1-min.png`}
              className="w-[190px] h-[181px] -mt-[100px]"
            />
            <p className="my-3 text-3xl font-bold font-poppins">
              Innovation Beyond Boundaries
            </p>
            <p className="">
              Innovation is woven into the fabric of Nexus Pro. We embrace
              technological advancements to bring you cutting-edge solutions
              that elevate your digital finance experience. From transparent
              blockchain technology to user-friendly platforms, we are committed
              to staying ahead of the curve and setting new standards in the
              industry
            </p>
          </div>

          <div className="flex flex-col items-center md:w-[450px] sm:w-[80%] font-p w-[90%] my-16 py-5 text-lg bg-gradient-to-b rounded-xl border-2 border-gray-400 from-gray-200 to-gray-100 px-10 text-center gap-3">
            <img
              loading="lazy"
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/01_About Us_transparency 1-min.png`}
              className="w-[190px] h-[181px] -mt-[100px]"
            />
            <p className="my-3 text-3xl font-bold font-poppins">
              Transparency & Trust
            </p>
            <p className="">
              Trust is earned through transparency. Nexus Pro is dedicated to
              providing our users with a clear view of our operations.
            </p>
            <p>
              Regular third-party audits ensure that our stablecoins, US/EU and
              EU/US, are backed by real-world assets, instilling confidence and
              trust in the Nexus Pro ecosystem.
            </p>
          </div>
          <div className="flex flex-col items-center md:w-[450px] sm:w-[80%] font-p w-[90%] my-16 py-5 text-lg bg-gradient-to-b rounded-xl border-2 border-gray-400 from-gray-200 to-gray-100 px-10 text-center gap-3">
            <img
              loading="lazy"
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/01_About Us_user 1-min.png`}
              className="w-[190px] h-[181px] -mt-[100px]"
            />
            <p className="my-3 text-3xl font-bold font-poppins">
              User-Centric Approach
            </p>
            <p className="">
              Your experience matters. Nexus Pro is designed with you in mind.
              Whether you're a seasoned crypto enthusiast or a newcomer to the
              digital asset space, our user- friendly platforms make it easy to
              buy, sell, and transact with confidence.
            </p>
            <p>
              Your journey in the crypto world should be accessible, seamless,
              and rewarding - and Nexus Pro is here to make that happen.
            </p>
          </div>
          <div className="flex flex-col items-center md:w-[450px] sm:w-[80%] font-p w-[90%] my-16 py-5 text-lg bg-gradient-to-b rounded-xl border-2 border-gray-400 from-gray-200 to-gray-100 px-10 text-center gap-3">
            <img
              loading="lazy"
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/01_About Us_community 2-min.png`}
              className="w-[190px] h-[181px] -mt-[100px]"
            />
            <p className="my-3 text-3xl font-bold font-poppins">
              Join the Nexus Pro Community
            </p>
            <p className="">
              <span>
                Become a part of the Nexus Pro community and embark on a journey
                where stability, innovation, and trust redefine your digital
                finance experience. Whether you're looking for a secure store of
                value or cutting-edge solutions, Nexus Pro is your partner in
                navigating the dynamic world of cryptocurrencies. Nexus Pro -
                Where Stability Meets Innovation in Digital Finance.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
