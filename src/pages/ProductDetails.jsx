import React, { useState, useContext } from "react";
import { Await, useLoaderData, useParams, useNavigate } from "react-router-dom";
import { AuthToken } from "../context/AuthToken";
import { IsOpenSuccess } from "../context/IsOpenSuccess";
import IfSuccessful from "../components/IfSuccessful";

const ProductDetails = () => {
  const { id } = useParams();

  const products = useLoaderData();

  const [product, setProduct] = useState({});

  const { token } = useContext(AuthToken);

  const { isOpenSuccess, setIsOpenSuccess, setSelectedItem } =
    useContext(IsOpenSuccess);

  const navigate = useNavigate();

  const addToCart = async (id, item) => {
    if (!token) {
      navigate("/login");
      window.scrollTo(0, 0);
      return;
    }
    try {
      const name = "product_id";
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ [name]: `${id}` }),
      });
      const json = await response.json();
      if (json.product_id) {
        setSelectedItem(item);
        setIsOpenSuccess(true);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const addToFavorites = async (id) => {
    if (!token) {
      alert("Please register/login to add items in wish list!!!");
      return;
    }

    const favorite = { product_id: id };

    try {
      const response = await fetch("http://localhost:3000/liked-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(favorite),
      });
      const json = await response.json();
      if (json.created_at) {
        alert("Item added to wish list");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <React.Suspense
        fallback={
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <Await resolve={products.data}>
          {(resolvedData) => {
            React.useEffect(() => {
              const neededProduct = resolvedData.products.find(
                (item) => item.id === id
              );
              setProduct(neededProduct);
            }, [[resolvedData]]);
            return (
              <section className="d-flex gap-4 p-3 flex-wrap">
                <div className="col-5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-100"
                  ></img>
                </div>
                <div className="col-6 d-flex flex-column flex-wrap justify-content-center gap-4">
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  {product.salePrice && (
                    <div>
                      <span className="onSale p-2">On Sale</span>
                    </div>
                  )}
                  <h6
                    className="text-center py-2"
                    style={{ background: "#c7e8e7" }}
                  >
                    VEGAN
                  </h6>
                  {product.salePrice && (
                    <h3 className="fw-bold mt-3" style={{ color: "red" }}>
                      £{product.salePrice}{" "}
                      <span
                        style={{
                          color: "var(--oliveGreen)",
                          textDecoration: "line-through",
                        }}
                      >
                        {" "}
                        £{product.price}
                      </span>
                    </h3>
                  )}

                  {!product.salePrice && (
                    <h3 className="fw-bold">£{product.price}</h3>
                  )}
                  <div className="d-flex gap-3">
                    <button
                      className="col-5 editButton py-0 border-0 rounded"
                      onClick={() => addToCart(product.id, product)}
                    >
                      Add to bag
                    </button>
                    <button
                      className="heart"
                      onClick={() => addToFavorites(product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        style={{ width: "24px", height: "24px" }}
                        fill="none"
                        stroke="#004236"
                        strokeWidth="50"
                      >
                        <path d="M494.208 910.88a5.076 5.076 0 01-2.368-.576c-111.264-57.696-212.672-131.616-301.376-219.616-48.736-48.448-83.296-91.36-108.8-135.04-33.536-57.344-50.496-112.832-50.496-164.96 0-70.208 23.2-135.424 65.28-183.552 45.056-51.616 109.312-83.168 176.32-86.592 4.192-.224 8.32-.32 12.48-.32 41.888 0 83.2 10.848 119.456 31.392 25.248 14.24 48.224 34.816 68.288 61.088l21.248 27.744 21.248-27.744c20.064-26.272 42.976-46.784 68.192-61.024 36.32-20.576 77.792-31.424 119.808-31.424 4.064 0 8.096.128 12.192.32 67.008 3.424 131.264 35.008 176.256 86.592 42.112 48.224 65.312 113.408 65.312 183.552 0 52.192-16.96 107.712-50.432 164.992-25.6 43.712-60.192 86.624-108.896 135.04-88.736 88.032-190.112 161.92-301.28 219.584l-2.4.576z"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {isOpenSuccess && <IfSuccessful />}
              </section>
            );
          }}
        </Await>
      </React.Suspense>
    </>
  );
};

export default ProductDetails;
