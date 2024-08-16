const Title = () => {
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/about_bg_1-min.png")`;
  return (
    <div
      className="flex flex-col items-center justify-center w-full py-16 mx-auto text-white px-14"
      style={{
        backgroundImage,
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local',
        backgroundSize: 'cover'
      }}
    >
      <div className=" absolute w-full h-full opacity-60 to-[#459ac5] from-[#248ebb] bg-gradient-to-r md:hidden inline-block" />
      <span className="pt-3 font-bold sm:leading-[55px] text-5xl z-10">
        About Us
      </span>
      <span className="z-10 text-xl text-center font-inter max-w-[500px]">
        Redefine Your Digital Finance Journey Today
      </span>
    </div>
  );
};

export default Title;
