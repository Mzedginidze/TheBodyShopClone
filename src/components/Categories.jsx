import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ resolvedData, neededCategories }) => {
  const filterdData = resolvedData.filter((category) =>
    neededCategories.find((item) => item === category.name)
  );

  return (
    <section className="d-flex flex-wrap justify-content-between">
      {filterdData.map((item) => (
        <Link style={{ width: "32%" }}>
          <article className="categories mb-5">
            <img src={item.image} alt={item.name} className="mb-3"></img>
            <h5>{item.name.toUpperCase()}</h5>
            <p>
              Introducing our most wanted, most loved beauty products for your
              hands, skin, lips and hair – they’re bestsellers for a reason.
            </p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default Categories;
