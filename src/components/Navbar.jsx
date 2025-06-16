import searchImg from "../assets/search.png";
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuth } from '../firebase/setup';

const Navbar = () => {

    const GoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleAuth);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bg-white relative'>
            <div className='flex flex-col md:flex-row items-center justify-between p-4 gap-4 md:gap-0 mx-4'>
                <h1 className="text-2xl md:text-xl font-bold text-black">News App</h1>
                <div className='flex gap-3 bg-[rgb(235,236,237)] w-full md:w-1/2 rounded-xl px-4 py-2'>
                    <img src={searchImg} alt="Search icon" className='w-5 h-5 mt-0.5'/>
                    <input
                        type="text"
                        placeholder='Search News...'
                        className="focus:outline-none w-full text-black placeholder-gray-400"
                        aria-label="Search news"
                    />
                </div>
                <button
                    className='bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-md px-4 py-2 text-white text-sm absolute top-4 right-7 md:static'
                    onClick={GoogleSignIn}
                    aria-label="Sign in with Google"
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default Navbar;

