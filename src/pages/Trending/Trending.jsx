import React from "react";
import { Await, useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories";

const Trending = () => {
  const neededCategories = [
    "bestsellers",
    "new",
    "top rated",
    "subscribe & save",
  ];
  const name = "trending";
  const categories = useLoaderData();
  return (
    <div className="p-3">
      <section className="d-flex flex-wrap mb-5 justify-content-between">
        <div
          style={{ width: "45%" }}
          className="d-flex flex-column justify-content-center"
        >
          <h3>Trending and new beauty products</h3>
          <p>
            Personally, there’s no one we trust more than our community of The
            Body Shop geeks and lovers to recommend to you their most-loved,
            go-to products. Want to know what’s hot? Discover this season’s top
            treats and must-haves, from new season makeup trends to the latest
            skincare craze. We pick out buzz-worthy ingredients and launch new
            skincare, body care and haircare ranges to make sure we’re bringing
            you the best in the business. With our edit of new and trending
            beauty products, you’ll have everything you need to update your
            shelf. So slather, smooth and scrub away. You’ve got this.
          </p>
        </div>
        <img
          className="w-50"
          src="https://media.thebodyshop.com/i/thebodyshop/2023-CT13_PLP_Camomile_c00080?$amplience-ct13-lg-img1$&fmt=auto"
        ></img>
      </section>
      <React.Suspense
        fallback={
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <Await resolve={categories.data}>
          {(resolvedData) => (
            <Categories
              name={name}
              neededCategories={neededCategories}
              resolvedData={resolvedData}
            />
          )}
        </Await>
      </React.Suspense>
    </div>
  );
};

export default Trending;
