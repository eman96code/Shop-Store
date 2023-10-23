import { useState, useEffect } from 'react';
import axios from 'axios';
import './Shop.css';
import { Link } from 'react-router-dom';
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts((prev) => [...prev, ...res.data]);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  // const getProducts=()=>{
  //   return
  // }
  return (
    <>
      <h2>Products</h2>
      <div className="products d-flex container flex-wrap justify-content-between">
        {products.map((product) => {
          return (
            <div className="product-item card col-2">
              <img src={product.image} alt="" className="card-img-top" />
              <div className="card-body">
                <div className="category card-title">{product.category}</div>
                <div className="description card-text">
                  {product.description}
                </div>
                <div className="price card-text">Price: {product.price}</div>
                <div className="rate card-text">Rating: {product.rating.rate}</div>
                <Link to={`/Shop/${product.id}`} className='btn btn-primary'>More Details</Link>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
};
export default Shop;
