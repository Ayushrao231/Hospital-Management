// components/Navbar.js
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">Hospital</Link>
        <div>
          <Link className="btn btn-light me-2" to="/book">Book</Link>
          <Link className="btn btn-light me-2" to="/appointments">Appointments</Link>
          <Link className="btn btn-light me-2" to="/users">Users</Link>
        </div>
      </div>
    </nav>
  );
}