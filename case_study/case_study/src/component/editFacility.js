import { Component } from "react";
import { useState } from "react";
import FreeService from "./FreeService";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";

function EditFacility() {
  const [type, setType] = useState("Villa");
  const handleTypeChange = (event) => {
    setType(event);
  };

  return (
    <>
      <div className="container-fluid px-0 mt-5 position-relative">
        <img
          src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
          alt=""
        />
        <div className="position-absolute facility-title">EDIT FACILITY</div>
      </div>

      <div
        className="row mx-0 contain"
        style={{ height: "1000px", marginBottom: "150px" }}
      >
        <div className="col-12">
          <Formik
            initialValues={{
              name: "",
              typeRoom: "",
              roomSize: "",
              img: "",
              price: "",
              roomStandard: "",
              floor: "",
              poolArea: "",
              description: "",
              freeService: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .required("Required.")
                .matches(/^[a-zA-Z ]*$/, "Must not contain numbers"),
              roomSize: Yup.string().required("Required."),
              img: Yup.string().required("Required."),
              price: Yup.string().required("Required."),
              roomStandard: Yup.string().required("Required."),
              floor: Yup.string()
                .required("Required.")
                .matches(/^[1-9]\d*$/, "Must be a positive integer."),
              poolArea: Yup.string()
                .required("Required.")
                .matches(/^[1-9]\d*$/, "Must be a positive integer."),
              description: Yup.string().required("Required."),
            })}
            onSubmit={(values, { setSubmitting }) => {}}
          >
            <Form action="" className="d-flex justify-content-center">
              <div
                className="card"
                style={{
                  width: "30%",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  marginTop: "2%",
                  marginBottom: 100,
                }}
              >
                <img
                  src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <h5 className="card-title" style={{ fontWeight: "bold" }}>
                        Name of the facility
                      </h5>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Name"
                        name="name"
                      />
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p className="card-text" style={{ marginRight: 75 }}>
                        Type room:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        name="typeRoom"
                        render={() => (
                          <select
                            style={{ borderRadius: 5, width: "94%" }}
                            onChange={(event) =>
                              handleTypeChange(event.target.value)
                            }
                          >
                            <option value="Villa">Villa</option>
                            <option value="House">House</option>
                            <option value="Room">Room</option>
                          </select>
                        )}
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style={{ marginRight: 78 }}
                      >
                        Room size:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Room size"
                        name="roomSize"
                      />
                      <ErrorMessage
                        name="roomSize"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style={{ marginRight: 105 }}
                      >
                        Image:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Image"
                        name="img"
                      />
                      <ErrorMessage
                        name="img"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style={{ marginRight: 105 }}
                      >
                        Price:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Price"
                        name="price"
                      />
                      <ErrorMessage
                        name="price"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  {/* type option */}
                  {type === "Villa" && (
                    <div>
                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text d-flex align-items-center">
                            Room Standard
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            type="text"
                            style={{ borderRadius: 5 }}
                            placeholder="Room Standard"
                            name="roomStandard"
                          />
                          <ErrorMessage
                            name="roomStandard"
                            component="span"
                            className="form-err"
                          />
                        </div>
                      </div>

                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text d-flex align-items-center">
                            Floor
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            type="text"
                            style={{ borderRadius: 5 }}
                            placeholder="Floor"
                            name="floor"
                          />
                          <ErrorMessage
                            name="floor"
                            component="span"
                            className="form-err"
                          />
                        </div>
                      </div>

                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text d-flex align-items-center">
                            Swimming pool area
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            type="text"
                            style={{ borderRadius: 5 }}
                            placeholder="Area"
                            name="poolArea"
                          />
                          <ErrorMessage
                            name="poolArea"
                            component="span"
                            className="form-err"
                          />
                        </div>
                      </div>

                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text text-start">
                            Description of other amenities
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            name="description"
                            render={() => (
                              <textarea
                                style={{ borderRadius: 5, width: "93%" }}
                                placeholder="Describe"
                              />
                            )}
                          />
                          <ErrorMessage
                            name="description"
                            component="span"
                            className="form-err"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {type === "House" && (
                    <div>
                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text d-flex align-items-center">
                            Room Standard
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            type="text"
                            style={{ borderRadius: 5 }}
                            placeholder="Room Standard"
                            name="roomStandard"
                          />
                          <ErrorMessage
                            name="roomStandard"
                            component="span"
                            className="form-err"
                          />
                        </div>
                      </div>

                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text text-start">
                            Description of other amenities
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            name="description"
                            render={() => (
                              <textarea
                                style={{ borderRadius: 5, width: "93%" }}
                                placeholder="Describe"
                              />
                            )}
                          />
                          <ErrorMessage
                            name="description"
                            component="span"
                            className="form-err"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {type === "Room" && (
                    <div>
                      <div className="d-flex mb-3 row">
                        <div className="col-6 pe-0 d-flex align-items-center">
                          <p className="card-text d-flex align-items-center">
                            Free service included
                          </p>
                        </div>
                        <div className="col-6 px-0">
                          <Field
                            name="freeService"
                            render={() => (
                              <select style={{ borderRadius: 5, width: "94%" }}>
                                {FreeService.map((service, index) => (
                                  <option key={index}>{service.name}</option>
                                ))}
                              </select>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <input
                    type="submit"
                    className="btn btn-primary"
                    defaultValue="Submit"
                  />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
export default EditFacility;
