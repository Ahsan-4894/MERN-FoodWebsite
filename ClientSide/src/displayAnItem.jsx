
import { useState } from "react";
const DisplayAnItem = (props)=>{
    const [data, setData] = useState(props.data);
    return(
        <>
            <div className="fixed bg-stone-100  top-[7%] left-[22%] z-10 h-[40rem] w-[60rem] flex flex-row justify-center items-center">
                <div className="-mt-16 rounded-lg border border-red-600 h-[30rem] w-[30rem]">
                    <img src="" alt="" />
                </div>
                
                <div className=" h-[30rem] w-[.5rem] bg-red-600 -mt-16 m-[.1rem]">
                </div>

                <div className="h-[30rem] w-[25rem] pt-8 -mt-16">
                    <h2 className="font-bold text-2xl">{data.itemName}</h2>
                    
                    <span className="inline-block pt-8 font-semibold text-xl">Rs.{data.itemPrice}</span>

                    <p className="pt-8 text-sm">{data.itemDescription}</p>
                    
                    <span className="inline-block mt-8 font-bold text-red-500">Special Instructions Here</span>
                    <textarea className="w-full mt-4 border border-black rounded-sm"></textarea>
                </div>
            </div>
        </> 
    );
}
export default DisplayAnItem;