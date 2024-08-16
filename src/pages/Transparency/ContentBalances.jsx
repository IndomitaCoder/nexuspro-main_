import { useMode } from 'ModeContext';
import { useState } from 'react';

const ContentBalances = () => {
  const tokens_info = [
    {
      name: 'USD'
    },
    {
      name: 'EURO'
    },
    {
      name: 'USDT'
    },
    {
      name: 'USDC'
    },
    {
      name: 'ETH'
    },
    {
      name: 'WETH'
    },
    {
      name: 'WBTC'
    },
    {
      name: 'BTC'
    },
    {
      name: 'Bonds'
    },
    {
      name: 'Future contact'
    }
  ];
  const [selectedToken, setselectedToken] = useState(0);
  return (
    <div className="flex flex-col gap-10 ">
      <div className={`rounded-3xl bg-gray-200 max-w-[1200px] mx-auto w-full`}>
        <span className="flex flex-col items-center justify-center pt-8 pb-4 text-xl text-center text-gray-800 font-inter sm:flex-row md:text-3xl">
          <span className="flex mx-5 font-bold">Last Update:</span> Dec 09, 2023
          - 11:30:08 PM UTC
        </span>
        <div className="w-full py-3 border-b-2 border-gray-400"></div>
        <div className="flex flex-col gap-4 px-5 py-8 lg:px-14 md:px-10">
          <div className="flex items-center justify-center w-full gap-1 overflow-x-auto transition-all">
            {tokens_info?.map((t, index) => (
              <span
                className={`font-semibold md:text-lg flex items-center justify-center text-white sm:text-base text-sm cursor-pointer hover:text-gray-400 px-5 w- text-center py-2 rounded-xl ${
                  selectedToken === index ? '  bg-[#263238]' : ' bg-blue-500'
                }`}
                key={index}
                onClick={() => {
                  setselectedToken(index);
                }}
              >
                {t?.name}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap w-full gap-5 py-20">
            {[
              {
                name: 'On ETH',
                authorized: '$47,820,715,210.33',
                notIssued: '-$40,875,939.33',
                percentage: 100
              },
              {
                name: 'On ETH',
                authorized: '$47,820,715,210.33',
                notIssued: '-$40,875,939.33',
                percentage: 70
              },
              {
                name: 'On ETH',
                authorized: '$47,820,715,210.33',
                notIssued: '-$40,875,939.33',
                percentage: 30
              },
              {
                name: 'On ETH',
                authorized: '$47,820,715,210.33',
                notIssued: '-$40,875,939.33',
                percentage: 10
              },
              {
                name: 'On ETH',
                authorized: '$47,820,715,210.33',
                notIssued: '-$40,875,939.33',
                percentage: 40
              },
              {
                name: 'On ETH',
                authorized: '$47,820,715,210.33',
                notIssued: '-$40,875,939.33',
                percentage: 100
              }
            ].map((item, index) => (
              <div
                className="shadow-[1px_0px_2px_1px_rgba(0,0,0,0.1)] bg-gradient-to-tr from-[#263238] to-[#60676f] flex flex-col rounded-xl p-7 lg:w-[31%] md:w-[47%] w-full gap-5 text-white font-inter"
                key={index}
              >
                <div className="flex justify-between">
                  <span className={`font-bold text-lg `}>{item?.name}</span>
                </div>
                <div className="flex w-full bg-black rounded-xl">
                  <span
                    className={`h-2 p-4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl inline-block`}
                    style={{
                      width: item?.percentage + '%'
                    }}
                  ></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`font-semibold text-white`}>
                    Total Authorized
                  </span>
                  <span className={`text-white text-xs font-semibold`}>
                    {item?.authorized}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`font-semibold `}>
                    Total Authorized but not issued
                  </span>
                  <span className={`text-white text-xs font-semibold`}>
                    {item?.notIssued}
                  </span>
                </div>
                <div className="flex justify-end w-full">
                  <div className="flex items-center gap-2 px-2 py-1 text-white transition-all bg-blue-500 cursor-pointer w-fit rounded-xl hover:opacity-60">
                    <span className="flex items-center justify-center w-5 h-5 text-xs font-semibold text-center text-white border-2 border-white rounded-full">
                      i
                    </span>
                    Details
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBalances;
