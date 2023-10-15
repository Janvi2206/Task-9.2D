import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './Header'; 
import Login from './components/Login';
import Signup from './components/Signup';
import SignOut from './components/SignOut';
import Plans from './components/Plans';
import StripeCheckout from 'react-stripe-checkout';

function App() {
  const onToken = (token) => {
    console.log(token);
  }

  return (
    <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/login" element={<Login/>} /> 
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/SignOut" element={<SignOut/>} />
        <Route path="/plans" element={
          <div>
            <Plans/>
            <StripeCheckout
              token={onToken}
              stripeKey=""
            />
          </div>
        } />
    </Routes>
  );
}

export default App;
