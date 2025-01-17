import React, { useContext } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { AuthToken } from "../../context/AuthToken";
import { IsOpenSuccess } from "../../context/IsOpenSuccess";
import IfSuccessful from "../../components/IfSuccessful";

const Favorite = () => {
  const favorite = useLoaderData();

  const { token } = useContext(AuthToken);

  const navigate = useNavigate();

  const remove = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/liked-products/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      if (json.created_at) window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  const addToCart = async (id, item, itemId) => {
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
      if (json.id) {
        remove(itemId);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  if (!favorite) {
    navigate("/login");
    window.scrollTo(0, 0);
    return;
  }
  return (
    <>
      <h1 className="text-center my-4">Welcome to your wish list</h1>
      <React.Suspense
        fallback={
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <Await resolve={favorite.data}>
          {(resolvedData) => {
            if (resolvedData.length === 0) {
              return (
                <div className="d-flex align-items-center justify-content-center">
                  <div className="d-flex flex-column align-items-center gap-3 mt-2">
                    <h3 className="mb-0">Your Wish List is Empty</h3>

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
              <section className="d-flex gap-3 flex-wrap p-3">
                {resolvedData.map((item, index) => (
                  <article
                    className="mb-5 d-flex flex-column flex-wrap gap-3 "
                    style={{ width: "23%" }}
                    key={index}
                  >
                    <img
                      src={item.likedProduct.image}
                      alt={item.likedProduct.title}
                      className="mb-3 w-100"
                      style={{ height: "auto" }}
                    ></img>
                    <h6 className="mb-0">{item.likedProduct.title}</h6>

                    {item.likedProduct.salePrice && (
                      <span
                        className="fw-bold"
                        style={{ color: "red", fontSize: "18px" }}
                      >
                        £{item.likedProduct.salePrice}{" "}
                        <span
                          style={{
                            color: "var(--oliveGreen)",
                            textDecoration: "line-through",
                          }}
                        >
                          {" "}
                          £{item.likedProduct.price}
                        </span>
                      </span>
                    )}

                    {!item.likedProduct.salePrice && (
                      <span className="fw-bold" style={{ fontSize: "18px" }}>
                        £{item.likedProduct.price}
                      </span>
                    )}
                    <div className="d-flex justify-content-between mt-auto">
                      <button
                        className="col-9 btn editButton"
                        onClick={() =>
                          addToCart(
                            item.likedProduct.id,
                            item.likedProduct,
                            item.id
                          )
                        }
                      >
                        Add to bag
                      </button>
                      <button className="heart" onClick={() => remove(item.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="var(--oliveGreen)"
                          width="30px"
                          height="30px"
                          viewBox="0 0 32 32"
                          version="1.1"
                        >
                          <title>remove</title>
                          <path d="M11.188 4.781c6.188 0 11.219 5.031 11.219 11.219s-5.031 11.188-11.219 11.188-11.188-5-11.188-11.188 5-11.219 11.188-11.219zM11.25 17.625l3.563 3.594c0.438 0.438 1.156 0.438 1.594 0 0.406-0.406 0.406-1.125 0-1.563l-3.563-3.594 3.563-3.594c0.406-0.438 0.406-1.156 0-1.563-0.438-0.438-1.156-0.438-1.594 0l-3.563 3.594-3.563-3.594c-0.438-0.438-1.156-0.438-1.594 0-0.406 0.406-0.406 1.125 0 1.563l3.563 3.594-3.563 3.594c-0.406 0.438-0.406 1.156 0 1.563 0.438 0.438 1.156 0.438 1.594 0z" />
                        </svg>
                      </button>
                    </div>
                  </article>
                ))}
              </section>
            );
          }}
        </Await>
      </React.Suspense>
    </>
  );
};

export default Favorite;
