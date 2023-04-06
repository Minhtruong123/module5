import { Field, Formik, Form } from "formik";
import * as bookService from "./bookService";
import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";

function EditBook() {
  const [bookData, setBookData] = useState();
  const param = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      let result = await bookService.findById(param.id);
      setBookData(result);
    };
    fetchApi();
  }, []);

  if (!bookData) {
    return null;
  }

  return (
    <div>
      <Formik
        initialValues={{ title: bookData?.title, quantity: bookData?.quantity }}
        onSubmit={(values, { resetForm }) => {
          const update = async () => {
            await bookService.editBook(bookData?.id, values);
            resetForm();
          };
          update();
        }}
      >
        <Form>
          <h1>Edit</h1>
          <div>
            <label htmlFor="title">Title</label>
            <Field
              type="text"
              className="form-control"
              id="title"
              name="title"
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <Field
              type="text"
              className="form-control"
              id="quantity"
              name="quantity"
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default EditBook;