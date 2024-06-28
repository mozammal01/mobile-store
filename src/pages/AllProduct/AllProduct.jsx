import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

const AllProduct = () => {

  const [products , setProducts] =  useState([])


  // const allProduct = useLoaderData()

  useEffect(() => {
    fetch('http://localhost:4000/mobiles')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }, [])

  return (
    <>
      <div className="mt-20">
        <h2 className="text-3xl text-center font-semibold">All Products {products.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-7xl justify-evenly mx-auto gap-10">
          {
            products?.map(product =>
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