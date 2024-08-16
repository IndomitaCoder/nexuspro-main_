const breakdowns = [
  {
    name: 'Reserves Breakdown',
    data: [
      {
        title: 'Cash & Cash Equivalents & Other Short-Term Deposits',
        percentage: 80,
        color: '#13BE4D'
      },
      {
        title: 'Corporate Bonds',
        percentage: 5,
        color: '#EA8A21'
      },
      {
        title: 'Other Investments',
        percentage: 5,
        color: '#C8CB3F'
      },
      {
        title: 'Secured Loans',
        percentage: 10,
        color: '#D46DCA'
      }
    ]
  },
  {
    name: 'Cash & Cash Equivalents & Other Short-Term Deposits',
    data: [
      {
        title: 'U.S. Treasury Bills',
        percentage: 85,
        color: '#13BE4D'
      },
      {
        title: 'Overnight Reverse Repurchase Agreements',
        percentage: 10,
        color: '#D46DCA'
      },
      {
        title: 'Term Reverse Repurchase Agreements',
        percentage: 5,
        color: '#C8CB3F'
      }
    ]
  }
];

const ContentReports = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <div className={`rounded-3xl bg-gray-200 max-w-[1200px] mx-auto w-full`}>
        <span className="flex flex-col items-center justify-center pt-8 pb-4 text-xl text-center text-gray-800 sm:flex-row font-inter md:text-3xl">
          <span className="flex mx-5 font-bold">Last Update:</span> Dec 09, 2023
          - 11:30:08 PM UTC
        </span>
        <div className="w-full py-3 border-b-2 border-gray-400"></div>
        <div className="flex flex-col items-center justify-center gap-4 px-5 py-8 mx-auto text-center text-gray-800 lg:px-14 md:px-10">
          <div className="md:w-[80%] w-full gap-4 flex flex-col font-inter">
            <span className="text-xl font-bold md:text-3xl">
              Transparent Insights: Nexus Pro's Monthly Reserve Reports
            </span>
            <p className="">
              At Nexus Pro, we understand the importance of transparency and
              accountability in the digital finance industry. That's why we are
              proud to offer monthly reserve reports to our users. These reports
              provide a detailed overview of the assets backing our tokens,
              giving you full visibility into our financial health and
              stability.
            </p>
            <p className="">
              Each month, we meticulously compile and analyze our reserves,
              ensuring that they are adequately diversified and securely stored.
              Our reserve reports include comprehensive information about the
              composition of our assets, such as fiat currencies,
              cryptocurrencies, and other financial instruments.
            </p>
            <p>
              By offering monthly reserve reports, we aim to instill trust and
              confidence in our platform, allowing our users to make informed
              decisions about their investments. At Nexus Pro, transparency is
              not just a value—it's a commitment.
            </p>
            <p className="text-lg font-semibold md:text-xl">
              Join us and experience the peace of mind that comes with knowing
              your investments are in safe hands
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center w-full gap-5 pt-20 pb-10 ">
            {[
              {
                image: (
                  <img
                    loading="lazy"
                    src={
                      process.env.REACT_APP_PUBLIC_URL +
                      '/assets/images/Crypto news 1-min.png'
                    }
                    className="w-full rounded-xl"
                    alt="news"
                  />
                ),
                description:
                  "Independent Auditors' Report on the Consolidated Reserves Report",
                date: 'September 30, 2023'
              },
              {
                image: (
                  <img
                    loading="lazy"
                    src={
                      process.env.REACT_APP_PUBLIC_URL +
                      '/assets/images/Crypto news 1-min.png'
                    }
                    className="w-full rounded-xl"
                    alt="news"
                  />
                ),
                description:
                  "Independent Auditors' Report on the Consolidated Reserves Report",
                date: 'September 30, 2023'
              },
              {
                image: (
                  <img
                    loading="lazy"
                    src={
                      process.env.REACT_APP_PUBLIC_URL +
                      '/assets/images/Crypto news 1-min.png'
                    }
                    className="w-full rounded-xl"
                    alt="news"
                  />
                ),
                description:
                  "Independent Auditors' Report on the Consolidated Reserves Report",
                date: 'September 30, 2023'
              },
              {
                image: (
                  <img
                    loading="lazy"
                    src={
                      process.env.REACT_APP_PUBLIC_URL +
                      '/assets/images/Crypto news 1-min.png'
                    }
                    className="w-full rounded-xl"
                    alt="news"
                  />
                ),
                description:
                  "Independent Auditors' Report on the Consolidated Reserves Report",
                date: 'September 30, 2023'
              }
            ].map((item, index) => (
              <div
                className="flex flex-col md:w-[18%] sm:w-[45%] rounded-3xl cursor-pointer pb-5 border hover:border-opacity-100 border-blue border-opacity-0 transition-all w-full gap-5"
                key={index}
              >
                <div className="flex w-full">{item?.image}</div>
                <span className="px-3 font-semibold text-[#263238] text-start">
                  {item?.description}
                </span>
                <div className="flex items-center justify-between w-full text-start">
                  <span className="px-3 text-xs text-[#263238]">
                    {item?.date}
                  </span>
                  <span className="inline text-sm text-blue-500 underline hover:font-bold font-inter">
                    Read More
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div
            className="flex items-center justify-center text-white sm:w-fit w-full bg-blue-500 h-auto
           cursor-pointer hover:shadow-[0px_0px_5px_3px_#0a4a68] rounded-xl px-8 py-3 "
          >
            <span className="text-xl text-blue">See more →</span>
          </div>
          <div className="flex flex-col gap-40 md:gap-24">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col w-full h-fit">
                <div className="flex flex-wrap w-full gap-3">
                  {breakdowns.map((breakdown, index) => {
                    let totalPer = 0;
                    return (
                      <div
                        className="flex flex-col w-full gap-5 md:w-[45%]"
                        key={index}
                      >
                        <div className="flex flex-col w-full">
                          <span className="flex items-center justify-center h-24 text-2xl font-bold text-blue">
                            {breakdown?.name}
                          </span>
                          <div className="relative h-24">
                            {breakdown?.data?.map((item, i) => {
                              totalPer += item?.percentage;
                              return (
                                <div
                                  key={i}
                                  className="absolute flex w-full bg-opacity-0"
                                >
                                  <span
                                    className={`h-2 p-4 rounded-2xl inline-block`}
                                    style={{
                                      width: totalPer + '%',
                                      background: item?.color,
                                      zIndex: breakdown?.data?.length - i
                                    }}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-start justify-between gap-3 mx-auto">
                          {breakdown?.data?.map((item, i) => {
                            totalPer = totalPer - item?.percentage;
                            return (
                              <div
                                className="flex flex-col w-[40%] gap-3"
                                key={i}
                              >
                                <div className="flex items-start justify-start gap-4">
                                  <span
                                    className="flex p-5 rounded-full"
                                    style={{
                                      background: item?.color
                                    }}
                                  />
                                  <div className="flex flex-col items-start text-start">
                                    <span className="font-bold text-gray_md">
                                      {item?.percentage}%
                                    </span>
                                    <span className="text-[#9f9f9f] text-sm font-inter">
                                      {item?.title}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentReports;
