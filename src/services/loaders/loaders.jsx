import { defer, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const loadCategories = async () => {
  try {
    const response = await fetch("http://localhost:3000/product-category");
    const categories = response.json();
    return defer({ data: categories });
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const loadProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/product?pageSize=100");
    const products = await response.json();
    return defer({ data: products });
  } catch (err) {
    console.log(err);
    return null;
  }
};

const currentUser = async () => {
  const data = localStorage.getItem("access_token");
  const token = JSON.parse(data).value;

  try {
    const response = await fetch("http://localhost:3000/user/current-user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const profile = await response.json();
    return profile;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const purchases = async () => {
  const data = localStorage.getItem("access_token");
  const token = JSON.parse(data).value;

  try {
    const response = await fetch("http://localhost:3000/purchases", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const purchase = await response.json();
    return purchase;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const combinedLoader = async () => {
  return defer({
    data1: currentUser(),
    data2: purchases(),
  });
};

export const loadCart = async () => {
  const data = localStorage.getItem("access_token");

  let token = "";

  if (data) {
    token = JSON.parse(data).value;
  }
  if (!token) {
    <Navigate to="/login" />;
  }

  try {
    const response = await fetch("http://localhost:3000/cart?pageSize=100", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const cart = await response.json();
    return defer({ data: cart });
  } catch (err) {
    console.err(err.message);
    return null;
  }
};
