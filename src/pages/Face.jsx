import React from "react";
import { Await, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

const Face = () => {
  const neededCategories = [
    "view all face",
    "moisturisers",
    "cleansers & toners",
    "face masks",
    "serums & essences",
    "skincare with spf",
  ];
  const categories = useLoaderData();
  return (
    <div className="p-3">
      <section className="d-flex flex-wrap mb-5 justify-content-between">
        <div
          style={{ width: "45%" }}
          className="d-flex flex-column justify-content-center"
        >
          <h3>Shop face care</h3>
          <p>
            Your face is yours to love for life, so why wouldn’t you treat it to
            our best skincare products? As you might know, we use
            nature-inspired ingredients in our facial products. Get your hands
            on our range of moisturisers, toners, cleansers and exfoliators, and
            put together a morning and evening skincare routine to help you get
            your happiest, healthiest-looking skin. Dealing with dry skin,
            sensitive skin, or skin prone to ‘having a moment’? Our ranges cover
            face care for all skin types, so you can tailor your routine to help
            purify oiliness, nourish and revitalise skin or target blemishes.
            Need help getting started? Shout out to a few of our ultimate,
            most-loved face products – try our tinted Fresh Nude BB Cream, boost
            radiance with our Vitamin C Glow Boosting Moisturiser or wake up to
            smoother, fresher, healthier-looking skin with the Edelweiss Bouncy
            Sleep Mask.
          </p>
        </div>
        <img
          className="w-50"
          src="https://media.thebodyshop.com/i/thebodyshop/1026966_Vitamin_E_Day_Cream_50ml_GOLD_INAEHPS444_CT13?$amplience-ct13-lg-img1$&fmt=auto"
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
              neededCategories={neededCategories}
              resolvedData={resolvedData}
            />
          )}
        </Await>
      </React.Suspense>
    </div>
  );
};

export default Face;
