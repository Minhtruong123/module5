import CutomerList from "./customerList";
import TypeCustomer from "./TypeCustomer";
const Customer = () => {
  return (
    <>
      <div className="container-fluid px-0 mt-5 position-relative">
        <img src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433" />
        <div className="position-absolute facility-title">CUSTOMERS</div>
      </div>

      <div className="row mx-0 mt-5" style={{ height: "500px" }}>
        <div className="col-12 px-0">
          <h2
            className="mb-3"
            style={{ color: "#cbbe73", fontSize: "27px", textAlign: "center" }}
          >
            Customer List
          </h2>
          <a className="btn btn-primary float-start">Back to the List</a>
          <table className="table table-border table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of birth</th>
                <th>Gender</th>
                <th>Identity</th>
                <th>Phone number</th>
                <th>Email</th>
                <th>Type customer</th>
                <th>Address</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {CutomerList.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>{customer.dateOfBirth}</td>
                  <td>{customer.gender}</td>
                  <td>{customer.identity}</td>
                  <td>{customer.phoneNumber}</td>
                  <td>{customer.gmail}</td>
                  <td>
                    {TypeCustomer.filter((type) => (
                      type.id === customer.typeCustomer
                    ))[0].name}
                    </td>
                  <td>{customer.address}</td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Customer;
