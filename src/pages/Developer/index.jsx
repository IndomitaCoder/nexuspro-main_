import Content from './Content';
import Footer from './Footer';
import Title from './Title';

const Developer = ({ setContactOpened }) => {
  return (
    <div className={`bg-[#263238] h-fit flex flex-col w-full pt-[90px]`}>
      <Title />
      <Content />
      <Footer />
    </div>
  );
};

export default Developer;
