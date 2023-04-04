import logo from "./logo.svg";
import "./App.css";
import * as Yup from "yup";
import React, { useState } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <h1>Tờ khai y tế</h1>
      <Formik
        initialValues={{
          name: "",
          identity: "",
          birthYear: "",
          gender: "",
          nationality: "",
          workingCompany: "",
          workingParts: "",
          haveHealthnsuranceCard: false,
          province: "",
          district: "",
          ward: "",
          apartmentNumber: "",
          phoneNumber: "",
          email: "",
          dauHieu: [],
          tiepXuc:[]
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required."),
          identity: Yup.string().required("Required."),
          birthYear: Yup.string().required("Required.").min("1900"),
          nationality: Yup.string().required("Required."),
          province: Yup.string().required("Required."),
          district: Yup.string().required("Required."),
          ward: Yup.string().required("Required."),
          apartmentNumber: Yup.string().required("Required."),
          phoneNumber: Yup.string().required("Required."),
          email: Yup.string()
            .required("Required.")
            .matches(
              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              "Invalid email"
            ),
        })}
        onSubmit={(values, { setSubmitting }) => {}}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name">Họ tên</label>
            <Field type="text" name="name" className="form-control" id="name" />
            <ErrorMessage name="name" component="span" className="form-err" />
          </div>
          <div className="mb-3">
            <label htmlFor="identity">Số hộ chiếu/CMND</label>
            <Field
              type="text"
              name="identity"
              className="form-control"
              id="identity"
            />
            <ErrorMessage
              name="identity"
              component="span"
              className="form-err"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="birthYear">Năm sinh</label>
            <Field
              type="text"
              name="birthYear"
              className="form-control"
              id="birthYear"
            />
            <ErrorMessage
              name="birthYear"
              component="span"
              className="form-err"
            />
          </div>
          <div className="mb-3">
            <span>Giới tính</span>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio1"
                value="1"
              />
              <label className="form-check-label" for="inlineRadio1">
                Nam
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio2"
                value="0"
              />
              <label className="form-check-label" for="inlineRadio2">
                Nữ
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="nationality">Quốc tịch</label>
            <Field
              type="text"
              name="nationality"
              className="form-control"
              id="nationality"
            />
            <ErrorMessage
              name="nationality"
              component="span"
              className="form-err"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="workingCompany">Công ty làm việc</label>
            <Field
              type="text"
              name="workingCompany"
              className="form-control"
              id="workingCompany"
            />
            <ErrorMessage
              name="workingCompany"
              component="span"
              className="form-err"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="workingParts">Bộ phận làm việc</label>
            <Field
              type="text"
              name="workingParts"
              className="form-control"
              id="workingParts"
            />
            <ErrorMessage
              name="workingParts"
              component="span"
              className="form-err"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="haveHealthnsuranceCard">Có thẻ bảo hiểm y tế</label>
            <Field
              class="form-check-input"
              type="checkbox"
              id="haveHealthnsuranceCard"
              name="haveHealthnsuranceCard"
            />
            <ErrorMessage
              name="haveHealthnsuranceCard"
              component="span"
              className="form-err"
            />
          </div>
          <h3>Địa chỉ liên lạc tại Việt Nam</h3>
          <div className="mb-3">
            <label htmlFor="province">Tỉnh thành</label>
            <Field
              type="text"
              name="province"
              className="form-control"
              id="province"
            />
            <ErrorMessage
              name="province"
              component="span"
              className="form-err"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="district">Quận/huyện</label>
            <Field
              type="text"
              name="district"
              className="form-control"
              id="district"
            />
            <ErrorMessage
              name="district"
              component="span"
              className="form-err"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ward">Phường/xã</label>
            <Field type="text" name="ward" className="form-control" id="ward" />
            <ErrorMessage name="ward" component="span" className="form-err" />
          </div>
          <div className="mb-3">
            <label htmlFor="apartmentNumber">
              Số nhà, phố, tổ dân phố/thôn/đội
            </label>
            <Field
              type="text"
              name="apartmentNumber"
              className="form-control"
              id="apartmentNumber"
            />
            <ErrorMessage
              name="apartmentNumber"
              component="span"
              className="form-err"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber">Điện thoại</label>
            <Field
              type="text"
              name="phoneNumber"
              className="form-control"
              id="phoneNumber"
            />
            <ErrorMessage
              name="phoneNumber"
              component="span"
              className="form-err"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <Field
              type="text"
              name="email"
              className="form-control"
              id="email"
            />
            <ErrorMessage name="email" component="span" className="form-err" />
          </div>
          <div className="mb-3">
            <h2>
              Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/ vùng lãnh thổ nào
              (Có thể đi qua nhiều quốc gia)
            </h2>
            <Field type="textarea" className="form-control" name="goManyCountry"/>
          </div>
          <div className="mb-3">
            <h2>
              Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau
              đây không ?
            </h2>
            <div className="form-check">
              <Field
              className="form-check-input"
              type="checkbox"
              id="sot"
              name="dauHieu"
              value="sốt"
            />
              <label className="form-check-label" for="sot">
                Sốt
              </label>
            </div>
            <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              id="ho"
              name="dauHieu"
              value="ho"
            />
              <label className="form-check-label" for="ho">
                Ho
              </label>
            </div>
            <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              id="khoTho"
              name="dauHieu"
              value="khó thở"
            />
              <label className="form-check-label" for="khoTho">
                Khó thở
              </label>
            </div>
            <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              id="viemPhoi"
              name="dauHieu"
              value="viêm phổi"
            />
              <label className="form-check-label" for="viemPhoi">
                Viêm phổi
              </label>
            </div>
            <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              id="dauHong"
              name="dauHieu"
              value="đau họng"
            />
              <label className="form-check-label" for="dauHong">
                Đau họng
              </label>
            </div>
            <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              id="metMoi"
              name="dauHieu"
              value="mệt mỏi"
            />
              <label className="form-check-label" for="metMoi">
                Mệt mỏi
              </label>
            </div>
          </div>
          <div className="mb-3">
            <h2>
              Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với ?
            </h2>
            <div className="form-check">
              <Field
                className="form-check-input"
                type="checkbox"
                id="check1"
                name="tiepXuc"
                value="người bệnh hoặc nghi ngờ"
              />
              <label className="form-check-label" for="check1">
                Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
              </label>
            </div>
            <div className="form-check">
              <Field
                className="form-check-input"
                type="checkbox"
                id="check2"
                name="tiepXuc"

                value="người từ nước ngoài có bệnh COVID-19"
              />
              <label className="form-check-label" for="check2">
                Người từ nước ngoài có bệnh COVID-19
              </label>
            </div>
            <div className="form-check">
              <Field
                className="form-check-input"
                type="checkbox"
                id="check2"
                name="tiepXuc"
                value="người có biểu hiện"
              />
              <label className="form-check-label" for="check2">
                Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;