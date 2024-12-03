import Filter from "../../components/Filter";
import { useLoaderData } from "react-router-dom";
import React from "react";
import { Await } from "react-router-dom";

const New = () => {
  const New = useLoaderData();

  const category = "new";

  return (
    <div className="p-3">
      <section className="d-flex flex-wrap mb-5 justify-content-between">
        <div
          style={{ width: "45%" }}
          className="d-flex flex-column justify-content-center"
        >
          <h3>New</h3>
          <p>
            Bestsellers like our Hemp Hand Protector, Coconut Body Butter and
            Ginger Anti-Dandruff Shampoo have been flying off our shelves and
            into your homes faster than you can say... bestseller. From products
            for your hands, skin, lips and hair, you’ll find our most popular
            beauty must-haves right here. Some of our best products are
            bestsellers for a reason – don’t just take our word for it! Check
            out our customer reviews and ratings too.
          </p>
        </div>
        <img
          className="w-50"
          style={{ height: "19rem", objectFit: "cover" }}
          src="https://media.thebodyshop.com/i/thebodyshop/1097369_BODY_BUTTER_COCONUT_200ML_PLP?$amplience-ct13-lg-img1$&fmt=auto"
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
        <Await resolve={New.data}>
          {(resolvedData) => (
            <Filter resolvedData={resolvedData} category={category} />
          )}
        </Await>
      </React.Suspense>
    </div>
  );
};

export default New;
