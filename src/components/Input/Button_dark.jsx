import classNames from 'classnames';

const ButtonDark = ({ dark, size, label, color, onClickHandle }) => {
  return (
    <button
      type="button"
      onClick={onClickHandle}
      className={classNames(
        `inline-block rounded-xl ${
          size ? size : ''
        } xl:px-11 px-5 xl:py-4 font-inter py-5 text leading-normal transition duration-150 ease-in-out bg-[#0088CD] dark:text-gray text-white hover:shadow-[6px_5px_13px_0px_#0e6a94]`
      )}
    >
      {label}
    </button>
  );
};

export default ButtonDark;
