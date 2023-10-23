import { useState,useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import './Details.css';

const Details = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});


  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        console.log(res);
        setProductDetails(res.data); 
        console.log(res.data); 
      } catch (error) {
        console.error(error);
      }
    };

    getProductDetails();
  }, [params.id]);
  return (
    <>
      <div class="container d-flex align-items-center">
        <img src={productDetails.image} alt="" className="card-image"/>
        <div class="card-content">
            <h2 class="card-title">{productDetails.category} </h2>
            <p class="card-description">{productDetails.description} </p>
            <p class="card-price">price:{productDetails.price} </p>
            {/* <p class="card-rating">Rating: {productDetails.rating} </p> */}
        </div>
    </div>
    </>
  );
};
export default Details;
