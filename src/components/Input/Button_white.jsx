const ButtonWhite = ({ dark, size, label, color, onClickHandle }) => {
  return (
    <button
      type="button"
      // style={{
      //   boxShadow: '4px 3px 13px 0px rgba(18, 143, 200, 1)'
      // }}
      className={`inline-block rounded-xl px-11 py-4 leading-normal transition duration-150 ease-in-out border-gray-400 border-2
      text-blue hover:shadow-[6px_5px_13px_0px_#0e6a94]`}
      onClick={onClickHandle}
    >
      {label}
    </button>
  );
};

export default ButtonWhite;
