import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import axiosInstance from './../axiosConfig/instance';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    axiosInstance.get("movie/popular")
      .then((res) => {
        console.log(res.data.results);
        setProducts(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });



    //   axios.post("url","data",{})
  }, []);

  return (
    <>
      <ul>
        {products.map((product) => {
          return (
            <Link to={`/details/${product.id}`} key={product.id}>
              <li>{product.title}</li>
              
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
