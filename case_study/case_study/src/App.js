import './App.css';
import Header from './component/header'
import Facilities from './component/facilitiesList';
import Footer from './component/footer'
import EditFacility from './component/editFacility'
import FacilitiesPage from './component/facilitiesPage';
import CustomerPage from './component/customerPage';
import ContractPage from './component/contractPage'
import AddFacility from './component/addFacility'
import CreateCustomer from './component/createCustomer';
import EditCustomer from './component/editCustomer';
import Home from './component/home';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
