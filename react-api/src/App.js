
import './App.css';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Cars from './components/Cars';
import CarInfo from './components/CarInfo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
        <Routes>
          
          <Route path='/dashboard/:id' Component={Dashboard} />
          <Route path="/cars" Component={Cars}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path='/carInfo/:id' Component={CarInfo} />
        </Routes>
      </Router>
      
      
     
    </div>
  );
}

export default App;
