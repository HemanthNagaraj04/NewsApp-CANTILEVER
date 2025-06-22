import { useState, useEffect } from 'react';

const Home = ({ selectedCategory, searchTerm }) => {
  const API_KEY = import.meta.env.VITE_CURRENT_NEWS_API_KEY;
  const [news, setNews] = useState([]);

  const getNews = async () => {

    const selection = searchTerm ? (`https://api.currentsapi.services/v1/search?keywords=${searchTerm}&apiKey=${API_KEY}`)
      : (`https://api.currentsapi.services/v1/latest-news?category=${selectedCategory}&apiKey=${API_KEY}`);
    try {
      const res = await fetch(selection);
      const data = await res.json();
      setNews(data.news.slice(0, 13));
    } catch (error) {
      console.log("Error fetching News",error);
    }
  }

  useEffect(() => {
    getNews()
  }, [selectedCategory, searchTerm]);

  const topStories = news.slice(0, 4);
  const trending = news.slice(4, 12);

  return (
    <div className='flex flex-col lg:flex-row m-4 md:m-10 gap-5 justify-center'>
      <div className='bg-white w-full lg:w-[60%] rounded-2xl shadow mb-4'>
        <h3 className='font-semibold text-2xl text-blue-400 p-3 ml-5'>Top Stories</h3>
        {topStories.length > 0 ? (
          topStories.map((article, index) => (
            <div key={index} className='shadow mx-5 mb-5 flex rounded-2xl bg-[rgb(41, 42, 45)] p-2 '>
              {article.image && (
                <img src={article.image} alt={article.title} className='w-30 h-30 object-cover md:w-45 md:h-45 rounded-xl mr-4' />
              )}
              <div className='flex flex-col max-w-200'>
                <a href={article.url} target='_blank' rel="noreferrer">
                  <h4 className='font-semibold text-sm md:text-base text-black'>{article.title}</h4>
                  <p className="line-clamp-2 font-light text-xs md:text-base md:line-clamp-4 text-gray-700">{article.description}</p>
                  <p className='text-blue-500 hover:underline mt-auto text-sm '>Read more →</p>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className='text-black ml-5'>Loading top stories...</p>
        )}
      </div>


      <div className='bg-white w-full lg:w-[35%] rounded-2xl shadow mb-4'>
        <h3 className='font-semibold text-2xl text-blue-400 p-3 ml-5'>Trending</h3>
        {trending.length > 0 ? (
          trending.map((article, index) => (
            <div key={index} className='flex gap-2 mb-5 shadow p-3 rounded-xl mx-4'>
              {article.image && (
                <img src={article.image} alt={article.title} className='w-15 h-15 object-cover rounded-xl ml-5' />
              )}
              <div className='flex flex-col max-w-100'>
                <a href={article.url} target='_blank'>
                  <h4 className='font-semibold text-black text-xs mt-2'>{article.title}</h4>
                  <p className='text-blue-500 hover:underline mt-auto text-xs'>Read more →</p>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className='text-black ml-5'>Loading Trending...</p>
        )}
      </div>
    </div>
  )
}

export default Home
