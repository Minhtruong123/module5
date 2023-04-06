import logo from "./logo.svg";
import "./App.css";
import Book from "./Book";
import AddNewBook from "./addNewBook";
import EditBook from "./editBook";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/addNewBook" element={<AddNewBook />} />
        <Route path="/editBook/:id" element={<EditBook />} />
      </Routes>
    </>
  );
}

export default App;
