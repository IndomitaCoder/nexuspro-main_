import { useState, useEffect } from 'react';
import Updated from './Updated';
import NewsPart from './NewsPart';
import List from './List';
import axios from 'axios';

function News() {
  const [page, setPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [fetching, setFetching] = useState(false);

  const fetchNewsData = async () => {
    try {
      const res = await axios.get(
        `https://cryptonews-api.com/api/v1/category?section=general&&items=3&page=${page}&token=${process.env.REACT_APP_NEWS_API_KEY}`
      );

      setNewsData((prevData) => [...prevData, ...res.data.data]);
    } catch (error) {
      console.error('Error fetching news data:', error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      const listElement = document.getElementById('list_news');
      const listBottom = listElement.offsetTop + listElement.offsetHeight;

      if (!listElement || fetching) return;

      if (window.innerHeight + scrollY >= listBottom) {
        setFetching(true);
        setTimeout(() => {
          setPage((prevPage) => prevPage + 1);
        }, 3000); // 3 seconds delay
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetching]);

  const initialData = newsData.slice(0, 4);

  return (
    <div
      className={`bg-[#389bcd]  h-fit flex flex-col w-full pt-[90px]`}
      id="list_news"
    >
      <Updated />
      <NewsPart apiData={initialData} />
      <List data={newsData} fetching={fetching} />
    </div>
  );
}

export default News;
