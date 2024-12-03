import { useContext, useState } from "react";
import { IsOpen } from "../context/IsOpen";
import { AuthToken } from "../context/AuthToken";

const EditPersonalInfo = ({ profile }) => {
  const { isOpen, setIsOpen } = useContext(IsOpen);
  const [showPassword, setShowPassword] = useState(false);

  const data = localStorage.getItem("access_token");
  const token = JSON.parse(data).value;

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [form, setForm] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (form.phone_number.length != 9) {
      alert("phone number must be 9 digits!!!");
      return;
    }
    if (form.email[form.email.length - 1] === ".") {
      alert("invalid email adress!!!");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const json = await response.json();
      if (json.id) {
        setIsOpen(false);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  if (!isOpen) return null;
  return (
    <form className="position-fixed top-50 start-50 translate-middle p-4 border rounded d-flex flex-wrap gap-4 edit justify-content-between">
      <div className="mb-3 input">
        <label for="first_name" className="form-label">
          Edit first name:
        </label>
        <input
          className="form-control"
          id="first_name"
          value={form.first_name}
          onChange={handleChange}
          name="first_name"
        />
      </div>
      <div className="mb-3 input">
        <label for="last_name" className="form-label">
          Edit last name:
        </label>
        <input
          className="form-control"
          id="last_name"
          value={form.last_name}
          onChange={handleChange}
          name="last_name"
        />
      </div>
      <div className="mb-3 input">
        <label for="email" className="form-label">
          Edit email adress:
        </label>
        <input
          className="form-control"
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className="mb-3 input">
        <label for="number" className="form-label">
          Edit phone number:
        </label>
        <input
          className="form-control"
          type="number"
          id="number"
          value={form.phone_number}
          onChange={handleChange}
          name="phone_number"
          maxLength={8}
          minLength={8}
        />
      </div>
      <div className="mb-3 position-relative input">
        <label for="password" className="form-label">
          Edit password:
        </label>
        <input
          type={showPassword ? "text" : "password"}
          className="form-control"
          minLength={8}
          id="password"
          onChange={handleChange}
          name="password"
        />
        <span
          onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "10px",
            top: "70%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            color: "#555", // Optional styling for the icon
          }}
        >
          {showPassword ? "👁️" : "🙈"}
        </span>
      </div>
      <div className="input d-flex align-items-center">
        <div className="w-100 d-flex justify-content-end gap-3">
          <button className="option py-2 px-4" onClick={handleEdit}>
            Edit
          </button>
          <button className="option py-2 px-4" onClick={() => setIsOpen(false)}>
            Cencel
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditPersonalInfo;
