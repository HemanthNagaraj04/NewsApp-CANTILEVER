import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MenuBar from './MenuBar'
import Home from './Home'

const Main = () => {
    const [news,setNews]=useState();
    const getNews = async()=>{
        try{
            const res= await fetch(`https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=f258ff1b967d40a09ff91f99689d0e3d`);
            const data=await res.json();
            console.log(data.articles[0]);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getNews()
    },[]);

  return (
    <div>
      <Navbar />
      <MenuBar />
      <Home data={"data"}/>
    </div>
  )
}

export default Main
