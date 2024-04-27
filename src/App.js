import React from 'react';
import Home from './Pages/Home';
import { Route, Router } from 'react-router-dom';
import Productdetails from './Pages/Productdetails';


const App = () => {
  return (
    <Router>
       <Route path='/' element={<Home />}/>
       <Route path='/product/:id' element={<Productdetails />} />
       <Route path='*' element='Page not Found' />
    </Router>
  );
}

export default App;
