import './App.css';
import Header from './component/header'
import Facilities from './component/facilitiesList';
import Footer from './component/footer'
import EditFacility from './component/editFacility'

function App() {
  return (
    <div className="App">
      <Header/>
      <EditFacility/>
      <Footer/>
    </div>
  );
}

export default App;
