import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const students = [
  {
    id: 1,
    name: "Duong Minh Truong",
    age: 20,
    address: "Da Nang",
  },
  {
    id: 2,
    name: "Ngo van Phuong Trang",
    age: 20,
    address: "Sai Gon",
  },
];

function App() {
  return (
    <div className="App">
      <table className="table table-border table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
