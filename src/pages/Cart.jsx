import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

    const {cart} = useSelector((state) => state); //initially getting empty array from cart slice
    const [totalAmount , setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
        //reduce function to add price of cart items in accumulater initislized with 0
    }, [cart]) //will execute after each changes in cart array


    return (
        
        <div>
            {
                cart.length > 0 ?
                (<div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">

                    <div className="lg:w-[70%]">
                    {
                        cart.map((item , index) => {
                            return <CartItem key={item.id} itemIndex={index} item={item}/>
                        })
                    }
                    </div>

                    <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">
                        <div className="mt-20">
                            <div className="text-xl text-[#166534] font-[600]">YOUR CART</div>
                            <div className="text-5xl font-[600] text-[#15803d] mb-4">SUMMARY</div>
                            <p className="font-[600] text-xl text-slate-700">
                                <span className="font-normal">Total Items: {cart.length}</span>
                            </p>
                        </div>

                        <div className="mb-20">
                            <p className="text-slate-700 text-xl font-[600] mb-5 ">Total Amount: 
                            <span className="text-red-900 text-slate-700 text-xl font-[600] mb-5"> ₹{totalAmount}</span></p>
                            <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
          border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in">
                                CHECKOUT NOW
                            </button>
                        </div>
                    </div>

                </div>) :
                (
                    <div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
                    <h1 className="font-[600] text-xl">Cart is Empty</h1>
                    <Link to={"/"}>
                        <button className="bg-[#16a34a] text-white text-md  font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
                            SHOP NOW
                        </button>
                    </Link>
                    </div>
                )
            }
        </div>
    );
}

export default Cart;