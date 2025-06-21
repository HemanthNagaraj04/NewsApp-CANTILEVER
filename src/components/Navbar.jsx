import searchImg from "../assets/search.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef, useState } from "react";
import { toast } from 'react-toastify';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ selectedCategory, setSelectedCategory, setSearchTerm }) => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const hasWelcomed = useRef(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const categories = ['General', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science', 'Health'];
    const [query, setQuery] = useState("");

    const handleCategoryClick = (e, category) => {
        e.preventDefault()
        setSelectedCategory(category.toLowerCase())
        setMenuOpen(false);
        setSearchTerm("");
        setQuery("");
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setSearchTerm(query);
            setQuery("");
        }
    }

    const handleSearch = () => {
        setSearchTerm(query);
        setQuery("");
    }

    useEffect(() => {
        if (isAuthenticated && !hasWelcomed.current) {
            toast.success(`Welcome, ${user?.name}`)
            hasWelcomed.current = true;
        }
    }, [isAuthenticated])

    return (

        <div className='w-full bg-white relative '>
            <div className='flex flex-col md:flex-row items-center justify-between p-4 gap-4 md:gap-0 mx-4'>
                <h1 className="text-2xl font-normal md:text-4xl text-black">News App</h1>
                <div className="absolute top-5 right-10  md:hidden">
                    <button onClick={() => { setMenuOpen(!menuOpen) }}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <div className='flex gap-3 py-2 px-4 bg-[rgb(235,236,237)] w-full md:w-1/2 rounded-xl md:px-4 md:py-2'>
                    <img src={searchImg} alt="Search icon" className='w-5 h-5 mt-2 md:mt-0.5 hidden md:block' />
                    <input type="text"
                        placeholder='Search News...'
                        value={query}
                        onChange={(e) => { setQuery(e.target.value) }}
                        onKeyDown={handleEnter}
                        className="focus:outline-none w-full text-black placeholder-gray-400" />
                    <button className="bg-white p-2 rounded-full md:hidden flex items-center justify-center"
                        onClick={handleSearch}><img src={searchImg} alt="Search" className="w-6 h-5" /></button>
                </div>
                <div className="hidden md:block">
                    {isAuthenticated ?
                        (<button className='bg-red-500 hover:bg-red-700 p-2.5 cursor-pointer rounded-xl text-white text-sm '
                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                        ) : (
                            <button className='bg-blue-600 hover:bg-blue-700 p-2.5 cursor-pointer rounded-xl text-white text-sm'
                                onClick={() => loginWithRedirect()}>Log In</button>)}
                </div>
            </div>
            <div className='bg-white p-4 w-full'>
                <div className='hidden md:flex flex-wrap justify-around text-gray-500 gap-5 mx-2 md:mx-5'>
                    {categories.map((category, i) => (
                        <h1 key={i} onClick={(e) => handleCategoryClick(e, category)} className={`cursor-pointer ${selectedCategory === category ? "bg-blue-500 p-3 rounded-3xl text-white" : "text-gray-500 p-2 hover:text-black"
                            }`}>{category}</h1>
                    ))}
                </div>
            </div>
            {menuOpen && (
                <div className={`flex flex-col items-center pb-4 `}>
                    <div className="">
                        {categories.map((category, i) => (
                            <h1 key={i} onClick={(e) => handleCategoryClick(e, category)}
                                className={`text-center py-1 ${selectedCategory === category ? "bg-blue-600 text-white rounded-3xl px-4" : "text-gray-500"}`}>
                                {category} </h1>
                        ))}
                    </div>
                    <div>
                        {isAuthenticated ?
                            (<button className='bg-red-500 rounded-xl px-3 py-2 text-white text-sm'
                                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                            ) : (
                                <button className='bg-blue-600 rounded-xl px-3 py-2 text-white text-sm'
                                    onClick={() => loginWithRedirect()}>Log In</button>)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

