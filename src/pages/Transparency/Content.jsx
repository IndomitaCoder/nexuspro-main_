import { useMode } from 'ModeContext';
import { useState } from 'react';
import ContentHeader from './ContentHeader';
import ContentBalances from './ContentBalances';
import ContentReports from './ContentReports';
import ContentBridge from './ContentBridge';

const Content = () => {
  const { mode } = useMode();
  const [selectedTab, setselectedTab] = useState(0);

  const contentStuff = () => {
    switch (selectedTab) {
      case 0:
        return <ContentBalances />;
      case 1:
        return <ContentReports />;
      case 2:
        return <ContentBridge />;
      default:
        return <></>;
    }
  };

  return (
    <div className={`pb-16 w-full bg-white pt-32 md:px-12 px-5 z-10`}>
      <ContentHeader
        selectedTab={selectedTab}
        setselectedTab={setselectedTab}
      />
      <div>{contentStuff()}</div>
    </div>
  );
};

export default Content;
