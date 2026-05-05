import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user_id", res.data.userid);


    navigate("/dashboard");
  };

  // ✅ correct function
  const goRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="card p-4">
        <h3>Login</h3>

        <input
          placeholder="Email"
          className="form-control my-2"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control my-2"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="btn btn-success">Login</button>
      </form>

      {/* ✅ added click handler */}
      <button className="btn btn-primary mt-3" onClick={goRegister}>
        Register
      </button>
    </>
  );
}