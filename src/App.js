import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Routes, Route } from 'react-router-dom';
import Edit from './Components/Edit'
import Insert from './Components/Insert'
import View from './Components/View'


function App() {
  return (
  <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <Link to={'/'} className="navbar-brand text-success"><b>CRM</b></Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to={'/'} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
            <Link to={'/Insert'} className="nav-link">Insert</Link>              
            </li>
            <li className="nav-item">
            <Link to={'/View'} className="nav-link">View</Link>
            </li>            
          </ul>
        </div>
      </nav>
      <h1 className='text-primary'>Welcome to customer Review System</h1>
      <Routes>
        <Route exact path='/Insert' element = {<Insert/>}/>
        <Route exact path='/Edit/:id' element = {<Edit/>}/>
        <Route exact path='/View' element = {<View/>}/>
      </Routes>
</div>
  );
}

export default App;
