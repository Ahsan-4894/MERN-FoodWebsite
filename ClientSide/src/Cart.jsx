import { useEffect, useState } from "react";

const Cart = (props)=>{
    const [cart_items, setCartItems] = useState(props.data);
    const [sum, setSum] = useState(0);
    let s=0;
    useEffect(()=>{
        cart_items.map((item)=>(
            s+=(item.quantity*item.itemPrice)
        ))
        setSum(s);
    }, [])
    return(
        <>
            <div className="fixed top-[4%] left-[28%]  border-red-700 h-[40rem] w-[50rem] z-10 flex flex-wrap items-end justify-between">

                {/* order items */}
                    <div className="overflow-y-scroll rounded-lg bg-white  h-full w-[27rem] ">
                        {
                            cart_items.map((item, index)=>(
                                <>  
                                    <div key={index} className=" h-[7rem] max-w-full mt-8 flex flex-wrap">
                                        
                                        <div className="h-full w-[13rem]">
                                            {/* img */}
                                        </div>
                                        <div className="h-full w-[12rem]">
                                            <h2>{item.itemName}</h2>
                                            <h3>{item.itemPrice}</h3>
                                            <p>{item.quantity}</p>
                                        </div>

                                    </div>
                                </>
                            ))
                        }
                    </div>
                {/* order items ends here*/}
                <div className="h-[30rem] w-[.5rem] bg-red-600 mb-12"></div>
                {/* bill section */}
                    <div className="rounded-lg h-[35rem] w-[22rem] text-left bg-red-600">
                        <h1 className="font-bold text-center text-white">Billing Section</h1>
                        <h1 className="text-white">Bill:{sum}</h1>
                        <h2 className="text-white">GST:{parseInt(sum*.13)}</h2>
                        <h2 className="text-white">Delievery Charges:100 Rs</h2>
                        <h2 className="text-white">Total:{sum + parseInt(sum*.13) + 100}</h2>
                    </div>
                    <div className= 'w-[17rem] h-[3rem] fixed top-[82%] flex justify-center items-center  left-[60%] z-10 text-center  text-white duration-300 hover:border-t-2 hover:border-b-2 hover:border-white hover:scale-110 transition '>
                        <button>Proceed To Checkout</button>
                    </div>
                {/* bill section ends*/}
            </div>
        </>
    );   
}
export default Cart;