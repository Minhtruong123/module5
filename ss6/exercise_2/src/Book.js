import React from "react";
import { useState, useEffect } from "react";
import * as bookService from "./bookService";
import {
  Link,
  NavLink
  } from "react-router-dom";

function Book() {
  const [bookList, setBookList] = useState([]);
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

  // const handleEdit = async (id, book) => {
  //   setBookData(book);
  // };

  return (
    <div>
            <div>
              <h1>Library</h1>
              <Link className="btn btn-primary" to="/addNewBook">
                Add a new Book
              </Link>
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
                        <Link
                          className="btn btn-primary"
                          to={`/editBook/${book.id}`}
                        >
                          Edit
                        </Link>
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
