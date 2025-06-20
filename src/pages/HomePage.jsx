import Navbar from '../components/Navbar'
import MenuBar from '../components/MenuBar'
import Home from '../components/Home'
import { useState } from 'react'

const HomePage = () => {
    const [selectedCategory,setSelectedCategory]=useState("general");
  return (
    <div>
      <Navbar />
      <MenuBar setSelectedCategory={setSelectedCategory} />
      <Home selectedCategory={selectedCategory}/>
    </div>
  )
}

export default HomePage
