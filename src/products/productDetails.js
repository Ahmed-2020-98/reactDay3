import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import axiosInstance from './../axiosConfig/instance';
const ProductDetails = (props) => {
  // console.log(props);
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    
      axiosInstance.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=321f5f7965876840c44581c47fe37a22`)
      .then((res) => {
        // console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* details {props.match.params.id} */}
      {/* details {params.id} */}

      <h1>{product.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${product.backdrop_path}`} />
    </div>
  );
};

export default ProductDetails;
