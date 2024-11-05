import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="position-relative">
        <img
          style={{ maxWidth: "100%" }}
          alt="picture of couple of body shop products"
          src="https://media.thebodyshop.com/i/thebodyshop/24Q4_UK_TRADE_BRIEF_20OFF_HP_CT1-DESKTOP_ANTIDANDRUFF_IMAGE?$amplience-ct1-lg-img1$&fmt=auto"
        ></img>
        <div className="position-absolute top-50 start-0 translate-middle-y p-lg-5 p-3">
          <h1 className="mainText">
            20% OFF (ALMOST)<br></br> EVERYTHING*
          </h1>
          <p style={{ fontSize: "1.25vw", color: "white" }}>
            With our 3-step Ginger routine for hair that looks
            <br></br>
            thicker, fuller and denser.*
          </p>
          <Link>
            <button className="btn py-2 ShopNow">Shop Now</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
