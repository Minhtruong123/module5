import React from "react";
import { useState, useEffect } from "react";
import * as UserService from "./UserService";

function User() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      let result = await UserService.findAll();
      setUserList(result);
    };
    fetchApi();
  });

  const handleDelete = async (id) => {
    await UserService.deleteUser(id);
  };

  return (
    <div>
      <h1>User List</h1>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Get users
      </button>
      <div>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <table className="table tableBorder table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;