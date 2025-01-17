import React, { useContext, useState } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { AuthToken } from "../../context/AuthToken";

const Cart = () => {
  const cart = useLoaderData();
  const navigate = useNavigate();

  const [isSuccess, setIsSuccess] = useState(false);

  // const [count, setCount] = useState(1);

  // const handleChange = (e) => {
  //   setCount(e.target.value);
  // };

  const [price, setPrice] = useState(0);
  const [items, setItems] = useState(0);

  const obj = {
    totalPrice: price,
    totalItems: items,
  };

  const { token } = useContext(AuthToken);

  const removeOneItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      if (json.created_at) {
        window.location.reload();
      } else {
        alert("something went wrong!!!");
        window.location.reload();
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleCheckOut = async () => {
    try {
      const response = await fetch("http://localhost:3000/purchases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(obj),
      });
      const json = await response.json();
      if (json.id) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          navigate("/profile");
          window.scrollTo(0, 0);
        }, 2000);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const emptyBag = async () => {
    try {
      const response = await fetch("http://localhost:3000/cart/clear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      if (json[0].created_at) {
        window.location.reload();
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  if (!cart) {
    navigate("/login");
    window.scrollTo(0, 0);
    return;
  }

  return (
    <>
      <div
        style={{
          background: "#004236",
          display: isSuccess ? "flex" : "none",
          zIndex: 1000,
          color: "white",
        }}
        className="position-absolute top-50 start-50 translate-middle flex-column gap-3 align-items-center p-3 rounded success"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="var(--yellowGreen)"
          width="40px"
          height="40px"
          viewBox="-1.7 0 20.4 20.4"
          className="cf-icon-svg"
        >
          <path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z" />
        </svg>
        <h4>Your Order Was Successful !</h4>
      </div>
      <div
        style={{
          filter: isSuccess ? "blur(5px)" : "none",
        }}
      >
        <React.Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <Await resolve={cart.data}>
            {(resolvedData) => {
              React.useEffect(() => {
                const totalPrice = resolvedData.reduce((sum, item) => {
                  const price =
                    item.cartProduct.salePrice || item.cartProduct.price;
                  return sum + item.count * price;
                }, 0);
                setPrice(totalPrice);
              }, [resolvedData]);

              React.useEffect(() => {
                const totalItems = resolvedData.reduce((sum, item) => {
                  const count = item.count;
                  return sum + count;
                }, 0);
                setItems(totalItems);
              }, [resolvedData]);

              if (resolvedData.length === 0) {
                return (
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center gap-3 mt-5">
                      <h3 className="mb-0">Shopping Bag</h3>
                      <span>Yout Shopping Bag is Empty</span>
                      <button
                        className="btn editButton"
                        onClick={() => navigate("/allproduct")}
                      >
                        continue shopping
                      </button>
                    </div>
                  </div>
                );
              }
              return (
                <div className="d-flex gap-5 p-4">
                  <div className="col-8">
                    <div className="d-flex flex-wrap justify-content-between align-items-start">
                      <h4 className="mb-5">
                        Shopping Bag{" "}
                        <span className="fs-6">({items} item)</span>
                      </h4>
                      <button className="btn editButton" onClick={emptyBag}>
                        Empty Shopping Bag
                      </button>
                    </div>
                    {resolvedData.map((item, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center gap-4 cartItem py-3"
                      >
                        <img
                          src={item.cartProduct.image}
                          alt={item.cartProduct.title}
                          style={{ height: "auto" }}
                          className="img-fluid col-2"
                        />
                        <div className="d-flex flex-column gap-2 col-9">
                          <h6>{item.cartProduct.title}</h6>
                          <p>{item.cartProduct.description}</p>
                          {item.cartProduct.salePrice && (
                            <span
                              className="fw-bold"
                              style={{ color: "red", fontSize: "18px" }}
                            >
                              £{item.cartProduct.salePrice}{" "}
                              <span
                                style={{
                                  color: "var(--oliveGreen)",
                                  textDecoration: "line-through",
                                }}
                              >
                                {" "}
                                £{item.cartProduct.price}
                              </span>
                            </span>
                          )}

                          {!item.cartProduct.salePrice && (
                            <span
                              className="fw-bold"
                              style={{ fontSize: "18px" }}
                            >
                              £{item.cartProduct.price}
                            </span>
                          )}
                          {/* <input
                        type="number"
                        value={count}
                        className="count p-2"
                        style={{ width: "4rem" }}
                        step="1"
                        onChange={handleChange}
                      ></input> */}
                          <div className="d-flex justify-content-between">
                            <span>Quantity: {item.count}</span>
                            <button
                              className="btn cart"
                              onClick={() => removeOneItem(item.id)}
                            >
                              remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-3 mt-5">
                    <h4 className="mb-2">Order Summary</h4>
                    <div className="d-flex justify-content-between flex-wrap">
                      <span className="fw-bold">Sub Total:</span>
                      <span>£{price}</span>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap">
                      <span className="fw-bold">Delivery:</span>
                      <span>FREE</span>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap pb-2 total">
                      <span className="fw-bold">Order Total</span>
                      <span>£{price}</span>
                    </div>
                    <button
                      className="btn editButton col-12 mt-3"
                      onClick={handleCheckOut}
                    >
                      Check Out
                    </button>
                  </div>
                </div>
              );
            }}
          </Await>
        </React.Suspense>
      </div>
    </>
  );
};

export default Cart;
