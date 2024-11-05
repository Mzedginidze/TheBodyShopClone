import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-4 my-5 p-5 footer">
      {/* <section className="d-flex justify-content-center">
        <div className="d-flex flex-column gap-2" style={{ width: "33%" }}>
          <label style={{ fontWeight: "500" }} htmlFor="email">
            Subscribe to newsletter
          </label>
          <div className="d-flex gap-2">
            <input
              type="email"
              placeholder="Your Email Address"
              className="col-8 px-3 py-2"
              id="email"
            />
            <button className="btn col-4 sub">Subscribe</button>
          </div>
        </div>
      </section> */}
      <section className="d-flex gap-3 mb-5">
        <article className="d-flex flex-column gap-2">
          <span style={{ fontWeight: "500" }} className="mb-4">
            USEFUL INFORMATION
          </span>
          <Link>Help & FAQs</Link>
          <Link>Terms & Conditions</Link>
          <Link>Money-Back Guarantee</Link>
          <Link>Privacy Notice</Link>
          <Link>Cookies</Link>
          <Link>Sitemap</Link>
        </article>
        <article className="d-flex flex-column gap-2">
          <span style={{ fontWeight: "500" }} className="mb-4">
            WAYS TO SHOP
          </span>
          <Link>Help & FAQs</Link>
          <Link>Terms & Conditions</Link>
          <Link>Privacy Notice</Link>
          <Link>Cookies</Link>
        </article>
        <article className="d-flex flex-column gap-2">
          <span style={{ fontWeight: "500" }} className="mb-4">
            ABOUT US
          </span>
          <Link>Help & FAQs</Link>
          <Link>Terms & Conditions</Link>
          <Link>Privacy Notice</Link>
          <Link>Cookies</Link>
        </article>
        <article className="d-flex flex-column gap-2">
          <span style={{ fontWeight: "500" }} className="mb-4">
            JOIN US
          </span>
          <Link>Discover Our Club</Link>
        </article>
      </section>
      <section className="d-flex justify-content-between mb-5">
        <Link to="/">
          <img
            src="https://thebodyshop.a.bigcontent.io/v1/static/tbs-logo-text"
            style={{ maxWidth: "9.375rem" }}
            alt="The Body Shop"
          ></img>
        </Link>
        <nav>
          <ul className="d-flex gap-4 me-5">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                style={{ width: "22px", height: "22px" }}
                fill="#004236"
              >
                <path d="M307.84 6.048c52.16-2.4 68.8-2.976 201.568-2.976s149.44.576 201.568 2.976c52.032 2.4 87.584 10.784 118.688 23.008 32.16 12.64 59.424 29.568 86.592 57.12s43.904 55.136 56.384 87.712c12.096 31.488 20.352 67.488 22.72 120.192 2.368 52.8 2.944 69.664 2.944 204.128s-.576 151.328-2.944 204.128c-2.368 52.704-10.624 88.704-22.72 120.192-12.48 32.544-29.216 60.16-56.384 87.712s-54.432 44.448-86.592 57.12c-31.104 12.224-66.624 20.608-118.688 23.008-52.16 2.4-68.8 2.976-201.568 2.976s-149.44-.576-201.568-2.976c-52.032-2.4-87.584-10.784-118.688-23.008-32.16-12.64-59.424-29.568-86.592-57.12s-43.904-55.136-56.384-87.712C34.08 791.04 25.824 755.04 23.456 702.336c-2.368-52.8-2.944-69.664-2.944-204.128s.576-151.328 2.944-204.128c2.368-52.704 10.624-88.704 22.72-120.192 12.48-32.544 29.216-60.16 56.384-87.68s54.432-44.448 86.592-57.12C220.256 16.832 255.776 8.48 307.84 6.08zm-49.472 492.128c0 140.416 112.416 254.24 251.072 254.24s251.072-113.824 251.072-254.24-112.416-254.24-251.072-254.24-251.072 113.824-251.072 254.24zm88.096 0c0-91.136 72.96-165.024 162.976-165.024s162.976 73.888 162.976 165.024S599.456 663.2 509.44 663.2s-162.976-73.888-162.976-165.024zM770.4 293.312c32.416 0 58.656-26.592 58.656-59.424s-26.272-59.424-58.656-59.424c-32.416 0-58.656 26.592-58.656 59.424s26.272 59.424 58.656 59.424z"></path>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                style={{ width: "22px", height: "22px" }}
                fill="#004236"
              >
                <path d="M398.464 994.304V515.68h-104.8V350.72h104.8v-98.976c0-134.56 59.136-214.624 227.232-214.624h139.936v164.992h-87.456c-65.44 0-69.792 23.04-69.792 66.048l-.256 82.56h158.464l-18.56 164.96H608.096v478.624H398.528z"></path>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34 34"
                style={{ width: "22px", height: "22px" }}
                fill="#004236"
              >
                <path d="M16.707 0.027c1.747-0.027 3.48-0.013 5.213-0.027 0.107 2.040 0.84 4.12 2.333 5.56 1.493 1.48 3.6 2.16 5.653 2.387v5.373c-1.92-0.067-3.853-0.467-5.6-1.293-0.76-0.347-1.467-0.787-2.16-1.24-0.013 3.893 0.013 7.787-0.027 11.667-0.107 1.867-0.72 3.72-1.8 5.253-1.747 2.56-4.773 4.227-7.88 4.28-1.907 0.107-3.813-0.413-5.44-1.373-2.693-1.587-4.587-4.493-4.867-7.613-0.027-0.667-0.040-1.333-0.013-1.987 0.24-2.533 1.493-4.96 3.44-6.613 2.213-1.92 5.307-2.84 8.2-2.293 0.027 1.973-0.053 3.947-0.053 5.92-1.32-0.427-2.867-0.307-4.027 0.493-0.84 0.547-1.48 1.387-1.813 2.333-0.28 0.68-0.2 1.427-0.187 2.147 0.32 2.187 2.427 4.027 4.667 3.827 1.493-0.013 2.92-0.88 3.693-2.147 0.253-0.44 0.533-0.893 0.547-1.413 0.133-2.387 0.080-4.76 0.093-7.147 0.013-5.373-0.013-10.733 0.027-16.093z"></path>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                style={{ width: "22px", height: "22px" }}
                fill="#004236"
              >
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                style={{ width: "22px", height: "22px" }}
                fill="#004236"
              >
                <path d="M192 396.544c0 82.752 31.424 156.352 98.752 183.808 11.04 4.48 20.928.16 24.128-12.064 2.24-8.448 7.52-29.76 9.824-38.624 3.232-12.064 2.016-16.288-6.912-26.784-19.392-22.88-31.84-52.48-31.84-94.4 0-121.536 91.168-230.4 237.44-230.4C652.864 178.08 724 257.056 724 362.464c0 138.72-61.536 255.808-152.864 255.808-50.464 0-88.224-41.632-76.096-92.672 14.464-60.96 42.56-126.72 42.56-170.72 0-39.36-21.216-72.224-65.024-72.224-51.552 0-93.024 53.216-93.024 124.48 0 45.44 15.392 76.16 15.392 76.16l-62.016 262.176c-18.4 77.792-2.752 173.184-1.44 182.784.768 5.728 8.128 7.104 11.456 2.784 4.768-6.208 66.144-81.856 87.072-157.44 5.888-21.408 33.888-132.224 33.888-132.224 16.768 31.872 65.728 59.936 117.76 59.936 155.04 0 260.16-140.992 260.16-329.696C841.824 228.896 720.704 96 536.576 96 307.52 96 192 259.872 192 396.544z"></path>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                style={{ width: "22px", height: "22px" }}
                fill="#004236"
              >
                <path d="M832 128H192C86.4 128 0 214.4 0 320v384c0 105.6 86.4 192 192 192h640c105.6 0 192-86.4 192-192V320c0-105.6-86.4-192-192-192zM384 768V256l320 256-320 256z"></path>
              </svg>
            </li>
          </ul>
        </nav>
      </section>
      <p>© 2024 The Body Shop Copy</p>
      <p>
        Registered office: Watersmead, Littlehampton, West Sussex, BN17 6LS,
        United Kingdom; registered in England no. 15859787
      </p>
    </div>
  );
};

export default Footer;
