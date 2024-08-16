const DropDown = ({ title, body, open, setOpen }) => {
  return (
    <div className="relative flex justify-between gap-6 pb-5 border-b-2 border-opacity-50 border-b-blue ">
      <div className="flex flex-col gap-1 md:gap-3">
        <div
          className="flex flex-col mr-5 transition-all cursor-pointer hover:opacity-70"
          onClick={() => {
            setOpen();
          }}
        >
          <span
            className={`  text-lg text-start  flex items-start pr-[50px] ${
              open ? 'text-black font-bold' : 'text-blue-500 font-semibold'
            }`}
          >
            {title}
          </span>
          <div className="absolute right-0 h-fit">
            {!open ? (
              <span className="flex items-center justify-center w-10 h-10 p-2 my-0 text-white bg-blue-500 rounded-full">
                +
              </span>
            ) : (
              <span className="flex items-center justify-center w-10 h-10 p-2 my-0 text-white bg-gray-500 rounded-full">
                -
              </span>
            )}
          </div>
        </div>
        <span
          className={` transition-[2s] ${
            open ? ' max-h-4xl py-8' : 'max-h-0 py-0'
          } bg-gray_md overflow-y-scroll md:px-8 px-2 rounded-lg h-[300px] text-gray-600`}
        >
          {body}
        </span>
      </div>
    </div>
  );
};

export default DropDown;
