const ContentHeader = ({ selectedTab, setselectedTab }) => {
  const selectedStyle = `inline-block cursor-pointer rounded-lg xl:px-11 px-5 xl:py-6 py-4 text-lg transition duration-150 ease-in-out bg-[#263238]`;
  const unselectedStyle = `inline-block cursor-pointer  xl:px-11 px-5 xl:py-6 py-4 text-lg transition duration-150 ease-in-out border-[rgba(0,0,0,0)] rounded-lg bg-blue-500 `;
  return (
    <div
      className={`flex py-6 px-6 mx-auto rounded-3xl md:w-fit w-[100%] items-center justify-center -mt-[150px] z-10 bg-white`}
    >
      <div className="flex flex-col w-full gap-3 text-center text-white md:flex-row font-inter ">
        <span
          onClick={() => {
            setselectedTab(0);
          }}
          className={selectedTab === 0 ? selectedStyle : unselectedStyle}
        >
          Current Balances
        </span>
        <span
          onClick={() => {
            setselectedTab(1);
          }}
          className={selectedTab === 1 ? selectedStyle : unselectedStyle}
        >
          Reports & Reserves
        </span>
        <span
          onClick={() => {
            setselectedTab(2);
          }}
          className={selectedTab === 2 ? selectedStyle : unselectedStyle}
        >
          Bridges
        </span>
      </div>
    </div>
  );
};

export default ContentHeader;
