import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Facilities from "./component/facilitiesList";
import Footer from "./component/footer";
import EditFacility from "./component/editFacility";
import AddFacility from "./component/addFacility";
import CreateCustomer from "./component/createCustomer";
import EditCustomer from "./component/editCustomer";
import Home from "./component/home";
import ContractList from "./component/contractList"
import Customer from "./component/customer";
import Contract from "./component/contract";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/facility" element={<Facilities/>}/>
        <Route path="/createFacility" element={<AddFacility/>}/>
        <Route path="/editFacility/:id" element={<EditFacility/>}/>
        <Route path="/contract" element={<ContractList/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/createCustomer" element={<CreateCustomer/>}/>
        <Route path="/editCustomer/:id" element={<EditCustomer/>}/>
        <Route path="/contractNew" element={<Contract/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
