const Description = () => {
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/transparency_bg_1-min.png")`;
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
        Transparency
      </span>
      <span className="text-xl text-center font-inter max-w-[500px]">
        All NexusPro Coins are pegged at 1-to-1 with a matching fiat currency
        and are backed 100% by ’s reserves.
      </span>
    </div>
  );
};

export default Description;
