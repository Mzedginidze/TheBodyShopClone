import React from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = useLoaderData();

  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    window.scrollTo(0, 0);
    return;
  }
  return (
    <>
      <React.Suspense
        fallback={
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <Await resolve={user.data1}>
          {(resolvedData) => (
            <div>
              <h1 className="text-center">Hello {resolvedData.first_name}</h1>
            </div>
          )}
        </Await>
      </React.Suspense>
    </>
  );
};

export default Dashboard;
