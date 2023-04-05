const Customer = () => {
  return (
    <>
      <div className="container-fluid px-0 mt-5 position-relative">
        <img src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433" />
        <div className="position-absolute facility-title">CUSTOMERS</div>
      </div>

      <div className="row mx-0 mt-5" style={{height: '500px'}}>
        <div className="col-12 px-0">
          <h2
            className="mb-3"
            style={{color: '#cbbe73', fontSize: '27px', textAlign: 'center'}}
          >
            Customer List
          </h2>
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
              <tr>
                <td>Duong Minh Truong</td>
                <td>07/05/2003</td>
                <td>Male</td>
                <td>201865361</td>
                <td>0905551127</td>
                <td>duongminhtruong1234@gmail.com</td>
                <td>Diamond</td>
                <td>Villa</td>
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
              <tr>
                <td>Duong Minh Truong</td>
                <td>07/05/2003</td>
                <td>Male</td>
                <td>201865361</td>
                <td>0905551127</td>
                <td>duongminhtruong1234@gmail.com</td>
                <td>Diamond</td>
                <td>Villa</td>
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
              <tr>
                <td>Duong Minh Truong</td>
                <td>07/05/2003</td>
                <td>Male</td>
                <td>201865361</td>
                <td>0905551127</td>
                <td>duongminhtruong1234@gmail.com</td>
                <td>Diamond</td>
                <td>Villa</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Customer;