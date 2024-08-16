const Fifth = ({ setSelectedPage }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={` w-full relative bg-blue-800 overflow-hidden`}>
      <div className="flex flex-col w-full">
        <div className="flex flex-col-reverse items-center justify-center gap-5 py-5 text-white bg-gradient-to-r from-[#00C7F5] to-[#0088CD] md:flex-row">
          <div className="w-full md:w-[60%] max-w-[800px] px-10">
            <div className="relative flex flex-col w-full gap-4 my-8">
              <span className="flex text-4xl font-bold">
                Join the Nexus Pro Community
              </span>
              <span className="absolute w-1/3 -bottom-5"></span>
              <span>
                Become a part of the Nexus Pro community and embark on a journey
                where stability, innovation, and trust redefine your digital
                finance experience. Whether you're looking for a secure store of
                value or cutting-edge solutions, Nexus Pro is your partner in
                navigating the dynamic world of cryptocurrencies.
              </span>
              <span className={`text-xl font-semibold   transition-all`}>
                “Nexus Pro - Where Stability Meets Innovation in Digital
                Finance”
              </span>
              <button
                type="button"
                onClick={() => {
                  scrollToTop();
                  setSelectedPage('transparency');
                }}
                className={`inline-block rounded-lg xl:px-11 px-5 w-fit xl:py-4 py-2 text-xs leading-normal transition duration-150 ease-in-out bg-[#263238] text-white hover:shadow-[6px_5px_13px_0px_#0e6a94]`}
              >
                View Reserves
              </button>
            </div>
          </div>
          <div className="">
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/01_About Us_community 2-min.png'
              }
              alt="wing"
              className=" sm:max-w-[400px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
