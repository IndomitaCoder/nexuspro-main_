import { SpinningCircles } from 'react-loading-icons';

const List = ({ data, fetching }) => {
  return (
    <div className="flex-col items-center w-full">
      <div className="flex justify-center w-full gap-3 bg-white ">
        <div className="flex max-w-[1000px] w-full py-10 md:divide-x divide-x-0 md:divide-y-0 divide-y md:gap-0 gap-10 divide-gray-600 md:flex-row flex-col">
          <div className="flex flex-col gap-16 px-5">
            {data?.map((d, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-between w-full gap-3 sm:flex-row"
              >
                <div className="w-full sm:w-[50%]">
                  <a
                    href={d?.news_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      loading="lazy"
                      src={d?.image_url}
                      alt={d?.title}
                      className="w-full transition-all rounded-lg cursor-pointer hover:opacity-50"
                    />
                  </a>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-full sm:w-[45%] text-start text-[#263238]">
                  <span className="text-2xl font-bold transition-all cursor-pointer sm:text-2xl hover:opacity-50">
                    <a
                      href={d?.news_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {d?.title}
                    </a>
                  </span>
                  <p className=" font-inter">{d?.text}</p>
                  <div className=" font-inter">
                    by <b>{d?.source_name}</b> | {d?.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {fetching ? (
        <div className="flex items-center justify-center gap-1 bg-white">
          <span>
            <SpinningCircles
              stroke="#52565a"
              speed={1.5}
              fill="#b8bec4"
              width={'40px'}
              height={'40px'}
            />
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default List;
