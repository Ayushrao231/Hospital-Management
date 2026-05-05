import { useEffect, useState } from "react";
import { getDoctors, bookAppointment } from "../services/api";

export default function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    getDoctors().then(res => setDoctors(res.data));
  }, []);

  const submit = async () => {
  

    const data = {
      ...form,
    };

    console.log("Sending:", data); // 🔍 debug

    await bookAppointment(data);
    alert("Booked!");
  };

  return (
    <div className="card p-4">
      <h3>Book Appointment</h3>

      <select
        className="form-control my-2"
        onChange={(e) =>
          setForm({ ...form, doctorId: e.target.value })
        }
      >
        <option>Select Doctor</option>
        {doctors.map((d) => (
          <option key={d._id} value={d._id}>
            {d.name}
          </option>
        ))}
      </select>

      <input
        type="date"
        className="form-control my-2"
        onChange={(e) =>
          setForm({ ...form, date: e.target.value })
        }
      />

      <button className="btn btn-primary" onClick={submit}>
        Book
      </button>
    </div>
  );
}