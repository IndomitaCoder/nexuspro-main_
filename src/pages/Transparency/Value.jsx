const Value = () => {
  return (
    <div
      className={`flex flex-col relative overflow-hidden items-center py-16 bg-[#EAEAEA] sm:px-14 pb-24 px-5 text-[#263238] transition-all`}
    >
      <div
        className="absolute xl:w-[1000px] xl:h-[1000px] w-[500px] h-[500px] rounded-full bottom-[20%] -left-[20%] blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(0,136,205,0.5) 1%, rgba(87,87,168,0) 100%)'
        }}
      />
      <div
        className="absolute xl:w-[1000px] xl:h-[1000px] w-[500px] h-[500px] rounded-full xl:-bottom-[100%] -bottom-[20%] xl:-right-[10%] right-0 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(48, 145, 194, 0.3) 1%, rgba(87,87,168,0) 100%)'
        }}
      />
      <div className="p-10 max-w-[800px] flex flex-col items-center gap-5 border-2 border-r-white z-10 rounded-xl bg-opacity-70 bg-slate-900/75 shadow-lg bg-gray-100">
        <span className="md:w-2/3 w-[90%] text-xl font-bold text-center">
          The value of our reserves is published daily and updated at least once
          per day.
        </span>
        <div className="flex flex-col divide-x-0 divide-y divide-gray-400 sm:divide-x sm:divide-y-0 sm:flex-row sm:w-fit w-[90%]">
          <div className="flex flex-col items-center gap-5 p-5">
            <div className="flex flex-col items-center gap-3 h-[100px] w-[100px]">
              <img
                loading="lazy"
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  '/assets/images/Nexus Pro_Icons_04-min.png'
                }
                alt="wing"
                className="w-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-5 text-center">
              <div className="flex items-center gap-1">
                <p className="flex text-lg font-semibold text-blue-500">
                  US/EU
                </p>
              </div>
              <div className="flex-row hidden lg:flex">
                <div className="flex flex-col items-end justify-end mr-2 text-lg font-semibold">
                  <div>Total Supply : </div>
                  <div>In Circulation : </div>
                  <div>Treasury : </div>
                </div>
                <div className="flex flex-col items-start justify-start text-xl font-semibold">
                  <div>$5,000,000,000</div>
                  <div>$32,800,000</div>
                  <div>$4,967,200,000 US/EU</div>
                </div>
              </div>
              <div className="flex flex-col lg:hidden">
                <div className="text-lg">Total Supply</div>
                <div className="text-xl font-semibold">$5,000,000,000</div>
                <div className="text-lg">In Circulation</div>
                <div className="text-xl font-semibold">$32,800,000</div>
                <div className="text-lg">Treasury </div>
                <div className="text-xl font-semibold">
                  $4,967,200,000 US/EU
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 p-5">
            <div className="flex flex-col items-center gap-3 h-[100px] w-[100px]">
              <img
                loading="lazy"
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  '/assets/images/Nexus Pro_Icons_03-min.png'
                }
                alt="wing"
                className="w-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-5 text-center">
              <div className="flex items-center gap-1">
                <p className="flex text-lg font-semibold text-blue-500">
                  US/EU
                </p>
              </div>

              <div className="flex-row hidden lg:flex">
                <div className="flex flex-col items-end justify-end mr-2 text-lg font-semibold">
                  <div>Total Supply : </div>
                  <div>In Circulation : </div>
                  <div>Treasury : </div>
                </div>
                <div className="flex flex-col items-start justify-start text-xl font-semibold">
                  <div>€5,000,000,000</div>
                  <div>€34,600,000</div>
                  <div>4,965,400,000 EU/US</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center lg:hidden">
                <div className="text-lg">Total Supply</div>
                <div className="text-xl font-semibold">€5,000,000,000</div>
                <div className="text-lg">In Circulation</div>
                <div className="text-xl font-semibold">€34,600,000</div>
                <div className="text-lg">Treasury </div>
                <div className="text-xl font-semibold">4,965,400,000 EU/US</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
