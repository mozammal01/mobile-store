import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { img, name, bName, category, price, rating, sDescription } = product;
  return (
    <div className='text-white mt-10'>
      <div className="card bg-base-100 w-96 shadow-xl min-h-full">
        <img
          className='h-[350px] rounded-t-lg'
          height={400}
          src={img}
          alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{sDescription}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline py-2">{bName}</div>
            <div className="badge badge-outline">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object
};

export default ProductCard;