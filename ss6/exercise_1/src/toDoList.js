import React from "react";
import { useState, useEffect } from "react";
import { Field, Formik, Form } from "formik";
import * as toDoListService from "./toDoListService";

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      let result = await toDoListService.findAll();
      setToDoList(result);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <h1>To do list</h1>
      <Formik
        initialValues={{ title: '' }}
        onSubmit={(values,{resetForm}) => {
          const create = async () => {
            await toDoListService.save(values);
            let result = await toDoListService.findAll();
            setToDoList(result);
            resetForm();
          };
          create();
        }}
      >
        <Form>
          <Field type="text" name="title" className="form-control" id="title" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <ul>
        {toDoList.map((value, index) => (
          <li key={index}>{value.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;