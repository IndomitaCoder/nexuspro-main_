const RoundIssuedStep = ({ label, content }) => {
  return (
    <div
      className={`to-[#86c7e4] relative from-white flex flex-col items-center justify-center w-10 pt-[70px] pb-[40px] px-[100px] h-10 text-center border-[#0088CD] border rounded-2xl bg-gradient-to-r shadow-xl`}
    >
      <span className="text-4xl font-[20] text-white bg-[#263238] rounded-full w-16 h-16 p-5 flex justify-center items-center top-0 -translate-y-1/2 absolute">
        {label}
      </span>
      <span className="font-bold text-[#263238] text-xl">{content}</span>
    </div>
  );
};

export default RoundIssuedStep;
