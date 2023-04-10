import { useEffect, useState } from "react";
import * as facilityService from "../service/facilityService";
import * as customerService from "../service/customerService";
import * as contractList from "../service/contractService";
import { Link } from "react-router-dom";
function ContractList() {
  const [facilityList, setFacilityList] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  const [contract, setContract] = useState([]);
  const [contractData, setContractData] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      let result = await facilityService.findAll();
      let result2= await customerService.findAll();
      let result3= await contractList.findAll();
      setFacilityList(result);
      setCustomerList(result2);
      setContract(result3);
    }
    fetchApi();
  },[])

  const handleDeleteContract = async (id) => {
    let result = await contractList.findById(id);
    setContractData(result);
  }

  const handleDelete = async () => {
    await contractList.deleteContract(contractData.id);
    let result = await contractList.findAll();
    setContract(result);
  }

  return (
    <>
      <div className="container-fluid px-0 position-relative">
        <img
          src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
          alt=""
        />
        <div className="position-absolute facility-title">CONTRACT LIST</div>
      </div>
      <Link to={"/contractNew"} className="btn btn-primary" style={{width:"200px"}}>
          Create New Contract
        </Link>

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
              {contract.map((contract, index) => (
                <tr>
                  <td>{contract.idContract}</td>
                  <td>
                    {
                      customerList.find((customer) => (
                          customer.id === contract.customerId
                        ))?.name
                    }
                  </td>
                  <td>
                  {
                      facilityList.find((facility) => (
                          facility.id === contract.facilityId
                        ))?.nameFacility
                    }
                  </td>
                  <td>{contract.dayIn}</td>
                  <td>{contract.dayOut}</td>
                  <td>{contract.deposits}</td>
                  <td>
                  <Link
                        className="btn edit-button me-2"
                        style={{ width: "20%" }}
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        className="btn delete-button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => handleDeleteContract(contract.id)}
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

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Delete
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              Do you want to delete{" "}
              <span style={{ color: "red" }}>{contractData?.idContract}</span>
              <div id="deleteName"></div>?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={() => handleDelete()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContractList;
