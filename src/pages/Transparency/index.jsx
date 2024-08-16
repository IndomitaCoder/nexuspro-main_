import Content from './Content';
import Description from './Description';
import Value from './Value';

const Transparency = () => {
  return (
    <div className={`bg-[#263238]  h-fit flex flex-col w-full pt-[90px]`}>
      <Description />
      <Value />
      <Content />
    </div>
  );
};

export default Transparency;
