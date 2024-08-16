const Third = () => {
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/blue_texture_bg.png")`;
  return (
    <div className={` w-full relative bg-blue-800 overflow-hidden`}>
      <div className="flex pt-[100px] flex-col w-full px-4 items-center justify-center relative z-20">
        <div className="flex-col w-full mb-6 text-center max-w-[1200px]  text-white md:text-start md:w-[60%] mx-auto text-clip items-center justify-center pb-16 z-20">
          <div className="flex flex-col items-center pb-10 text-xl text-center">
            <span className="flex items-center justify-start w-full font-inter">
              As you navigate the NexusPro Products section, you'll discover a
              comprehensive suite of tools designed to empower your financial
              journey. Whether you're trading on the NexusPro Exchange, securing
              your assets with the NexusPro Wallet, or exploring the future of
              finance with NexusPro Insights, our products are crafted to
              elevate your digital finance experience.
            </span>
          </div>
          <div className="flex items-center justify-center w-full mb-8 text-3xl font-bold text-center">
            “NexusPro - Where Innovation Meets Reliability in Digital Finance”
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
    </div>
  );
};

export default Third;
