import React from "react";
import { useState, useEffect } from "react";
import { Field, Formik, Form } from "formik";
import * as bookService from "./bookService";

function Book() {
  const [bookList, setBookList] = useState([]);
  const [bookData, setBookData] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      let result = await bookService.findAll();
      setBookList(result);
    };
    fetchApi();
  }, []);

  const handleDelete = async (id) => {
    await bookService.deleteBook(id);
    let result = await bookService.findAll();
    setBookList(result);
  };

  const handleEdit = async (id, book) => {
    setBookData(book);
  };

  return (
    <div>
      <div>
        <h1>Library</h1>
        <a className="btn btn-primary" href="#">
          Add a new Book
        </a>
      </div>

      <div>
        <table className="table table-border table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Quantity</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book, index) => (
              <tr key={index}>
                <th>{book.title}</th>
                <th>{book.quantity}</th>
                <th>
                  <a
                    className="btn btn-primary"
                    onClick={() => handleEdit(book.id, book)}
                  >
                    Edit
                  </a>
                </th>
                <th>
                  <a
                    className="btn btn-danger"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </a>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
}

export default Book;
