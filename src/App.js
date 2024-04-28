import React from 'react';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Productdetails from './Pages/Productdetails';


const App = () => {
  return (
    <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/product/:id' element={<Productdetails />} />
       <Route path='*' element='Page not Found' />
    </Routes>
  );
}

export default App;
