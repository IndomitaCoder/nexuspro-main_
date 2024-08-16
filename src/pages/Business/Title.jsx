const Title = () => {
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/how_bg-min.png")`;
  return (
    <div
      className="flex flex-col items-center justify-center w-full gap-2 py-8 text-white px-14 "
      style={{
        backgroundImage,
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local',
        backgroundSize: 'cover'
      }}
    >
      <span className="pt-8 text-xl font-semibold text-blue-300">
        Nexus Pro For Businesses
      </span>
      <span className=" text-3xl font-bold sm:leading-[55px] sm:text-5xl">
        Empowering Your Financial Edge
        <div className="w-full h-1 my-5 border-b-2 border-gray-500"></div>
      </span>

      <span className="text-base font-light text-center max-w-[800px] mx-auto font-inter">
        Unlock a new dimension of financial efficiency for your business by
        onboarding onto the Nexus Pro Ecosystem. Tailored to meet the unique
        needs of enterprises and wholesale distributors, Nexus Pro introduces
        seamless conversion between USD, Euro, US/EU, and EU/US tokens creating
        an environment where speed, affordability, and reliability converge.
      </span>
    </div>
  );
};

export default Title;
