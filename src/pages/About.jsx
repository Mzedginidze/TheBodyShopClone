import AboutUs from "../assets/About Us.png";
import Woman from "../assets/woman.png";
const About = () => {
  return (
    <div className="about">
      <div
        className="d-flex flex-wrap align-items-center justify-content-center w-100"
        style={{ padding: "10rem 0" }}
      >
        <h1>ABOUT US</h1>
      </div>
      <section className="d-flex flex-wrap">
        <div
          className="col-6"
          style={{
            background: "var(--oliveGreen)",
            color: "white",
            padding: "10rem",
          }}
        >
          <h2>THE STORY OF THE BODY SHOP</h2>
          <p>
            Our story started in 1976. It began with our founder, Anita Roddick,
            opening a little green shop in Brighton with a belief in something
            revolutionary: that business could be a force for good. We’ve never
            been your average cosmetics company, with over 40 years of
            campaigning, change-making and smashing beauty industry standards –
            and we’re still going strong. Welcome to The Body Shop.
          </p>
        </div>
        <div className="col-6">
          <img
            src={AboutUs}
            alt="first body shop building photo"
            className="object-fit-cover h-100 w-100"
          ></img>
        </div>
      </section>
      <div className="d-flex flex-column align-items-center pb-5 pt-4">
        <h2>A short history of The Body Shop</h2>
        <p>
          First store opened in Brighton - <strong>1976</strong>
        </p>
        <p>
          Publicly listed on the London Stock Exchange - <strong>1984</strong>
        </p>
        <p>
          Acquired by L’Oreal - <strong>2006</strong>
        </p>
        <p>
          Joined the Natura family - <strong>2017</strong>
        </p>
        <p>
          Sold to Aurelius Private Equity - <strong>2023</strong>
        </p>
        <p>
          Acquired by a consortium led by Auréa Group - <strong>2024</strong>
        </p>
      </div>
      <section className="d-flex flex-wrap">
        <div className="col-6">
          <img
            src={Woman}
            alt="first body shop building photo"
            className="object-fit-cover h-100 w-100"
          ></img>
        </div>
        <div
          className="col-6"
          style={{
            background: "var(--oliveGreen)",
            color: "white",
            padding: "10rem",
          }}
        >
          <h2>DISCOVER OUR PURPOSE</h2>
          <p>
            The Body Shop exists to fight for a fairer, more beautiful world.
            This is our purpose, and it drives everything we do. Our beliefs are
            everything to us: that business is a force for good, the empowerment
            of women and girls and the belief that everyone is beautiful. Read
            our brand manifesto and discover how our purpose and beliefs are
            truly at the heart of everything we do.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
