import { useLoaderData } from "react-router-dom";
import Navber from "../Home/Navber";

const UpdateProduct = () => {

  const loadedMobiles = useLoaderData();

  console.log(loadedMobiles._id);

  // const handleUpdateProduct = () => {

  // }

  return (
    <>
    <Navber></Navber>
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl mt-10">You can add Your Product Here</h2>

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">

        <div>
          {/* Image */}
          <label className="label">
            <span className="label-text text-black font-semibold">Image</span>
          </label>
          <input type="text" name="img" className="input input-bordered w-full text-white font-semibold" placeholder="Type Your Image Link" id="img" />
        </div>

        <div>
          {/* Name */}
          <label className="label">
            <span className="label-text text-black font-semibold">Name</span>
          </label>
          <input type="text" name="name" className="input input-bordered  w-full text-white font-semibold" placeholder="Enter Phone Name" id="name" />
        </div>

        <div>
          {/* Brand Name */}
          <label className="label">
            <span className="label-text text-black font-semibold">Brand Name</span>
          </label>
          <input type="text" name="bName" className="input input-bordered  w-full text-white font-semibold" placeholder="Brand Name" id="bName" />
        </div>

        <div>
          {/* Category */}
          <label className="label">
            <span className="label-text text-black font-semibold">Category</span>
          </label>
          <input type="text" name="category" className="input input-bordered  w-full text-white font-semibold" placeholder="Category" id="category" />
        </div>

        <div>
          {/* Price */}
          <label className="label">
            <span className="label-text text-black font-semibold">Price</span>
          </label>
          <input type="number" name="price" className="input input-bordered  w-full text-white font-semibold" placeholder="Price" id="price" />
        </div>

        <div>
          {/* Rating */}
          <label className="label">
            <span className="label-text text-black font-semibold">Rating</span>
          </label>
          <input type="number" name="rating" className="input input-bordered  w-full text-white font-semibold" placeholder="Rating" id="rating" />

        </div>

        <div className="col-span-2">
          {/* Short Description */}
          <label className="label">
            <span className="label-text text-black font-semibold">Short Description</span>
          </label>
          <input type="text" name="sDescription" className="input input-bordered  w-full text-white font-semibold" placeholder="Short Description" id="sDescription" />
        </div>

        <div className="col-span-2">
          <input className="btn btn-block" type="submit" value="Add Product" />
        </div>

      </form>

    </div>
  </>
  );
};

export default UpdateProduct;