const Title = () => {
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/coin_bg_1-min.png")`;
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
      <span className="pt-3 font-bold sm:leading-[55px] text-5xl">
        Terms of Use
      </span>
    </div>
  );
};

export default Title;
