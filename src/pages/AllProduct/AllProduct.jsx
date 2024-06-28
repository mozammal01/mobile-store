import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Navber from "../Home/Navber";

const AllProduct = () => {

  const allProduct = useLoaderData()

  return (
    <>
    <Navber></Navber>
    <div>
      <h2 className="text-3xl text-center font-semibold">Heres Your all Products </h2>      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-7xl justify-evenly mx-auto gap-10">
        {
          allProduct.map(product => 
            <ProductCard
             key={product._id}
             product={product}
             ></ProductCard>)
        }
      </div>
    </div>
    </>
  );
};

export default AllProduct;