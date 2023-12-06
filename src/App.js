import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import AddAgency from './components/AddAgency';
import AddContractor from './components/AddContractor';
import AgencyLogin from './components/AgencyLogin';
import ContractorLogin from './components/ContractorLogin';
import Home from './components/Home';

const App = () => {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/register/Contractor' element={<AddContractor/>}></Route>
      <Route path="/login/Contractor" element={<ContractorLogin/>}></Route>
      <Route path="/register/Agency" element={<AddAgency/>}></Route>
      <Route path="/login/Agency" element={<AgencyLogin/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;