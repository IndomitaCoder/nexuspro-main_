import classNames from 'classnames';

const ButtonGreen = ({ dark, size, label, color, onClickHandle }) => {
  return (
    <button
      type="button"
      onClick={onClickHandle}
      className={classNames(
        `inline-block dark font-bold rounded-lg xl:px-11 px-5 xl:py-4 py-2 w-full text-xs uppercase leading-normal transition duration-150 ease-in-out bg-green_sm dark:text-gray text-white shadow-[4px_3px_13px_0px_#1A8F5C] hover:shadow-[6px_5px_13px_0px_#1A8F5C]`
      )}
    >
      {label}
    </button>
  );
};

export default ButtonGreen;
