import { useEffect, useState } from "react";
import { getUsersByRole } from "../services/api";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState("doctor");

  const fetchUsers = async () => {
    const res = await getUsersByRole(role);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, [role]);

  return (
    <div className="card p-4">
      <h3>Users List</h3>

      <select
        className="form-control mb-3"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="doctor">Doctors</option>
        <option value="patient">Patients</option>
      </select>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}