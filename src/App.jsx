import Navbar from './components/Navbar'
import Home from './components/Home'
import { useState } from 'react'

const App = () => {
  const [selectedCategory,setSelectedCategory]=useState("general");
  return (
    <div>
      <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Home selectedCategory={selectedCategory}/>
    </div>
  );
};

export default App;
