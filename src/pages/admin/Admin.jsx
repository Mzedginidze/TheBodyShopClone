import React from "react";
import { Outlet, Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="d-flex flex-wrap admin">
      <div
        className="col-3 d-flex flex-column p-5 gap-4"
        style={{ background: "var(--oliveGreen)", color: "white" }}
      >
        <Link to="/adminPanel">
          <div className="d-flex flex-column align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.0"
              id="Layer_1"
              width="30px"
              height="30px"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="var(--yellowGreen)"
                  d="M33,27.102V17c0-0.552-0.448-1-1-1s-1,0.448-1,1v10.102C31.323,27.035,31.657,27,32,27   S32.677,27.035,33,27.102z"
                />
                <path
                  fill="var(--yellowGreen)"
                  d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32s32-14.355,32-32S49.645,0,32,0z M32,37c-2.757,0-5-2.243-5-5   c0-1.629,0.795-3.064,2.004-3.979L29,28.008V17c0-1.654,1.346-3,3-3s3,1.346,3,3v11l-0.004,0.021C36.205,28.936,37,30.371,37,32   C37,34.757,34.757,37,32,37z M55.722,46.851l-6.035-3.484c-0.479-0.277-0.643-0.888-0.366-1.366s0.887-0.643,1.366-0.366   l4.301,2.483c0.745-1.405,1.361-2.888,1.842-4.429l-1.906-0.511c-0.529-0.143-0.85-0.69-0.707-1.225   c0.146-0.536,0.689-0.848,1.225-0.707l1.902,0.51c0.351-1.538,0.563-3.127,0.626-4.756H53c-0.553,0-1-0.447-1-1s0.447-1,1-1h4.975   c-0.062-1.629-0.275-3.218-0.625-4.758l-1.909,0.512c-0.533,0.144-1.082-0.174-1.225-0.707c-0.144-0.534,0.174-1.081,0.707-1.225   l1.916-0.513c-0.479-1.544-1.103-3.023-1.847-4.43l-4.304,2.484c-0.48,0.277-1.092,0.113-1.368-0.365   c-0.275-0.477-0.113-1.089,0.364-1.365l4.304-2.483c-0.857-1.357-1.835-2.63-2.922-3.803l-1.39,1.389   c-0.391,0.391-1.023,0.391-1.414,0c-0.392-0.391-0.391-1.023,0-1.414l1.39-1.389c-1.172-1.087-2.445-2.064-3.803-2.922l-2.482,4.3   c-0.277,0.48-0.889,0.644-1.367,0.367c-0.478-0.275-0.643-0.887-0.367-1.364l2.488-4.307c-1.407-0.744-2.888-1.367-4.432-1.847   l-0.513,1.915c-0.143,0.534-0.691,0.851-1.225,0.707c-0.535-0.143-0.85-0.69-0.707-1.225l0.512-1.908   C36.218,6.301,34.628,6.087,33,6.025v4.973c0,0.555-0.447,1.001-1,1.002c-0.552-0.001-1-0.447-1-0.999l0.001-4.976   c-1.629,0.062-3.22,0.275-4.759,0.625l0.511,1.908c0.144,0.534-0.174,1.082-0.707,1.225c-0.535,0.145-1.08-0.173-1.225-0.707   l-0.513-1.914c-1.543,0.479-3.022,1.102-4.429,1.846l2.485,4.304c0.277,0.48,0.113,1.091-0.365,1.368   c-0.479,0.274-1.089,0.112-1.365-0.366l-2.483-4.303c-1.357,0.858-2.632,1.836-3.805,2.923l1.389,1.389   c0.391,0.391,0.391,1.024,0,1.414c-0.392,0.393-1.021,0.391-1.414,0l-1.389-1.389c-1.086,1.173-2.063,2.445-2.921,3.803   l4.301,2.482c0.48,0.277,0.644,0.888,0.367,1.367c-0.277,0.478-0.887,0.642-1.365,0.365l-4.307-2.486   c-0.744,1.407-1.367,2.887-1.847,4.431l1.914,0.513c0.533,0.144,0.851,0.692,0.707,1.225c-0.143,0.537-0.689,0.85-1.225,0.707   L6.65,26.243c-0.35,1.538-0.562,3.128-0.625,4.756h4.974C11.554,30.999,12,31.446,12,32c-0.001,0.552-0.446,0.999-1,0.999H6.031   c0.062,1.629,0.275,3.218,0.626,4.756l1.9-0.509c0.533-0.143,1.082,0.174,1.225,0.707c0.145,0.537-0.172,1.08-0.707,1.225   l-1.904,0.51c0.48,1.542,1.097,3.023,1.841,4.429v0.001l4.301-2.483c0.48-0.277,1.091-0.113,1.367,0.366   c0.275,0.479,0.113,1.089-0.366,1.364L8.278,46.85c-0.354-0.564-0.687-1.144-1.001-1.733C5.19,41.201,4,36.738,4,32   C4,16.561,16.561,4,32,4s28,12.561,28,28c0,4.739-1.19,9.202-3.278,13.118C56.407,45.708,56.076,46.287,55.722,46.851z"
                />
                <path
                  fill="var(--yellowGreen)"
                  d="M32,29c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S33.654,29,32,29z M32,33c-0.553,0-1-0.447-1-1   s0.447-1,1-1s1,0.447,1,1S32.553,33,32,33z"
                />
              </g>
            </svg>
            <span>Dashboard</span>
          </div>
        </Link>
        <Link to="/adminPanel/products">
          <div className="d-flex flex-column align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 16 16"
              id="meteor-icon-kit__solid-products-s"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 5H14C15.1046 5 16 5.89543 16 7V14C16 15.1046 15.1046 16 14 16H7C5.89543 16 5 15.1046 5 14V7C5 5.89543 5.89543 5 7 5zM3 11H2C0.89543 11 0 10.1046 0 9V2C0 0.89543 0.89543 0 2 0H9C10.1046 0 11 0.89543 11 2V3H7C4.79086 3 3 4.79086 3 7V11z"
                fill="var(--yellowGreen)"
              />
            </svg>
            <span>Products</span>
          </div>
        </Link>
        <Link to="/adminPanel/addProduct">
          <div className="d-flex flex-column align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                fill="var(--yellowGreen)"
              />
            </svg>
            <span>Add Product</span>
          </div>
        </Link>
        <Link to="/adminPanel/removeProduct">
          <div className="d-flex flex-column align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="var(--yellowGreen)"
                d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
              />
            </svg>
            <span>Remove Product</span>
          </div>
        </Link>
      </div>
      <div className="col-9 p-3 my-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
