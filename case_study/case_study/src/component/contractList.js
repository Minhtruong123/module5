function ContractList() {
  return (
    <>
      <div className="container-fluid px-0 mt-5 position-relative">
        <img
          src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
          alt=""
        />
        <div className="position-absolute facility-title">CONTRACT LIST</div>
      </div>

      <div className="row mx-0 mt-5" style="height: 500px;">
        <div className="col-12 px-0">
          <h2
            className="mb-3"
            style="color: #cbbe73; font-size: 27px; text-align: center;"
          >
            Contract List
          </h2>
          <table className="table table-border table-striped">
            <thead>
              <tr>
                <th>Id Contract</th>
                <th>Name Customer</th>
                <th>Number Of Guests</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Email</th>
                <th>Id Room</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CO-0001</td>
                <td>Duong Minh Truong</td>
                <td>3</td>
                <td>30/03/2023</td>
                <td>05/04/2023</td>
                <td>duongminhtruong1234@gmail.com</td>
                <td>RO-0001</td>
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
                <td>CO-0002</td>
                <td>Duong Minh Truong</td>
                <td>8</td>
                <td>05/04/2023</td>
                <td>10/04/2023</td>
                <td>duongminhtruong1234@gmail.com</td>
                <td>VI-0001</td>
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
                <td>CO-0003</td>
                <td>Duong Minh Truong</td>
                <td>5</td>
                <td>01/04/2023</td>
                <td>08/04/2023</td>
                <td>duongminhtruong1234@gmail.com</td>
                <td>VI-0002</td>
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
}
export default ContractList;