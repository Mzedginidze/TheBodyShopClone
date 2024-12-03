import React, { useContext } from "react";
import { useLoaderData, Await } from "react-router-dom";
import { IsOpen } from "../../context/IsOpen";
import EditPersonalInfo from "../../components/EditPersonalInfo";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const profile = useLoaderData();
  const { isOpen, setIsOpen } = useContext(IsOpen);
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center my-3">Welcome</h1>
      <section className="d-flex flex-wrap gap-4 p-3">
        <React.Suspense
          fallback={
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <Await resolve={profile.data1}>
            {(resolvedData) => (
              <div className="w-25 border border-success rounded p-3">
                <h3 className="text-center border-bottom border-3">
                  Personal info
                </h3>
                <ul>
                  <li>fisrt name: {resolvedData.first_name}</li>
                  <li>last name: {resolvedData.last_name}</li>
                  <li>email: {resolvedData.email}</li>
                  <li>phone number: {resolvedData.phone_number}</li>
                </ul>
                <div className="w-100 d-flex justify-content-center">
                  <button
                    className="btn col-8 editButton"
                    onClick={() => setIsOpen(true)}
                  >
                    Edit
                  </button>
                </div>
                {isOpen && <EditPersonalInfo profile={resolvedData} />}
              </div>
            )}
          </Await>
        </React.Suspense>
        <React.Suspense
          fallback={
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <Await resolve={profile.data2}>
            {(resolvedData) => {
              const sumOfPrice = () => {
                let amount = 0;
                resolvedData.map((item) => (amount += item.totalPrice));
                return amount;
              };
              const sumOfItems = () => {
                let amount = 0;
                resolvedData.map((item) => (amount += item.totalItems));
                return amount;
              };
              return (
                <div className="w-25 border border-success rounded p-3">
                  <h3 className="text-center border-bottom border-3">
                    Purchase History
                  </h3>
                  <ul>
                    <li>Total items: {sumOfPrice()}</li>
                    <li>Total amount: {sumOfItems()}</li>
                  </ul>
                </div>
              );
            }}
          </Await>
        </React.Suspense>
        <div className="d-flex flex-column w-25 gap-3">
          <button
            className="btn editButton col-12"
            onClick={() => navigate("/cart")}
          >
            View Cart
          </button>
          <button
            className="btn editButton col-12"
            onClick={() => navigate("/")}
          >
            View Favoorites
          </button>
          <button
            className="btn editButton col-12"
            onClick={() => navigate("/")}
          >
            Log Out
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
