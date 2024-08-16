const Board = ({ children }) => {
  return (
    <div
      className={`bg-white rounded-2xl transition-all shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] flex flex-col pt-10 pl-10 pb-10 w-full`}
    >
      {children}
    </div>
  );
};

export default Board;
