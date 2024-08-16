import classNames from 'classnames';

const ButtonRed = ({ dark, size, label, color, onClickHandle }) => {
  return (
    <button
      type="button"
      // style={{
      //   boxShadow: '4px 3px 13px 0px rgba(18, 143, 200, 1)'
      // }}
      className={classNames(
        `inline-block dark font-bold rounded-lg xl:px-11 px-5 xl:py-4 py-2 text-xs uppercase leading-normal transition duration-150 ease-in-out bg-red dark:text-gray text-white shadow-[4px_3px_13px_0px_#EB3223] hover:shadow-[6px_5px_13px_0px_#EB3223]`
      )}
    >
      {label}
    </button>
  );
};

export default ButtonRed;
