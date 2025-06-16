import { useState, useEffect } from 'react';


const Home = () => {
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const [news, setNews] = useState([]);
  const getNews = async () => {
    try {
      const res = await fetch(`https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${API_KEY}`);
      const data = await res.json();
      setNews(data.articles.slice(0, 13));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNews()
  }, []);

  const topStories = news.slice(0, 4);
  const trending = news.slice(4, 13);

  return (
    <div className='flex m-10 gap-5 justify-center'>
      <div className='bg-white w-150 rounded-2xl shadow'>
        <h3 className='font-bold text-xl text-blue-400 p-3 ml-5'>Top Stories</h3>
        {topStories.length > 0 ? (
          topStories.map((article, index) => (
            <div key={index} className='shadow mx-5 mb-5 flex rounded-2xl bg-[rgb(41, 42, 45)] p-2 '>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className='w-45 h-45 object-cover rounded-xl mr-4'
                />
              )}
              <div className='flex flex-col max-w-100'>

                <a
                  href={article.url}
                  target='_blank'
                >
                  <h4 className='font-bold text-black'>{article.title}</h4>
                  <p className='text-sm text-gray-700'>{article.description}</p>
                  <p className='text-blue-500 hover:underline mt-auto text-sm '>Read more →</p>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className='text-black ml-5'>Loading top stories...</p>
        )}
      </div>


      <div className=' bg-white w-1/3 rounded-2xl shadow'>
        <h3 className='font-bold text-xl text-blue-400 p-3 ml-5'>Trending</h3>
        {trending.length > 0 ? (
          trending.map((article, index) => (
            <div key={index} className='flex gap-2 mb-5 shadow p-3 rounded-xl mx-4'>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className='w-15 h-15 object-cover rounded-xl ml-5'
                />
              )}
              <div className='flex flex-col max-w-100'>
                <a href={article.url} target='_blank'>
                  <h4 className='font-bold text-black text-xs mt-2'>{article.title}</h4>
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
