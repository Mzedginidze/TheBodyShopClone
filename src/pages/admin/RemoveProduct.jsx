import React, { useContext, useState } from "react";
import { AuthToken } from "../../context/AuthToken";

const RemoveProduct = () => {
  const { token } = useContext(AuthToken);

  const [form, setForm] = useState({
    ids: [""],
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setForm({ ids: [value] });
  };

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/product", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const json = await response.json();
      if (json.message === "Products deleted successfully.") {
        setStatus("Product removed successfully.");
        setForm({ ids: [""] });
      } else {
        setStatus(`Error: ${json.message}`);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <form
        className="w-50 d-flex flex-column align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 input w-100">
          <label htmlFor="id" className="form-label">
            Enter ID of product: *
          </label>
          <input
            className="form-control"
            id="id"
            onChange={handleChange}
            name="ids"
            required
          />
        </div>
        <button className="btn editButton col-4" type="submit">
          Remove Product
        </button>
        {status && (
          <div
            className={`mt-3 ${
              status.startsWith("Error") ? "text-danger" : "text-success"
            }`}
          >
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default RemoveProduct;
