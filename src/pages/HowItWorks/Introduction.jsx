const Introduction = () => {
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/how_bg_2_-min.png")`;
  return (
    <div className={`py-[50px] w-full relative `}>
      <div
        className={`w-full h-full absolute bottom-0 right-0 z-10`}
        style={{
          backgroundImage: backgroundImage,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'inherit',

          opacity: 0.8,
          backgroundPosition: 'right bottom'
        }}
      />
      <div
        className={`w-full h-full absolute bottom-0 right-0`}
        style={{
          background: 'linear-gradient(315deg, #87caeb 13%, #0073d7 100%)'
        }}
      />
      <div className="flex flex-col w-full px-4 max-w-[1200px] items-center justify-center relative z-20">
        <div className="flex-col w-full mb-6 text-center text-white md:text-start md:w-[60%]">
          <div className="flex mb-8 text-3xl font-bold">
            Nexus Pro tokens are digital assets that offer a unique fusion of
            traditional fiat currencies and the innovative features of
            blockchain technology.
          </div>
          <div className="flex flex-col items-center gap-8 text-xl font-inter">
            Unlike conventional cryptocurrencies that typically represent a
            single asset, Nexus Pro tokens, such as US/EU and EU/US, embody a
            dual-pair structure, combining two major fiat currencies within a
            single token.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
