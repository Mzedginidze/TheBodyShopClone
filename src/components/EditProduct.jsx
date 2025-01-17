import React, { useState, useContext } from "react";
import { EditingProduct } from "../context/EditingProduct";
import { AuthToken } from "../context/AuthToken";

const EditProduct = ({ item }) => {
  const [form, setForm] = useState({
    id: item.id,
    price: item.price,
    salePrice: item.salePrice,
    title: item.title,
    description: item.description,
    image: item.image.replace("data:image/png;base64,", ""),
  });

  const { setEditingProduct } = useContext(EditingProduct);

  const { token } = useContext(AuthToken);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]:
        name === "price" || name === "salePrice"
          ? parseFloat(value) || null
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/product", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const json = await response.json();
      if (json.created_at) {
        alert("Product edited successfully!!!");
        setEditingProduct(null);
        window.location.reload();
      } else {
        alert("something went wrong. Please make sure image is base64 type.");
        console.log(json.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div
      className="position-fixed top-50 start-50 translate-middle p-4"
      style={{ width: "80%", background: "var(--yellowGreen)" }}
    >
      <form
        className="d-flex flex-wrap gap-3 align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 input">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            className="form-control"
            id="title"
            value={form.title}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className="mb-3 input">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
            className="form-control"
            id="last_name"
            value={form.description}
            onChange={handleChange}
            name="description"
          />
        </div>
        <div className="mb-3 input">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            className="form-control"
            type="number"
            id="price"
            value={form.price}
            onChange={handleChange}
            name="price"
          />
        </div>
        <div className="mb-3 input">
          <label htmlFor="salePrice" className="form-label">
            Sale Price:
          </label>
          <input
            className="form-control"
            type="number"
            id="salePrice"
            value={form.salePrice}
            onChange={handleChange}
            name="salePrice"
            placeholder="null"
          />
        </div>
        <div className="mb-3 input">
          <label htmlFor="image" className="form-label">
            Image: (base64*)
          </label>
          <input
            className="form-control"
            id="image"
            value={form.image}
            onChange={handleChange}
            name="image"
          />
        </div>

        <div className="w-100 d-flex justify-content-end gap-3">
          <button
            type="submit"
            className="btn py-2 px-4"
            style={{ background: "var(--oliveGreen)", color: "white" }}
          >
            Edit
          </button>
          <button
            className="btn py-2 px-4"
            onClick={() => setEditingProduct(null)}
            style={{ background: "var(--oliveGreen)", color: "white" }}
          >
            Cencel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
