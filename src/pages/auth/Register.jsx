import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthToken } from "../../context/AuthToken";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [answer, setAnswer] = React.useState("");

  const { setToken } = React.useContext(AuthToken);

  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.phone_number.length != 9) {
      alert("Phone number must be 9 digits!!!");
      return;
    }
    if (!form.email.includes(".")) {
      alert("Invalid email adress!!!");
      return;
    }
    const jsonData = JSON.stringify(form);
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
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
      if (response.status === 400) {
        setAnswer("User already exists or invalid data");
      } else if (response.ok && json.access_token) {
        setToken(json.access_token);
        localStorage.setItem("access_token", JSON.stringify(item));
        navigate("/profile");
      } else {
        setAnswer("Something went wrong");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ background: "#e5e5e5" }}
    >
      <form className="w-50 p-5 bg-white m-5" onSubmit={handleSubmit}>
        <h1 className="text-center">Register</h1>
        <div className="my-3">
          <input
            name="first_name"
            className="login py-3 "
            required
            placeholder="First name *"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-2">
          <input
            name="last_name"
            className="login py-3 "
            required
            placeholder="Last name *"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-2">
          <input
            type="email"
            name="email"
            className="login py-3 "
            required
            placeholder="Email Adress *"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-2">
          <input
            type="number"
            name="phone_number"
            className="login py-3 "
            required
            placeholder="Phone number *"
            onChange={handleChange}
            maxLength={9}
            minLength={9}
          />
        </div>
        <div className={`${answer ? "mb-1" : "mb-4"} position-relative`}>
          <input
            type={showPassword ? "text" : "password"}
            className="login py-3 "
            minLength={8}
            id="password"
            placeholder="Password *(min 8 symbol)"
            onChange={handleChange}
            name="password"
            required
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#555", // Optional styling for the icon
            }}
          >
            {showPassword ? "👁️" : "🙈"}
          </span>
        </div>
        <p style={{ color: "red" }}>{answer}</p>
        <button type="submit" className="btn col-12 editButton mb-2 py-2">
          Register
        </button>
        <h6 className="text-center">Already hava an account?</h6>
        <div className="d-flex justify-content-center">
          <Link to="/login"> Log in Now</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
