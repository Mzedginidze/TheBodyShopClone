import { useContext } from "react";
import { IsOpenSuccess } from "../context/IsOpenSuccess";
import { useNavigate } from "react-router-dom";
const IfSuccessful = () => {
  const { isOpenSuccess, setIsOpenSuccess, selectedItem } =
    useContext(IsOpenSuccess);

  const navigate = useNavigate();

  const viewBasket = () => {
    navigate("/cart");
    setIsOpenSuccess(false);
  };

  if (!isOpenSuccess || !selectedItem) return null;

  return (
    <section
      className="position-fixed top-50 start-50 translate-middle p-3 bg-white d-flex align-items-center gap-4 shadow rounded"
      style={{ zIndex: 1050 }}
    >
      <img
        src={selectedItem.image}
        alt={selectedItem.title}
        className="col-3 mb-3"
      />
      <div className="d-flex flex-column">
        <h6 className="mb-3">
          {selectedItem.title}{" "}
          <span style={{ color: "red" }}>
            was successfully added to your cart!
          </span>
        </h6>
        {selectedItem.salePrice && (
          <h6 style={{ color: "red" }}>£{selectedItem.salePrice}</h6>
        )}
        {!selectedItem.salePrice && <h6>£{selectedItem.price}</h6>}
        <div>
          <button
            className="btn editButton mt-3"
            onClick={() => setIsOpenSuccess(false)}
          >
            Continue Shopping
          </button>
          <button className="btn cart rounded ms-3 mt-3" onClick={viewBasket}>
            View Basket
          </button>
        </div>
      </div>
    </section>
  );
};

export default IfSuccessful;
