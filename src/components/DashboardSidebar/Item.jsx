import { useMode } from 'ModeContext';

const SidebarItem = ({ icon, label, onClickHandle, isSelected }) => {
  const { mode } = useMode();
  return (
    <div
      className={`py-5 border-b  ${
        mode
          ? 'bg-[#072431] hover:bg-[#051a24] border-gray_md'
          : 'bg-[#f1f1f1] hover:bg-[#d7d7d7] border-white'
      } cursor-pointer transition-all ${
        isSelected ? (mode ? 'bg-black_sm' : 'bg-[#a7a7a7]') : ''
      }`}
      onClick={onClickHandle}
    >
      <div
        className={`flex items-center px-10 gap-7  ${
          isSelected ? ' text-blue ' : mode ? 'text-white' : 'text-gray_md'
        } transition-all`}
      >
        {icon}
        <span>{label}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
