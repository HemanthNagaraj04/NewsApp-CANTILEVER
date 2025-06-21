import searchImg from "../assets/search.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
 import { toast } from 'react-toastify';

const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();
    useEffect(()=>{
        if(isAuthenticated && user?.name){
            toast.success(`Welcome, ${user?.name}`)
        }
    },[isAuthenticated,user])
    return (
        
        <div className='w-full bg-white relative '>
            <div className='flex flex-col md:flex-row items-center justify-between p-4 gap-4 md:gap-0 mx-4'>
                <h1 className="text-2xl font-normal md:text-4xl text-black">News App</h1>
                <div className='flex gap-3 bg-[rgb(235,236,237)] w-full md:w-1/2 rounded-xl px-4 py-2'>
                    <img src={searchImg} alt="Search icon" className='w-5 h-5 mt-0.5' />
                    <input type="text"
                        placeholder='Search News...'
                        className="focus:outline-none w-full text-black placeholder-gray-400" />
                </div>
                <div>
                    {isAuthenticated ?
                        (<button className='bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-md px-2 py-1 text-white text-sm absolute top-4 right-7 md:static md:px-4 md:py-2'
                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                        ) : (
                            <button className='bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-md px-2 py-1 text-white text-sm absolute top-4 right-7 md:static md:px-4 md:py-2'
                                onClick={() => loginWithRedirect()}>Log In</button>)}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

