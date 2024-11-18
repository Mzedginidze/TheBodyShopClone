import React from "react";
import { Await, useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories";

const Body = () => {
  const neededCategories = ["shower gels", "body moisturisers", "body butters"];
  const categories = useLoaderData();
  const name = "body";
  return (
    <div className="p-3">
      <section className="d-flex flex-wrap mb-5 justify-content-between">
        <div
          style={{ width: "45%" }}
          className="d-flex flex-column justify-content-center"
        >
          <h3>Shop bath & body</h3>
          <p>
            Our hard-working body always deserves some TLC and a luxurious soak.
            Our body products love your boobs, tum, pegs and buns in equal
            measure. So enjoy a guilt-free nose at our invigorating body washes
            and scrubs, and legendary Body Butters – Mango Body Butter was the
            original, and has a bit of a special place in our hearts. Got time
            for a longer body care session? Help bring balance to your mind and
            body with our new Wellness range, designed to help you recharge,
            reconnect and re-energise. We love our Almond Milk Body Yogurt to
            leave skin feeling softer and soothed. Instead of fresh rose petals
            in your bath – a bit messy, to be honest – there’s always the
            British Rose body care range to leave you smelling like a bouquet.
            Your skin will slurp it up and your body will say, ahhh, thank you.
          </p>
        </div>
        <img
          className="w-50"
          src="https://media.thebodyshop.com/i/thebodyshop/01-2022-Q3-BODYCARE-WHICH-BODY-MOISTURISER-200pc-DT?$amplience-ct13-lg-img1$&fmt=auto"
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

export default Body;
