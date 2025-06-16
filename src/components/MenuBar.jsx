
const MenuBar = () => {
  const categories = ['Home', 'India', 'World', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science', 'Health'];

  return (
    <div className='bg-white p-3'>
      <div className='flex flex-wrap justify-around text-gray-500 gap-5 mx-2 md:mx-5 font-medium'>
        {categories.map((cat, i) => (
          <h1 key={i} className='cursor-pointer hover:text-black'>{cat}</h1>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
