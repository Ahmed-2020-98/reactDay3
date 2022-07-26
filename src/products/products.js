import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import axiosInstance from "./../axiosConfig/instance";
import "./products.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("movie/popular")
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
      {/* {products.map((product) => {
          return (
            <Link to={`/details/${product.id}`} key={product.id}>
               <h1 className="n">{product.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500/${product.backdrop_path}`} />
            </Link>
          );
        })} */}
      <div className="container">
        <div className="cart my-5">
          {products.map((product) => {
            return (
              <>
                <div className="item">
                  <img src={`https://image.tmdb.org/t/p/w500/${product.backdrop_path}`}/>
                  <p>{product.title}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
