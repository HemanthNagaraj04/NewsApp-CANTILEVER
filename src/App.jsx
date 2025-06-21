import Navbar from './components/Navbar'
import Home from './components/Home'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSearchTerm={setSearchTerm} />
      <Home selectedCategory={selectedCategory} searchTerm={searchTerm} />
      <ToastContainer position="top-center"/>
    </div>
  );
};

export default App;
