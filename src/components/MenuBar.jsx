
const MenuBar = ({setSelectedCategory}) => {
  const categories = ['General', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science', 'Health'];
  const handleCategoryClick=(e,category)=>{
    e.preventDefault()
    setSelectedCategory(category)
  }
  return (
    <div className='bg-white p-3 w-full'>
      <div className='flex flex-wrap justify-around text-gray-500 gap-5 mx-2 md:mx-5 font-medium'>
        {categories.map((category, i) => (
          <h1 key={i} onClick={(e)=>handleCategoryClick(e,category)} className='cursor-pointer hover:text-black'>{category}</h1>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
