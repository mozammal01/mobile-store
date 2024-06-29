import Swal from "sweetalert2";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

const AllProduct = () => {

  const [products, setProducts] = useState([])



  const handleDelete = _id => {
    fetch(`https://mobile-store-server-sigma.vercel.app/mobiles/${_id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
            .then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            });

          const remaining = products.filter(user => user._id !== _id)
          setProducts(remaining);
        }
      })
  }
  // const allProduct = useLoaderData()

  useEffect(() => {
    fetch('https://mobile-store-server-sigma.vercel.app/mobiles')
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
                handleDelete={handleDelete}
              ></ProductCard>)
          }
        </div>
      </div>
    </>
  );
};

export default AllProduct;