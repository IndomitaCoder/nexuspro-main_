import Content from './Content';
import Footer from './Footer';
import Title from './Title';

const Person = ({ setContactOpened }) => {
  return (
    <div className={`bg-[#263238] h-fit flex flex-col w-full pt-[90px]`}>
      <Title />
      <Content />
      <Footer setContactOpened={setContactOpened} />
    </div>
  );
};

export default Person;
