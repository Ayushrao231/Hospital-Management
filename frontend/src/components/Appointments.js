import { useEffect, useState } from "react";
import { getAppointments, cancelAppointment } from "../services/api";

export default function Appointments() {
  const [data, setData] = useState([]);

  const load = () => {
    getAppointments().then(res => setData(res.data));
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h3>Appointments</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Patient</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map(a => (
            <tr key={a._id}>
              <td>{a.doctorId?.name}</td>
              <td>{a.patientId?.name}</td>
              <td>{a.date}</td>
              <td>
                <button className="btn btn-danger"
                  onClick={()=>{
                    cancelAppointment(a._id).then(load);
                  }}>
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}