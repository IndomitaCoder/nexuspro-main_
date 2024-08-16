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
        Nexus Pro build for Individuals, Private Investors, and Traders
      </span>
      <span className=" text-3xl font-bold sm:leading-[55px] sm:text-5xl">
        Elevate Your Personal Finances
        <div className="w-full h-1 my-5 border-b-2 border-gray-500"></div>
      </span>

      <span className="text-base font-light text-center max-w-[800px] mx-auto font-inter">
        Transform your personal financial journey with Nexus Pro – a platform
        designed to empower individuals, private investors, and traders. Gain
        access to seamless currency conversion, near-instant transactions, and a
        cost-efficient ecosystem that caters to your unique financial needs.
      </span>
    </div>
  );
};

export default Title;
