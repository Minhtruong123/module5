import './App.css';
import Header from './component/header'
import Facilities from './component/facilitiesList';
import Footer from './component/footer'
import EditFacility from './component/editFacility'
import FacilitiesPage from './component/facilitiesPage';

function App() {
  return (
    <div className="App">
      <FacilitiesPage/>
    </div>
  );
}

export default App;
