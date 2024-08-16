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
        Nexus Pro For Developers
      </span>
      <span className=" text-3xl font-bold sm:leading-[55px] sm:text-5xl">
        Fueling Innovation in Web3 Experiences
        <div className="w-full h-1 my-5 border-b-2 border-gray-500"></div>
      </span>

      <span className="text-base font-light text-center max-w-[800px] mx-auto font-inter">
        Empower your applications with the cutting-edge capabilities of Nexus
        Pro. Developers, seize the opportunity to integrate Nexus Pro into your
        projects – whether you're enhancing existing apps or building new Web3
        experiences. Dive into our robust APIs and SDKs, available on Ethereum,
        and a multitude of other chains, to revolutionize the way users interact
        with digital finance.
      </span>
    </div>
  );
};

export default Title;
