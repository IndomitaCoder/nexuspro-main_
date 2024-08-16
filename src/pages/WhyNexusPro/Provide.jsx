import { useMode } from 'ModeContext';
import PriceChart from 'components/Chart';
import { useEUUSRate } from 'hooks/useEUUSRate';
import { useUSEURate } from 'hooks/useUSEURate';
import { useEffect, useState } from 'react';

const ProvideAccess = () => {
  const { mode } = useMode();

  const euusInitialData = useEUUSRate();
  const useuInitialData = useUSEURate();

  const [euusRate, setEuusRate] = useState(
    euusInitialData?.isFetched ? euusInitialData?.data?.data?.message : null
  );

  const [useuRate, setUseuRate] = useState(
    useuInitialData?.isFetched ? useuInitialData?.data?.data?.message : null
  );

  useEffect(() => {
    if (!euusInitialData?.isLoading && euusInitialData !== null) {
      setEuusRate(euusInitialData?.data?.data?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [euusInitialData?.isLoading, euusInitialData?.data, euusInitialData]);

  useEffect(() => {
    if (!useuInitialData?.isLoading && useuInitialData !== null) {
      setUseuRate(useuInitialData?.data?.data?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useuInitialData?.isLoading, useuInitialData?.data, euusInitialData]);

  return (
    <div
      className={`flex flex-col transition-all items-center gap-16 py-36 bg-gray-300 md:px-36 px-5`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-3 text-gray_md transition-all`}
      >
        <div
          className={`relative flex flex-col text-4xl font-bold w-fit text-inherit`}
        >
          <span className=" text-[#263238] text-center">
            Realtime prices/Exchange rates
          </span>
        </div>
        <div
          className={`relative flex flex-col uppercase text-lg w-fit text-inherit`}
        >
          <span className=" text-inherit">Trade/Buy</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between w-full gap-5 md:gap-3">
        <div className="md:w-[45%] w-full">
          <PriceChart
            title="EU/US"
            from="EUR"
            rate={useuRate}
            to="USD"
            loadingRate={euusInitialData?.isLoading}
            image_dark={
              <img
                loading="lazy"
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  '/assets/images/Nexus Pro_Icons_03-min.png'
                }
                alt="wing"
                className="h-[70px] w-[70px]"
              />
            }
          />
        </div>
        <div className="md:w-[45%] w-full">
          <PriceChart
            title="US/EU"
            from="USD"
            to="EUR"
            rate={euusRate}
            euusRate
            loadingRate={useuInitialData?.isLoading}
            image_dark={
              <img
                loading="lazy"
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  '/assets/images/Nexus Pro_Icons_04-min.png'
                }
                alt="wing"
                className="h-[70px] w-[70px]"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProvideAccess;
