import logo from "./logo.svg";
import "./App.css";
import Book from "./Book";
import addNewBook from "./addNewBook";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/addNewBook" element={<addNewBook />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
