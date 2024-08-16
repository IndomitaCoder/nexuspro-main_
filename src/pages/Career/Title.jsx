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
      <span className=" text-3xl font-bold sm:leading-[55px] sm:text-5xl">
        Careers
      </span>

      <span className="text-base font-light text-center max-w-[800px] mx-auto font-inter font-inter">
        Careers, Jobs Opening, Apply for a job, Send us your resume.
      </span>
    </div>
  );
};

export default Title;
