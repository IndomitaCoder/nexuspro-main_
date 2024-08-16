import Content from './Content';
import Fifth from './Fifth';
import Forth from './Forth';
import Third from './Third';
import Title from './Title';

const Products = ({ setSelectedPage }) => {
  return (
    <div className={`bg-[#263238] h-fit flex flex-col w-full pt-[90px]`}>
      <Title />
      <Content setSelectedPage={setSelectedPage} />
      <Third />
      <Forth />
      <Fifth />
    </div>
  );
};

export default Products;
