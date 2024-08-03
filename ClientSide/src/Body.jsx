import axios from 'axios'
import { useEffect, useState} from 'react';
import burger_and_deals from './buger-and-deals.png'
import wing_it_pic from './wing-it.png'
import exclusive_deal_pic from './exclusive-deals.png'
import exclusive_fam_deal_pic from './exclusive-family-deals.png'
import snacks_pic from './snacks.png'
import bev_pic from './beverages-pic.png'
import DisplayAnItem from './displayAnItem.jsx'
import Cart from './Cart.jsx';


const Body = ()=>{
    const [flag, setFlag] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const [toShowCart, setToShowCart] = useState(false);
    const [toShowCartItems, setToShowCartItems] = useState(false);

    const [cart, setCart] = useState([]); 
    const [count, setCount] = useState(1);

    const [selectedData, setSelectedData] = useState({});
    const [bur_and_deals, setBurAndDeals] = useState([]);
    const [bev, setBev] = useState([]);
    const [wing, setWing] = useState([]);
    const [excDeals, setexcDeals] = useState([]);
    const [famExcDeals, setfamExcDeals] = useState([]);
    const [snacks, setSnacks] = useState([]);
    
    const fetchData = async()=>{
        const items = await axios.get("http://localhost:8000/web/list-all-items");
        const data = items.data.Message;
        setAllSections(data);
        console.log(data);
    }
    useEffect(()=>{
        fetchData();
    }, [1]);
    
    const setAllSections = (data)=>{
        setBev(data[0].items_of_this_type);
        setBurAndDeals(data[1].items_of_this_type);
        setWing(data[2].items_of_this_type);
        setexcDeals(data[3].items_of_this_type);
        setfamExcDeals(data[4].items_of_this_type);
        setSnacks(data[5].items_of_this_type);
        setFlag(true);
    }
    // const imagePath = (imageName)=>{
    //     return require(`D:/Projects/MERN-FoodWebsite/frontend/src/${imageName}`);
    // }
    const showAnItem = (item_data)=>{
        setFlag2(!flag2);
        setSelectedData(item_data);
        
    }
    const showViewCart = (e)=>{
        let clone_cart_arr = [];
        clone_cart_arr = cart;
        const dummyObj = {...selectedData};
        dummyObj.quantity = count;
        
        clone_cart_arr.push(dummyObj);
        
        //set cond to inc quantity

        setCart(clone_cart_arr);
        setToShowCart(true);
    }
    const showCart = (e)=>{
        setToShowCartItems(true);
    }
    return(
        <>
            {
                flag2 && (
                    <>
                        <DisplayAnItem data={selectedData} />
                        <div className='fixed top-[8%] left-[82%] z-10 text-center bg-red-600 text-white rounded-full hover:bg-red-400 hover:text-red-600 transition duration-300'>
                            <button onClick={showAnItem} className=' h-[2.5rem] w-[2.5rem]'>&#10008;</button>
                        </div>

                        <div className='fixed top-[80%] left-[40%] bg-stone-100 z-10 flex flex-row justify-center items-center text-black  h-[6rem] w-[18rem]'>
                            <button onClick={()=>{(count>1) ? setCount(count-1) : setCount(count)}} className='transition duration-300 hover:scale-110 ease-in-out  w-[3rem] h-[3rem] font-bold text-3xl rounded-2xl bg-stone-200'>
                                &#8722;
                            </button>
                            <span className=' ease-in-out font-bold text-2xl w-[2rem] h-[2rem] text-center'>{count}</span>
                            <button onClick={()=>setCount(count+1)} className='transition duration-300 hover:scale-110 ease-in-out  w-[3rem] h-[3rem] font-bold text-2xl rounded-2xl bg-red text-white bg-red-600'>
                                +
                            </button>
                        </div>
                        <div onClick={showViewCart} className= 'w-[20rem] h-[2rem] fixed top-[86%] left-[60%] z-10 text-center bg-red-600 text-white rounded-full hover:bg-red-400 hover:text-red-600 transition duration-300'>
                            <button>Add To Cart</button>
                        </div>
                    </>
                    
                )
                    
            }
            {
                toShowCart && !flag2/*when that cross button of showAnItem is pressed*/  && 
                        <>
                        <div className={`${(cart.length==0 || toShowCartItems) ? "hidden" : 'visible'}`}>
                            <div onClick={showCart} className={`border border-red-600 rounded-t-full text-center bg-red-600 text-white cursor-pointer w-[16rem] h-[5rem] fixed top-[92%] left-[45%] z-10`}>
                                <div className='text-2xl animate-bounce duration-300 ease-in-out transition'>&#x290A;</div>
                                <h1>View Cart</h1>
                            </div>

                        </div>
                        </>
            }
            {
                toShowCartItems && 
                            (
                                <>
                                    <Cart data={cart}/>
                                    <div className='fixed top-[6%] left-[77%] z-10 text-center bg-red-600 text-white rounded-full hover:bg-red-400 hover:text-red-600 transition duration-300'>
                                        <button onClick={()=>setToShowCartItems(false)} className=' h-[2.5rem] w-[2.5rem]'>&#10008;</button>
                                    </div> 
                                </>
                            )
            }
            <section className={`mt-20 flex flex-col justify-center bg-stone-100 ${((flag2 || toShowCartItems) ? "blur-md":"blur-0")}`}>
                {/* burger and deals */}
                
                <div className='flex flex-col items-center'>   
                    <img src={burger_and_deals} alt="Loading..." className='w-[80rem]'/>
                    <div className='flex flex-row flex-wrap justify-evenly border border-black h-[50rem] w-full '>
                        { 
                        flag ?  
                        (
                            bur_and_deals.map((item, index)=>(              
                                <div key={index} onClick={()=>{showAnItem(item)}} className='cursor-pointer border border-black h-[23rem] w-[22rem] rounded-lg mt-4'>
                                    <div className='border border-green-900 h-[12rem] w-full rounded-lg'>
                                        {/* <img src={imagePath(item.imagePath)} alt='Loading...'/> */}
                                    </div>
                                    <div className='text-left ml-2'>
                                        <h2 className='font-bold text-3xl'>{item.itemName}</h2>
                                        <h3 className='font-semibold mt-4' >{item.itemDescription}</h3>
                                        <h4 className='text-red-500 font-bold text-lg mt-4'>Rs.{item.itemPrice}</h4>
                                    </div>
                                </div>
                            )))
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>
                </div>
                {/* burger and deals ends here */}
                
                {/* Wing it section  */}
                
                <div className='mt-16 flex flex-col items-center'>   
                    <img src={wing_it_pic} alt='Loading...' className=' w-[80rem]'/>
                    <div className='flex flex-row flex-wrap justify-evenly border border-black h-[50rem] w-full '>
                        { 
                        flag ?  
                        (
                            wing.map((item, index)=>(              
                                <div key={index} onClick={()=>{showAnItem(item)}} className='cursor-pointer border border-black h-[23rem] w-[22rem] rounded-lg mt-4'>
                                    <div className='border border-green-900 h-[12rem] w-full rounded-lg'>
                                        {/* <img src={imagePath(item.imagePath)} alt='Loading...'/> */}
                                    </div>
                                    <div className='text-left ml-2'>
                                        <h2 className='font-bold text-3xl'>{item.itemName}</h2>
                                        <h3 className='font-semibold mt-4' >{item.itemDescription}</h3>
                                        <h4 className='text-red-500 font-bold text-lg mt-4'>Rs.{item.itemPrice}</h4>
                                    </div>
                                </div>
                            )))
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>
                </div>

                {/* Wing it section ends here*/}

                {/* Exclusive Deal Section */}
                <div className='mt-16 flex flex-col items-center'>   
                    <img src={exclusive_deal_pic} alt='Loading...' className=' w-[80rem]'/>
                    <div className='flex flex-row flex-wrap justify-evenly border border-black h-[50rem] w-full '>
                        { 
                        flag ?  
                        (
                            excDeals.map((item, index)=>(              
                                <div key={index} onClick={()=>{showAnItem(item)}} className='cursor-pointer border border-black h-[23rem] w-[22rem] rounded-lg mt-4'>
                                    <div className='border border-green-900 h-[12rem] w-full rounded-lg'>
                                        {/* <img src={imagePath(item.imagePath)} alt='Loading...'/> */}
                                    </div>
                                    <div className='text-left ml-2'>
                                        <h2 className='font-bold text-3xl'>{item.itemName}</h2>
                                        <h3 className='font-semibold mt-4' >{item.itemDescription}</h3>
                                        <h4 className='text-red-500 font-bold text-lg mt-4'>Rs.{item.itemPrice}</h4>
                                    </div>
                                </div>
                            )))
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>
                </div>
                {/* Exclusive Deal Section Ends Here*/}
                
                
                {/* Exclusive Family Deal Section*/}
                <div className='mt-16 flex flex-col items-center'>   
                    <img src={exclusive_fam_deal_pic} alt='Loading...' className=' w-[80rem]'/>
                    <div className='flex flex-row flex-wrap justify-evenly border border-black h-[50rem] w-full '>
                        { 
                        flag ?  
                        (
                            famExcDeals.map((item, index)=>(              
                                <div key={index} onClick={()=>{showAnItem(item)}} className='cursor-pointer border border-black h-[25rem] w-[22rem] rounded-lg mt-4'>
                                    <div className='border border-green-900 h-[12rem] w-full rounded-lg'>
                                        {/* <img src={imagePath(item.imagePath)} alt='Loading...'/> */}
                                    </div>
                                    <div className='text-left ml-2'>
                                        <h2 className='font-bold text-3xl'>{item.itemName}</h2>
                                        <h3 className='font-semibold mt-4' >{item.itemDescription}</h3>
                                        <h4 className='text-red-500 font-bold text-lg mt-4'>Rs.{item.itemPrice}</h4>
                                    </div>
                                </div>
                            )))
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>
                </div>

                {/* Exclusive Family Deal Section Ends Here*/}
                
                
                {/* Snacks Section Here*/}
                <div className='mt-16 flex flex-col items-center'>   
                    <img src={snacks_pic} alt='Loading...' className=' w-[80rem]'/>
                    <div className='flex flex-row flex-wrap justify-evenly border border-black h-[50rem] w-full '>
                        { 
                        flag ?  
                        (
                            snacks.map((item, index)=>(              
                                <div key={index} onClick={()=>{showAnItem(item)}} className='cursor-pointer border border-black h-[22rem] w-[22rem] rounded-lg mt-4'>
                                    <div className='border border-green-900 h-[12rem] w-full rounded-lg'>
                                        {/* <img src={imagePath(item.imagePath)} alt='Loading...'/> */}
                                    </div>
                                    <div className='text-left ml-2'>
                                        <h2 className='font-bold text-3xl'>{item.itemName}</h2>
                                        <h3 className='font-semibold mt-4' >{item.itemDescription}</h3>
                                        <h4 className='text-red-500 font-bold text-lg mt-4'>Rs.{item.itemPrice}</h4>
                                    </div>
                                </div>
                            )))
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>
                </div>

                {/* Snacks Section EndsHere*/}
                
                
                {/*Beverages section*/}
                <div className='mt-16 flex flex-col items-center'>   
                    <img src={bev_pic} alt='Loading...' className=' w-[80rem]'/>
                    <div className='flex flex-row flex-wrap justify-evenly border border-black h-[50rem] w-full '>
                        { 
                        flag ?  
                        (
                            bev.map((item, index)=>(              
                                <div key={index} onClick={()=>{showAnItem(item)}} className='cursor-pointer border border-black h-[22rem] w-[22rem] rounded-lg mt-4'>
                                    <div className='border border-green-900 h-[12rem] w-full rounded-lg'>
                                        {/* <img src={imagePath(item.imagePath)} alt='Loading...'/> */}
                                    </div>
                                    <div className='text-left ml-2'>
                                        <h2 className='font-bold text-3xl'>{item.itemName}</h2>
                                        <h3 className='font-semibold mt-4' >{item.itemDescription}</h3>
                                        <h4 className='text-red-500 font-bold text-lg mt-4'>Rs.{item.itemPrice}</h4>
                                    </div>
                                </div>
                            )))
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>
                </div>
        
                {/*Beverages section ends here*/}
            </section>

            <section className={`h-[30rem] flex justify-center bg-stone-100 ${(flag2 ? "blur-md":"blur-0")}`}>
                <div className='mt-20  h-[20rem] w-[50rem] text-left'>
                    <span className="font-medium text-3xl">
                        <span className='text-red-800 text-semibold'>Kababjees Fried Chicken </span>– Redefining the fast-food experience with its exceptional fried chicken
                    </span>
                    <p className='mt-4 text-red-600'>
                    This haven for fried chicken enthusiasts serves up an array of tantalizing options, featuring a menu that boasts the crispiest and most flavorful chicken in the city. At Kababjees Fried Chicken, each dish is a masterpiece, from the classic Crispy Chicken to the ever-popular Crispy Zenga Burger.
                    </p>
                    <p className='mt-4 text-red-600'>
                    Our Kababjees Fried Chicken menu is carefully curated to ensure every bite is a delightful experience. Whether you're craving Crispy Chicken Wings or the best fried chicken in Karachi, our menu is designed to cater to all tastes. What sets us apart is our dedication to quality and flavor, making us a standout choice for fried chicken in Karachi.
                    </p>
                </div>
            </section>
        </>
    );

}
export default Body;