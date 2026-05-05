import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import BookAppointment from "./components/BookAppointment";
import Appointments from "./components/Appointments";
import UsersList from "./components/UsersList";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
