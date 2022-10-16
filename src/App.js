import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './External.css'
import Topbar from './Topbar';
import Staff from './Staff';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Students from './Students';
import Dashboard from './Dashboard';
import StaffProfile from './StaffProfile';
import Editstaffprofile from './Editstaffprofile';
import CreateStaff from './CreateStaff';


function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar/>
          <Routes>
          <Route path='' element={<Dashboard/>}></Route>
          <Route path='/Staff' element={<Staff/>}></Route>
          <Route path='/Staffcreate' element={<CreateStaff/>}></Route>
          <Route path='/StaffProfile/:id' element={<StaffProfile/>}></Route>
          <Route path='/editstaffprofile/:id' element={<Editstaffprofile/>}></Route>
          <Route path='/Students' element={<Students/>}></Route>
          </Routes>
        </div>
        </div>
      </div>
      </BrowserRouter>
  
  );
}

export default App;
