import Swal from "sweetalert2";
import Navber from "../Home/Navber";

const AddProduct = () => {


  const handleAddProduct = e => {
    e.preventDefault();

    const form = e.target;


    const img = form.img.value;
    const name = form.name.value;
    const bName = form.bName.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const sDescription = form.sDescription.value;

    const product = { img, name, bName, category, price, rating, sDescription }

    console.log(product);

    fetch('https://mobile-store-server-sigma.vercel.app/mobiles', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        // Pop Up
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your product Added Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }

  return (
    <>
      <Navber></Navber>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl mt-10">You can add Your Product Here</h2>

        <form onSubmit={handleAddProduct} className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">

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

export default AddProduct;