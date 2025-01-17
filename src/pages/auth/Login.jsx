import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthToken } from "../../context/AuthToken";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [answer, setAnswer] = React.useState("");

  const { setToken } = useContext(AuthToken);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmite = async (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(data);
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });
      const json = await response.json();
      const now = new Date();
      const item = {
        value: json.access_token,
        expiry: now.getTime() + 60 * 60 * 1000,
      };
      if (json.statusCode === 404) {
        setAnswer(json.message);
        throw new Error(`Response status: ${response.status}`);
      }
      if (json.statusCode === 401) {
        setAnswer("wrong password");
        throw new Error(`Response status: ${response.status}`);
      }
      if (json.access_token) {
        localStorage.setItem("access_token", JSON.stringify(item));
        setToken(json.access_token);
        navigate("/profile");
        window.scrollTo(0, 0);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <section
      style={{ background: "#e5e5e5" }}
      className="d-flex align-items-center justify-content-center p-5"
    >
      <div
        className="d-flex p-5 gap-3 align-items-center"
        style={{ background: "white", width: "60%" }}
      >
        <div className="col-6">
          <h1 className="mb-4">Login</h1>
          <h2 className="mb-4">Existing customer</h2>
          <span>* Required</span>
          <form onSubmit={handleSubmite}>
            <div className="mb-4 mt-2">
              <input
                type="email"
                name="email"
                className="login py-3 "
                required
                placeholder="Email Adress *"
                onChange={handleChange}
              />
            </div>
            <div className={`${answer ? "mb-1" : "mb-5"} position-relative`}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="login py-3"
                required
                placeholder="password *"
                onChange={handleChange}
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#555",
                }}
              >
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>
            <p style={{ color: "red" }}>{answer}</p>
            <button type="submit" className="col-12 signin">
              Sign In
            </button>
          </form>
        </div>
        <div className="col-6">
          <h2 className="mt-5">Create an account</h2>
          <ul className="mt-4">
            <li>
              Become a loyalty member to earn points and get exclusive offers
              and rewards
            </li>
            <li>
              Get access to our subscription service and save on selected
              products
            </li>
            <li>Manage and track your orders in one place</li>
          </ul>
          <button
            className="col-12 signin mt-5"
            onClick={() => navigate("/login/register")}
          >
            Register with your email
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
