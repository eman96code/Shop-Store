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
            <h1 class="card-title">{productDetails.category} </h1>
            <h5 class="card-title">{productDetails.title} </h5>
            <p class="card-description">{productDetails.description} </p>
            <p class="card-price">price:{productDetails.price} </p>
        </div>
    </div>
    </>
  );
};
export default Details;
