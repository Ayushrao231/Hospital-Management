import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({});
 const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(form);
    alert("Registered Successfully");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4">
      <h3>Register</h3>

      <input placeholder="Name" className="form-control my-2"
        onChange={(e)=>setForm({...form,name:e.target.value})}/>

      <input placeholder="Email" className="form-control my-2"
        onChange={(e)=>setForm({...form,email:e.target.value})}/>

      <input type="password" placeholder="Password" className="form-control my-2"
        onChange={(e)=>setForm({...form,password:e.target.value})}/>

      <select className="form-control my-2"
        onChange={(e)=>setForm({...form,role:e.target.value})}>
        <option>Select Role</option>
        <option value="doctor">Doctor</option>
        <option value="patient">Patient</option>
      </select>

      <button className="btn btn-primary">Register</button>
    </form>
  );
}