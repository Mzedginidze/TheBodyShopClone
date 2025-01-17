import React, { useContext, useState } from "react";
import { AuthToken } from "../../context/AuthToken";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: null,
    salePrice: null,
    image: "",
    category_name: "",
  });

  const [imageFile, setImageFile] = useState(null);

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

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const base64 = await convertToBase64(file);
      setForm((prevForm) => ({
        ...prevForm,
        image: base64.replace(/^data:image\/[a-zA-Z]+;base64,/, ""),
      }));
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const { token } = useContext(AuthToken);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const json = await response.json();
      console.log(form);
      if (json.id) {
        alert("Product added successfully");
        window.location.reload();
      } else {
        alert(json.message[0].message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <form
        className="d-flex flex-wrap gap-3 justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 input">
          <label htmlFor="title" className="form-label">
            Title: *
          </label>
          <input
            className="form-control"
            id="title"
            onChange={handleChange}
            name="title"
            required
          />
        </div>
        <div className="mb-3 input">
          <label htmlFor="description" className="form-label">
            Description: *
          </label>
          <input
            className="form-control"
            id="description"
            onChange={handleChange}
            name="description"
            required
          />
        </div>
        <div className="mb-3 input">
          <label htmlFor="price" className="form-label">
            Price: *
          </label>
          <input
            className="form-control"
            type="number"
            id="price"
            onChange={handleChange}
            name="price"
            required
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
            onChange={handleChange}
            name="salePrice"
            placeholder="null"
          />
        </div>
        <div className="mb-3 input">
          <label htmlFor="image" className="form-label">
            Image: *
          </label>
          <input
            className="form-control"
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-3 input">
          <label htmlFor="category" className="form-label">
            Choose a category: *
          </label>
          <select
            name="category_name"
            id="category"
            className="form-select"
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="bestsellers">Bestsellers</option>
            <option value="new">New</option>
            <option value="top rated">Top Rated</option>
            <option value="view all face">View All Face</option>
            <option value="subscribe & save">Subscribe & Save</option>
            <option value="moisturisers">Moisturisers</option>
            <option value="cleansers & toners">Cleansers & Toners</option>
            <option value="face masks">Face Masks</option>
            <option value="serums & essences">Serums & Essences</option>
            <option value="skincare with spf">Skincare with SPF</option>
            <option value="shower gels">Shower Gels</option>
            <option value="body moisturisers">Body Moisturisers</option>
            <option value="body butters">Body Butters</option>
            <option value="shampoo">Shampoo</option>
            <option value="conditioner">Conditioner</option>
            <option value="hair styling">Hair Styling</option>
          </select>
        </div>
        <button className="btn editButton col-4" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
