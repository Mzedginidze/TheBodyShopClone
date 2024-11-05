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
