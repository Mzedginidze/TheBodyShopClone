import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ListedProducts from "./ListedProducts";

const FilterForAll = ({ resolvedData }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState([0, 100]);

  const [filter, setFilter] = useState({
    priceFrom: searchParams.get("priceFrom") || "",
    priceTo: searchParams.get("priceTo") || "",
    sale: searchParams.get("sale") === true,
    product: searchParams.get("product") || "",
    category: searchParams.get("category") || "",
    productsPerPage: Number(searchParams.get("productsPerPage")) || 20,
  });

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const obj = {};
    if (filter.priceFrom) obj.priceFrom = filter.priceFrom;
    if (filter.priceTo) obj.priceTo = filter.priceTo;
    if (filter.sale) obj.sale = filter.sale;
    if (filter.product) obj.product = filter.product;
    if (filter.category) obj.category = filter.category;
    if (filter.productsPerPage) obj.productsPerPage = filter.productsPerPage;

    setSearchParams(obj);
  }, [filter, searchParams]);

  useEffect(() => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      priceFrom: "",
      priceTo: "",
      product: "",
      category: "",
      productsPerPage: 20,
    }));
  }, []);

  const filteredData = resolvedData.products.filter((item) => {
    const containsProduct = item.title
      .toLowerCase()
      .includes(filter.product.trim().toLowerCase());

    const matchesCategory =
      !filter.category ||
      (filter.category && item.category_name === filter.category);

    const matchesSale =
      !filter.sale || (filter.sale && !!item.salePrice === filter.sale);

    const matchesPrice =
      ((!filter.priceFrom ||
        (!item.salePrice && item.price >= filter.priceFrom)) &&
        (!filter.priceTo ||
          (!item.salePrice && item.price <= filter.priceTo))) ||
      ((!filter.priceFrom ||
        (item.salePrice && item.salePrice >= filter.priceFrom)) &&
        (!filter.priceTo ||
          (item.salePrice && item.salePrice <= filter.priceTo)));

    return containsProduct && matchesSale && matchesPrice && matchesCategory;
  });

  const totalPages = Math.ceil(filteredData.length / filter.productsPerPage);

  const displayedData = filteredData.slice(
    (currentPage - 1) * filter.productsPerPage,
    Math.min(currentPage * filter.productsPerPage, filteredData.length)
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const sanitizedValue =
      name === "productsPerPage"
        ? Math.max(12, Math.min(30, Number(value)))
        : value;

    setFilter((preFilter) => ({
      ...preFilter,
      [name]: type === "checkbox" ? checked : sanitizedValue,
    }));
    setCurrentPage(1);
  };
  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
    setFilter((prevFilter) => ({
      ...prevFilter,
      priceFrom: newValue[0],
      priceTo: newValue[1],
    }));
    setCurrentPage(1);
  };
  return (
    <div className="d-flex flex-column flex-wrap align-items-center">
      <form className="d-flex flex-wrap justify-content-between align-items-center my-5 border-top border-success py-4 w-100">
        <div>
          <label htmlFor="product" className="me-2">
            Search by name:
          </label>
          <input id="product" onChange={handleChange} name="product" />
        </div>
        <div
          style={{
            display: "block",
            width: "fit-content",
          }}
        >
          <Typography id="range-slider" gutterBottom>
            Select Price Range:
          </Typography>
          <Slider
            value={value}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
          />
          Your range of Price is between {value[0]} and {value[1]}
        </div>
        <div>
          <label htmlFor="sale" className="me-2">
            On Sale
          </label>
          <input
            id="sale"
            type="checkbox"
            onChange={handleChange}
            name="sale"
          />
        </div>
        <div>
          <label htmlFor="category" className="me-2">
            Choose a category:
          </label>

          <select name="category" id="category" onChange={handleChange}>
            <option value="">all</option>
            <option value="bestsellers">Bestsellers</option>
            <option value="new">New</option>
            <option value="top rated">Top Rated</option>
            <option value="view all face">View All Face</option>
            <option value="subscribe & save">subscribe & save</option>
            <option value="moisturisers">moisturisers</option>
            <option value="cleansers & toners">cleansers & toners</option>
            <option value="face masks">face masks</option>
            <option value="serums & essences">serums & essences</option>
            <option value="skincare with spf">skincare with SPF</option>
            <option value="shower gels">shower gels</option>
            <option value="body moisturisers">body moisturisers</option>
            <option value="body butters">body butters</option>
            <option value="shampoo">shampoo</option>
            <option value="conditioner">conditioner</option>
            <option value="hair styling">hair styling</option>
          </select>
        </div>
        <div>
          <label htmlFor="products-per-page" className="me-2">
            Products per page:
          </label>
          <input
            id="products-per-page"
            name="productsPerPage"
            type="number"
            min={12}
            max={30}
            onChange={handleChange}
          />
        </div>
      </form>
      <ListedProducts data={displayedData} />

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              aria-label="Previous"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li className="page-item">
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`${currentPage === i + 1 ? "active" : ""} page-link`}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="page-link"
              aria-label="Next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FilterForAll;
