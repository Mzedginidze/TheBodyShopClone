import React, { useContext, useEffect, useState } from "react";
import { Await, useLoaderData, Link } from "react-router-dom";
import EditProduct from "../../components/EditProduct";
import { EditingProduct } from "../../context/EditingProduct";

const Products = () => {
  const products = useLoaderData();

  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([]);

  const [displayedData, setDisplayedData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const [activeProduct, setActiveProduct] = useState(null);

  const { editingProduct, setEditingProduct } = useContext(EditingProduct);

  useEffect(() => {
    const updatePagination = () => {
      setTotalPages(Math.ceil(data.length / 20));
      setDisplayedData(
        data.slice(
          (currentPage - 1) * 20,
          Math.min(currentPage * 20, data.length)
        )
      );
    };
    updatePagination();
  }, [data, currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <h1 className="text-center mb-4">Products</h1>
      <section>
        <React.Suspense
          fallback={
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <Await resolve={products.data}>
            {(resolvedData) => {
              React.useEffect(() => {
                setData(resolvedData.products);
              }, [resolvedData]);
              return (
                <div className="d-flex flex-wrap gap-4">
                  {displayedData.map((item) => (
                    <article
                      className="mb-5 d-flex flex-column flex-wrap justify-content-between gap-3"
                      style={{ width: "23%" }}
                      key={item.id}
                    >
                      <button
                        style={{ all: "unset" }}
                        onClick={() => setActiveProduct(item.id)}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="mb-3 w-100"
                          style={{ height: "auto" }}
                        ></img>
                      </button>
                      <h6 className="mb-0">{item.title}</h6>
                      {item.salePrice && (
                        <span
                          className="fw-bold"
                          style={{ color: "red", fontSize: "18px" }}
                        >
                          £{item.salePrice}{" "}
                          <span
                            style={{
                              color: "var(--oliveGreen)",
                              textDecoration: "line-through",
                            }}
                          >
                            {" "}
                            £{item.price}
                          </span>
                        </span>
                      )}

                      {!item.salePrice && (
                        <span className="fw-bold" style={{ fontSize: "18px" }}>
                          £{item.price}
                        </span>
                      )}
                      <button
                        className="btn editButton mt-auto"
                        onClick={() => setEditingProduct(item.id)}
                      >
                        Edit
                      </button>
                      {editingProduct === item.id && (
                        <EditProduct item={item} />
                      )}
                      <div
                        className={
                          activeProduct === item.id
                            ? "d-flex flex-column align-items-center position-fixed top-50 start-50 translate-middle p-4"
                            : "d-none"
                        }
                        style={{
                          background: "var(--oliveGreen)",
                          color: "white",
                        }}
                      >
                        <h3>id: {item.id}</h3>
                        <button
                          className="btn"
                          style={{ background: "var(--yellowGreen)" }}
                          onClick={() => setActiveProduct(null)}
                        >
                          Close
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              );
            }}
          </Await>
        </React.Suspense>
      </section>
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
            <li className="page-item" key={i + 1}>
              <button
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

export default Products;
