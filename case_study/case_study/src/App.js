import './App.css';
import Header from './component/header'
import Facilities from './component/facilitiesList';
import Footer from './component/footer'
import EditFacility from './component/editFacility'
import FacilitiesPage from './component/facilitiesPage';
import CustomerPage from './component/customerPage';

function App() {
  return (
    <div className="App">
      <CustomerPage/>
    </div>
  );
}

export default App;
