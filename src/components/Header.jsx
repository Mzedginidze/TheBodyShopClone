import { Link } from "react-router-dom";

const Header = () => {
  window.onscroll = () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.style.top = "-56px"; // Hide when scrolling down
    } else {
      header.style.top = "0px"; // Show when at the top
    }
  };

  return (
    <header className="p-3 d-flex flex-column gap-4 header postition-relative">
      <div className="d-flex flex-wrap justify-content-between gap-lg-0 gap-3">
        <button
          className="d-flex justify-content-between py-1"
          style={{
            all: "unset",
            borderBottom: "2px solid #004236",
            minWidth: "16.25rem",
          }}
        >
          <span style={{ color: "#004236" }}>SEARCH</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 928 1024"
            style={{ width: "25px", height: "25px" }}
          >
            <path
              className="lines"
              d="M660.704 778.848c-65.952 44.576-147.232 71.168-234.72 71.168h-.64.032C190.848 850.016.704 659.904.704 425.344S190.816.672 425.376.672c234.528 0 424.672 190.112 424.672 424.672v.512c0 123.52-52.864 234.688-137.216 312.096l-.32.288 206.464 206.496-46.208 46.176-212.064-212.064zm-235.36 5.824c198.464 0 359.328-160.896 359.328-359.328S623.776 66.016 425.344 66.016c-198.464 0-359.328 160.896-359.328 359.328s160.896 359.328 359.328 359.328z"
            ></path>
          </svg>
        </button>
        <Link to="/">
          <img
            src="https://thebodyshop.a.bigcontent.io/v1/static/tbs-logo-text"
            style={{ maxWidth: "9.375rem" }}
            alt="The Body Shop"
          ></img>
        </Link>
        <nav className="d-flex gap-4">
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 896 1024"
              style={{ width: "24px", height: "24px" }}
              fill="none"
              stroke="#004236"
              strokeWidth="50"
            >
              <path d="M461.312 1001.728l-13.216 7.264-13.312-7.2c-3.424-1.824-9.568-5.344-18.016-10.464-69.632-43.008-130.016-90.592-184.448-144.224l.128.128C105.216 721.408 28.256 576.512 28.256 414.464 28.224 188.448 216.384 5.536 448 5.536c231.68 0 419.808 182.912 419.808 408.928 0 161.12-76.928 305.824-204.256 431.968A1043.619 1043.619 0 01483.68 988.64l-4.352 2.56c-8.448 5.12-14.56 8.672-18.016 10.528zM448 569.248c87.328 0 158.464-69.12 158.464-154.784 0-85.728-71.136-154.88-158.464-154.88s-158.464 69.152-158.464 154.88c0 85.664 71.136 154.784 158.464 154.784z" />
            </svg>
          </Link>
          <Link to="login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 918 1024"
              style={{ width: "24px", height: "24px" }}
              fill="none"
              stroke="#004236"
              strokeWidth="50"
            >
              <path d="M436.544 561.248C195.808 561.248 0 738.592 0 956.544v26.72h873.024v-26.72c0-217.984-195.776-395.296-436.48-395.296zM437.76 489.728c135.264 0 244.864-109.6 244.864-244.864S573.024 0 437.76 0 192.896 109.6 192.896 244.864s109.6 244.864 244.864 244.864z"></path>
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              style={{ width: "24px", height: "24px" }}
              fill="none"
              stroke="#004236"
              strokeWidth="50"
            >
              <path d="M494.208 910.88a5.076 5.076 0 01-2.368-.576c-111.264-57.696-212.672-131.616-301.376-219.616-48.736-48.448-83.296-91.36-108.8-135.04-33.536-57.344-50.496-112.832-50.496-164.96 0-70.208 23.2-135.424 65.28-183.552 45.056-51.616 109.312-83.168 176.32-86.592 4.192-.224 8.32-.32 12.48-.32 41.888 0 83.2 10.848 119.456 31.392 25.248 14.24 48.224 34.816 68.288 61.088l21.248 27.744 21.248-27.744c20.064-26.272 42.976-46.784 68.192-61.024 36.32-20.576 77.792-31.424 119.808-31.424 4.064 0 8.096.128 12.192.32 67.008 3.424 131.264 35.008 176.256 86.592 42.112 48.224 65.312 113.408 65.312 183.552 0 52.192-16.96 107.712-50.432 164.992-25.6 43.712-60.192 86.624-108.896 135.04-88.736 88.032-190.112 161.92-301.28 219.584l-2.4.576z"></path>
            </svg>
          </Link>
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1312 1024"
              style={{ width: "32px", height: "32px" }}
              fill="none"
              stroke="#004236"
              strokeWidth="50"
            >
              <path d="M389.792 164L358.4.672H31.072v65.28H304.48l119.2 621.472h716.704l.16-.736h1.152l66.08-245.152 74.752-272.736h-1.28l1.28-4.768H389.76zm629.44 849.344c67.68 0 122.496-53.504 122.496-119.52s-54.816-119.52-122.464-119.52c-67.68 0-122.528 53.504-122.528 119.456 0 66.048 54.88 119.552 122.496 119.552zm-465.504 0c67.68 0 122.496-53.504 122.496-119.52s-54.816-119.52-122.464-119.52c-67.712 0-122.528 53.504-122.528 119.456 0 66.048 54.816 119.552 122.496 119.552z"></path>
            </svg>
          </Link>
        </nav>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        <nav>
          <ul className="d-flex flex-wrap mainNav">
            <li className="nav-item">
              <Link to="/trending" className="py-2 category">
                TRENDING
              </Link>
              <div className="dropdown px-3 py-5">
                <div>
                  <span>Shop trending</span>
                  <ul>
                    <li>
                      <Link to="trending/bestsellers">Bestsellers</Link>
                    </li>
                    <li>
                      <Link to="trending/new">new</Link>
                    </li>
                    <li>
                      <Link to="trending/top-rated">Top rated</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Virtual beauty services</span>
                  <ul>
                    <li>
                      <Link to="trending/subscribe-&-save">
                        Subscribe & Save
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/face" className="py-2 category">
                FACE
              </Link>
              <div className="dropdown px-3 py-5">
                <div>
                  <span>Shop trending</span>
                  <ul>
                    <li>
                      <Link to="face/view-all-face">View All Face</Link>
                    </li>
                    <li>
                      <Link to="face/moisturisers">Moisturisers</Link>
                    </li>
                    <li>
                      <Link to="face/cleansers-&-toners">
                        Cleansers & Toners
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Virtual beauty services</span>
                  <ul>
                    <li>
                      <Link to="face/face-masks">Face Masks</Link>
                    </li>
                    <li>
                      <Link to="face/serums-&-essences">Serums & Essences</Link>
                    </li>
                    <li>
                      <Link to="face/skincare-with-SPF">Skincare With SPF</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/body" className="py-2 category">
                BODY
              </Link>
              <div className="dropdown px-3 py-5">
                <div>
                  <span>Shop trending</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Virtual beauty services</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Refer a friend</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/hair" className="py-2 category">
                HAIR
              </Link>
              <div className="dropdown px-3 py-5">
                <div>
                  <span>Shop trending</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Virtual beauty services</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Refer a friend</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* <li className="nav-item">
              <Link className="py-2 category">MAKEUP</Link>
              <div className="dropdown px-3 py-5">
                <div>
                  <span>Shop trending</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Virtual beauty services</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Refer a friend</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <Link className="py-2 category">FRAGRANCE</Link>
              <div className="dropdown px-3 py-5">
                <div>
                  <span>Shop trending</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Virtual beauty services</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Refer a friend</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <Link className="py-2 category">CHRISTMAS GIFTS</Link>
              <div className="dropdown px-3 py-5">
                <div>
                  <span>Shop trending</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Virtual beauty services</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Refer a friend</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <Link className="py-2 category">RANGE</Link>
              <div className="dropdown px-3 py-5">
                <div>
                  <span>Shop trending</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Virtual beauty services</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Refer a friend</span>
                  <ul>
                    <li>
                      <a href="#">Product 1 and so on</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li> */}
            <li className="nav-item">
              <Link to="allproduct" className="py-2 category">
                ALL PRODUCT
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="d-flex flex-wrap gap-4 infoNav">
          <Link to="/profile">PROFILE</Link>
          <Link>TIPS & ADVICE</Link>
          <Link>ABOUT US</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
