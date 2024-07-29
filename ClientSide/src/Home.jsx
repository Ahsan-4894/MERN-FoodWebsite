import banner from './banner.PNG'
import logo from './logo.PNG'
import bodyImage from './body.PNG'
import fastfood from './fast-food.png'
import fastfood2 from './fast-food2.png'
import fastfood3 from './fast-food3.png'
import fastfood4 from './fast-food4.png'
import fastfood5 from './fast-food5.png'
import fastfood6 from './fast-food6.png'
import locationGif from './icons.gif'
const Home = ()=>{
    return (
        <>  
            <div>
                <img src={banner} alt="Loading" />
            </div>
            {/* header section from here */}
            <header className='-mt-[3.99rem] h-screen bg-stone-100'>
                <div className='flex flex-row justify-around mt-16 '>
                    <div className=' h-[6rem] w-[25rem] flex flex-row  items-center justify-around'>
                        <img src={locationGif} className='absolute left-[8.5rem] h-[2.9rem]' />
                        <button className='border border-white pl-2 font-bold h-[3rem] rounded-r-full w-[13rem] text-white bg-red-600 '>
                            Change Location<br/>
                            xyz
                        </button>
                        <span className='text-lg font-bold'>
                            021-111-666-111
                        </span>
                    </div>


                    <div className=' h-40 w-[20rem] shadow-lg shadow-neutral-400'>
                        <img src={logo} alt="Loading"  className='w-full h-full'/>
                    </div>



                    <div className=' h-32 w-[25rem] flex flex-row justify-between items-center'>
                        <button className='bg-red-600 text-md rounded-full font-bold hover:scale-110 transition duration-300 ease-in-out text-white w-[12rem] h-[2rem]'>Submit Your Complain</button>
                        <div className='text-2xl hover:cursor-pointer'>&#128722;</div>
                        
                        <div className='text-3xl text-red-500 hover:cursor-pointer'>&#9776;</div>
                    </div>


                </div>

                
                <div className='pl-16 pr-16 h-80 mt-16 w-full'>
                    <img src={bodyImage}  alt="Loading" className='w-full h-80 rounded-3xl'/>
                </div>  

                <div>
                    <nav className='h-[15rem] flex flex-row justify-evenly mt-6'>
                        <div className=' flex flex-col items-center hover:animate-ping hover:text-red-600 '>
                            <div className='mt-3 h-[5rem] w-[5rem] bg-red-600 absolute rounded-full z-0'></div>
                            <img src={fastfood} alt=" Loading" className='h-[5rem] w-[5rem] z-10 hover:cursor-pointer'/>
                            <span className='mt-3 font-bold  z-10'>Burgers And Deals</span>
                        </div>

                        <div className=' flex flex-col items-center hover:animate-ping hover:text-red-600 '>
                            <div className='mt-3 h-[5rem] w-[5rem] bg-red-600 absolute rounded-full z-0'></div>
                            <img src={fastfood2} alt=" Loading" className='h-[5rem] w-[5rem] z-10 hover:cursor-pointer'/>
                            <span className='mt-3 font-bold  z-10'>Exclusive Deals</span>
                        </div>

                        <div className=' flex flex-col items-center hover:animate-ping hover:text-red-600 '>
                            <div className='mt-3 h-[5rem] w-[5rem] bg-red-600 absolute rounded-full z-0'></div>
                            <img src={fastfood3} alt=" Loading" className='h-[5rem] w-[5rem] z-10 hover:cursor-pointer'/>
                            <span className='mt-3 font-bold  z-10'>Wing It!</span>
                        </div>

                        <div className=' flex flex-col items-center hover:animate-ping hover:text-red-600 '>
                            <div className='mt-3 h-[5rem] w-[5rem] bg-red-600 absolute rounded-full z-0'></div>
                            <img src={fastfood4} alt=" Loading" className='h-[5rem] w-[5rem] z-10 hover:cursor-pointer'/>
                            <span className='mt-3 font-bold  z-10'>Exclusive Family Deals</span>
                        </div>

                        <div className=' flex flex-col items-center hover:animate-ping hover:text-red-600 '>
                            <div className='mt-3 h-[5rem] w-[5rem] bg-red-600 absolute rounded-full z-0'></div>
                            <img src={fastfood5} alt=" Loading" className='h-[5rem] w-[5rem] z-10 hover:cursor-pointer'/>
                            <span className='mt-3 font-bold  z-10'>Snacks</span>
                        </div>
                        
                        <div className=' flex flex-col items-center hover:animate-ping hover:text-red-600 ease-in-out'>
                            <div className='mt-3 h-[5rem] w-[5rem] bg-red-600 absolute rounded-full z-0'></div>
                            <img src={fastfood6} alt=" Loading" className='h-[5rem] w-[5rem] z-10 hover:cursor-pointer'/>
                            <span className='mt-3 font-bold  z-10 '>Beverages</span>
                        </div>
                    </nav>
                </div>

                {/* search bar */}
                <div className=' h-[5rem] w-full -mt-12 flex justify-center'>
                    <div className='h-[3rem] w-[45rem]'>
                        <input className='border border-red-600   h-full w-full rounded-full text-red-400 pl-6 text-xl' value='Search the Item'/>
                    </div>
                    <div className='font-semibold rounded-full w-[4.9rem] h-[3rem] text-center text-white bg-red-600 pt-2 relative -left-20'>
                        <button >
                            Search
                        </button>
                    </div>
                </div>
             {/* header section goes here */}
            </header>
        </>
    );
}
export default Home;