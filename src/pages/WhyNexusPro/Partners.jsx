const Partners = () => {
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/how_bg_2-min.png")`;
  return (
    <div className={`w-full relative h-full`}>
      <div
        className={`w-1/2 h-full absolute right-0 top-0 z-10`}
        style={{
          backgroundImage: backgroundImage,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: 0.8,
          backgroundPosition: 'right center'
        }}
      />
      <div
        className={`w-full h-full absolute top-0 right-0`}
        style={{
          background: 'linear-gradient(315deg, #87caeb 13%, #0082e5 100%)'
        }}
      />
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4">
        <div className="flex-col items-center justify-center w-full text-white ">
          <div className="flex items-center justify-center my-16 text-3xl font-bold text-center">
            BECOME A GLOBAL PARTNER
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
