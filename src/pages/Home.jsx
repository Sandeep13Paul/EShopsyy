import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);

    async function fetchProductData()
    {
        setLoading(true);
        try
        {
                const res = await fetch(API_URL);
                const data = await res.json();

                setPosts(data); //setting data of api in posts array
        }
        catch(error)
        {
            console.log("Error Caught Successfully");
            setPosts([]);
        }
        setLoading(false);
    } 

    useEffect(() => {
        fetchProductData();
    }, []) //for first render

    return (
        <div>
            {
                loading ? <Spinner/> : 
                posts.length > 0 ?
                (
                    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
                    gap-y-8 max-w-6xl p-6 mx-auto my-7">
                        {
                            posts.map((post) => (
                                <Product key={post.id} post={post}/>
                            ))
                        }
                    </div>
                ) : 
                <div className="flex justify-center items-center">
                    <p>No Data Found</p>
                </div>
            }
        </div>
    );
}

export default Home;