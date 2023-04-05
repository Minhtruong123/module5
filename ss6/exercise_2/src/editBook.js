import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as bookService from "./bookService";
import {useState} from 'react';

import React from 'react'

function editBook() {
  return (
    <div>
        <Formik
        initialValues={{ title: bookData.title, quantity: bookData.quantity }}
        onSubmit={(values, { resetForm }) => {
          const update = async () => {
            await bookService.editBook(bookData.id, values);
            let result = await bookService.findAll();
            setBookList(result);
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
  )
}

export default editBook