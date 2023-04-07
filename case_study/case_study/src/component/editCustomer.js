import FreeService from "./FreeService";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
import TypeCustomer from "./TypeCustomer";

function EditCustomer() {
  const [date,setDate] =useState()
  const handleDate = (event) => {
    setDate(event);
  }

  return (
    <>
      <div class="container-fluid px-0 position-relative">
        <img
          src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
          alt=""
        />
        <div class="position-absolute facility-title">EDIT CUSTOMER</div>
      </div>

      <div class="row mx-0 contain" style={{ height: "800px" }}>
        <div class="col-12">
          <Formik
            initialValues={{
              name: "",
              dateOfBirth: "",
              gender: "",
              identity: "",
              phoneNumber: "",
              email: "",
              address: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .required("Required.")
                .matches(
                  /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/,
                  "Invalid name format."
                ),
              dateOfBirth: Yup.string().required("Required."),
              identity: Yup.string()
                .required("Required.")
                .matches(/^[0-9]{9}$|^[0-9]{12}$/, "Invalid identity format."),
              phoneNumber: Yup.string()
                .required("Required.")
                .matches(
                  /^(090|091|\(84\)\+90|\(84\)\+91)[0-9]{7}$/,
                  "Invalid phone number format."
                ),
              email: Yup.string()
                .required("Required.")
                .email("Invalid email format."),
              address: Yup.string().required("Required."),
            })}
            onSubmit={(values, { setSubmitting }) => {}}
          >
            <Form action="" class="d-flex justify-content-center">
              <div
                class="card"
                style={{
                  width: "30%",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  marginTop: "5%",
                  marginBottom: "100px",
                }}
              >
                <div class="card-body">
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <h5 className="card-title" style={{ fontWeight: "bold" }}>
                        Name
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
                      <p
                        className="card-text d-flex align-items-center"
                        style={{ marginRight: 78 }}
                      >
                        Date of birth
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <DatePicker
                        onChange={(date) => handleDate(date.target.value)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Date of birth"
                        name="dateOfBirth"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        defaultValue={new Date()}
                        style={{ borderRadius: 5 }}
                      />
                      <ErrorMessage
                        name="dateOfBirth"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style={{ marginRight: 78 }}
                      >
                        Gender
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Gender"
                        name="gender"
                      />
                      <ErrorMessage
                        name="gender"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style={{ marginRight: 78 }}
                      >
                        Identity
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Identity"
                        name="identity"
                      />
                      <ErrorMessage
                        name="identity"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style={{ marginRight: 78 }}
                      >
                        Phone number
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Phone number"
                        name="phoneNumber"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style={{ marginRight: 78 }}
                      >
                        Email
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Email"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style={{ marginRight: 78 }}
                      >
                        Address
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Address"
                        name="address"
                      />
                      <ErrorMessage
                        name="address"
                        component="span"
                        className="form-err"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p className="card-text" style={{ marginRight: 75 }}>
                        Type Customer
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <Field
                        name="typeCustomer"
                        render={() => (
                          <select style={{ borderRadius: 5, width: "94%" }}>
                            {TypeCustomer.map((type) => (
                              <option value={type.name} index={type.id}>
                                {type.name}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                    </div>
                  </div>
                  <input type="submit" class="btn btn-primary" value="Add" />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default EditCustomer;
