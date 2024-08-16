import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const NewsPart = ({ apiData }) => {
  return (
    <div
      className={`flex flex-col relative overflow-hidden items-center py-16 bg-[#EAEAEA] sm:px-14 px-5 text-[#263238] transition-all`}
    >
      <div
        className="absolute w-[1000px] h-[1000px] rounded-full -bottom-[90%] -left-[500px] blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(0,136,205,0.5) 1%, rgba(87,87,168,0) 100%)'
        }}
      />
      <div className="z-10 flex flex-col gap-8 px-4 mx-auto max-w-[1200px] w-full">
        <Carousel
          swipeable
          showStatus={false}
          useKeyboardArrows
          infiniteLoop
          autoPlay
          className="news-carousel"
        >
          {apiData?.map((d, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-full px-5 justify-evenly md:flex-row font-inter"
            >
              <div className="w-full md:w-[45%]">
                <a href={d?.news_url} target="_blank" rel="noopener noreferrer">
                  <img
                    loading="lazy"
                    src={d?.image_url}
                    className="w-[589px] transition-all rounded-xl cursor-pointer hover:opacity-50"
                    alt={`News ${i + 1}`}
                  />
                </a>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-full md:w-[45%] text-start">
                <span className="text-xl font-bold transition-all cursor-pointer font-poppins md:text-3xl hover:opacity-50">
                  <a
                    href={d?.news_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {d?.title}
                  </a>
                </span>
                <p>{d?.text}</p>
                <div className=" font-inter">
                  by <b>{d?.source_name}</b> | {d?.date}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default NewsPart;
