import footer_logo from './footer-logo.png'
import search_pic from './search.png'
import facebook_pic from './facebookicon.png'
import insta_pic from './instaicon.png'
import whatsapp_pic from './whatsappicon.png'
import { useState } from 'react'
import "./Footer.css"

const Footer = ()=>{
    const [flag, setFlag] = useState(false);
    const goToTop = ()=>{
        window.scrollTo({top:0, behavior:'smooth'});
    }
    const show_social_apps =()=>{
        setFlag(!flag);
    }
    return(
        <>
            <footer>
                <div className="h-[22rem] w-full bg-red-600 flex flex-row justify-around items-center">
                    {
                        flag ? 
                        (
                            <div className='animate-slide-in flex flex-col justify-around  h-[22rem] w-[3rem] -ml-[3rem] transition duration-300'>
                                <span>
                                    <img src={whatsapp_pic} alt="Loading..." className='rounded-xl cursor-pointer duration-300 transition '/>
                                </span>
                                <span>
                                    <img src={facebook_pic} alt="Loading..."  className='rounded-xl cursor-pointer duration-300 transition '/>
                                </span>
                                <span>
                                    <img src={insta_pic} alt="Loading..."  className='rounded-xl cursor-pointer duration-300 transition '/>
                                </span>
                            </div>
                        )
                        : 
                        (
                            <div></div>
                        )
                    }
                    
                    <img src={footer_logo} alt='Loading...' className='h-[12rem]'/>
                    <div className='list-none'>
                        <h2 className='font-bold text-2xl text-white mb-[2rem]'>Information</h2>
                        <li className='font-semibold text-white'>Our Locations</li>
                        <li className='font-semibold text-white'>Blog</li>
                        <li className='font-semibold text-white'>Submit Your Complaint</li>
                    </div>
                    <div className=' h-[9rem]'>
                        <h2 className='font-bold text-2xl text-white'>Contact Us</h2>
                        <span className='font-semibold text-white mt-5 block'>021-111-666-111</span>
                    </div>

                    <div className=' h-[9rem]'>
                        <h2 className='font-bold text-2xl text-white'>Get The App</h2> 
                        <span className='font-semibold text-white mt-5 block'>App is where the fun is! It's Easy, Fast and Convenient</span>
                    </div>

                </div>

                <div className='rounded-b-lg bg-red-600  h-[2.9rem] w-[3rem] absolute'>
                    <a className='cursor-pointer'>
                        <img src={search_pic} alt="Loading..." onClick={show_social_apps} className='hover:bg-white cursor-pointer transition duration-200 ease-in-out'/>
                    </a>
                </div>

                <div className='hover:bg-red-600 rounded-full bg-stone-200 transition duration-300 animate-bounce  h-[3.5rem] w-[3.5rem] absolute left-[91rem] top-[517rem]'>
                    <span className='text-5xl text-center font-bold text-black hover:text-white'>
                        <p className='cursor-pointer' onClick={goToTop}>&#8679;</p>
                    </span>
                </div>
                <div className=' h-[3rem] w-full bg-zinc-700 text-center flex justify-center items-center'>
                    <span>
                        <span className='font-bold text-white mr-2'>Powered By</span>
                        <span className='font-bold text-white mr-2'>|</span>
                        <span className='text-white font-thin'><a href='#'>Privacy Policy</a></span>
                        <span className='text-white font-bold ml-2'>|</span>
                        <span className='text-white font-thin ml-2'><a href='#'>Faqs</a></span>
                    </span>
                </div>
            </footer>
        </>
    );
}
export default Footer;