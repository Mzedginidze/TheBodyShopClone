import { defer } from "react-router-dom";

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
  let token = "";
  if (data) {
    token = JSON.parse(data).value;
  }

  if (!token) {
    return null;
  }

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
  let token = "";
  if (data) {
    token = JSON.parse(data).value;
  }

  if (!token) {
    return null;
  }
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
  const data = localStorage.getItem("access_token");
  let token = "";
  if (data) {
    token = JSON.parse(data).value;
  }

  if (!token) {
    return null;
  }
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
    return null;
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

export const loadFavorites = async () => {
  const data = localStorage.getItem("access_token");
  let token = "";
  if (data) {
    token = JSON.parse(data).value;
  }

  if (!token) {
    return null;
  }

  try {
    const response = await fetch("http://localhost:3000/liked-products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const favorite = await response.json();
    return defer({ data: favorite });
  } catch (err) {
    console.err(err.message);
    return null;
  }
};
