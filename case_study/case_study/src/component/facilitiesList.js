import { Component } from "react";
import Facility from "./FacilityData";

class Facilities extends Component {
  render() {
    return (
      <>
        <div className="container-fluid px-0 mt-5 position-relative">
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
            alt=""
          />
          <div className="position-absolute facility-title">FACILITIES</div>
        </div>

        <div>
          <div
            className="row mx-0 container-fluid"
            style={{ height: "1600px", fontFamily: "sans-serif" }}
          >
            {Facility.map((faciliti, index) => {
              return (
                <div
                  key={index}
                  className="col-4 d-flex justify-content-center align-items-center"
                >
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                    }}
                  >
                    <img src={faciliti.img} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontWeight: "bold" }}>
                        {faciliti.nameFacility}
                      </h5>
                      <p className="card-text">
                        Room size: {faciliti.roomSize} m<sup>2</sup>
                      </p>
                      <div className="d-flex justify-content-center">
                        <a
                          href="#"
                          className="btn btn-primary mt-2 me-2"
                          style={{ width: "20%" }}
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="btn btn-danger mt-2"
                          style={{ width: "20%" }}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <nav
            className="d-flex justify-content-center"
            aria-label="Page navigation example"
          >
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="row px-0 mx-0 pt-5" style={{ height: "250px" }}>
          <div className="col-12">
            <h2
              className="d-flex justify-content-center"
              style={{ color: "#cbbe73", fontSize: "27px" }}
            >
              SERVICES & FACILITIES
            </h2>
            <div className="d-flex justify-content-center">
              <p className="text-center pt-3" style={{ width: "50%" }}>
                Whether you are looking for a short weekend break or a longer
                holiday, we offer a range of packages that will cater for all.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Facilities;
