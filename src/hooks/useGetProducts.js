// import { useEffect,useState } from "react";
// import { axios } from "axios";

// const useGetProducts = () => {
//   const [prodData, setProdData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const res = await axios.get("https://fakestoreapi.com/products");
//         setProdData((prev) => [...prev, ...res.data]);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         setError("error from server");
//       }
//     };
//     loadProducts();
//   }, []);

//   const deleteRequest = async (id) => {
//     setLoading(true);
//     try {
//       await axios.delete(`https://fakestoreapi.com/products/${id}`);
//       const remainData = prodData.filter((user) => user.id !== id);
//       setProdData(remainData);
//     } catch (error) {
//       setError("error from server");
//     }
//     setLoading(false);
//   };

//   return [loading, error, prodData, deleteRequest];
// };

// export default useGetProducts;
