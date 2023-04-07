import ContractData from "./contractData";
import CustomerList from "./customerList";
import Facility from './FacilityData'
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

      <div className="row mx-0 mt-5" style={{ height: 500 }}>
        <div className="col-12 px-0">
          <h2
            className="mb-3"
            style={{ color: "#cbbe73", fontSize: 27, textAlign: "center" }}
          >
            Contract List
          </h2>
          <table className="table table-border table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Customer Name</th>
                <th>Facility</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Money</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {ContractData.map((contract, index) => (
                <tr>
                  <td>{contract.contractId}</td>
                  <td>
                    {
                      CustomerList.filter((customer) => (
                          customer.id === contract.customerId
                        ))[0].name
                    }
                  </td>
                  <td>
                  {
                      Facility.filter((facility) => (
                          facility.id === contract.facilityId
                        ))[0].nameFacility
                    }
                  </td>
                  <td>{contract.checkIn}</td>
                  <td>{contract.checkOut}</td>
                  <td>{contract.price}</td>
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
}
export default ContractList;
