import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthToken } from "../context/AuthToken";
import { useNavigate } from "react-router-dom";
import { IsOpenSuccess } from "../context/IsOpenSuccess";
import IfSuccessful from "./IfSuccessful";

const ListedProducts = ({ data }) => {
  const { token } = useContext(AuthToken);

  const { isOpenSuccess, setIsOpenSuccess, setSelectedItem } =
    useContext(IsOpenSuccess);

  const navigate = useNavigate();

  const addToCart = async (id, item) => {
    if (!token) {
      navigate("/login");
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
      if (json.id) {
        console.log("Item added to cart successfully");
        setSelectedItem(item);
        setIsOpenSuccess(true);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <section className="d-flex flex-wrap gap-4 w-100">
      {data.map((item, index) => (
        <Link
          // to={`/${name}/${item.name.replace(/\s+/g, "-").toLowerCase()}`}
          style={{ width: "23%" }}
          key={index}
        >
          <article
            className="mb-5 d-flex flex-column flex-wrap gap-3 "
            style={{ height: "95%" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="mb-3 w-100"
              style={{ height: "auto" }}
            ></img>
            <h6 className="mb-0">{item.title}</h6>

            {item.salePrice && (
              <span
                className="fw-bold"
                style={{ color: "red", fontSize: "18px" }}
              >
                £{item.salePrice}{" "}
                <span
                  style={{
                    color: "var(--oliveGreen)",
                    textDecoration: "line-through",
                  }}
                >
                  {" "}
                  £{item.price}
                </span>
              </span>
            )}

            {!item.salePrice && (
              <span className="fw-bold" style={{ fontSize: "18px" }}>
                £{item.price}
              </span>
            )}
            <div className="d-flex justify-content-between mt-auto">
              <button
                className="col-9 btn editButton"
                onClick={() => addToCart(item.id, item)}
              >
                Add to bag
              </button>
              <button className="heart">
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
          </article>
        </Link>
      ))}
      {isOpenSuccess && <IfSuccessful />}
    </section>
  );
};

export default ListedProducts;
