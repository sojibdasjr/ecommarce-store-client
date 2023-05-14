import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduc, setRelatedProduc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  // get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilerProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similer product
  const getSimilerProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProduc(data?.product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container-fluid mt-2">
        <h4>Product Details</h4>
        <div className="col-lg-4">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top border"
            alt={product.name}
          />
        </div>
        <div className="col-lg-8 border">
          <h3>{product.name}</h3>
          <h3 className="text-danger">${product.price}</h3>
          <hr />
          <h3>About Product</h3>
          <p>{product.description}</p>
          <h3>Tag: {product.category?.name}</h3>
          <button className="btn btn-warning my-2 ">
            ADD TO CART <BsFillCartPlusFill className="h4" />{" "}
          </button>
        </div>
      </div>
      <hr />
      <div className="row mt-5 container">
        <h2 className="similer_product">Similer Product</h2>
        {relatedProduc.length < 1 && (
          <p className="text-center">No Similler Products Found 🙄</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProduc?.map((p) => (
            <div
              className="card m-2 dev_cursor"
              style={{ width: "18rem" }}
              key={p._id}
              onClick={() => navigate(`/product/${p.slug}`)}
            >
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.slice(0, 50)}....</p>
                <p className="card-text">$ {p.price}</p>
                <button className="btn btn-secondary ms-1">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
