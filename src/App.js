import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { auth, getUserFromDatabase } from "./firebase";
import Spinner from './Components/Spinner/Spinner';

import Account from './Components/Account/Account';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const fetchUserDetails = async (uid) => {
    const userDetails = await getUserFromDatabase(uid);
    setUserDetails(userDetails);
    setIsDataLoaded(true);
  };

  useEffect(() => {
    const listener = auth.onAuthStateChanged((user) => {
      if (!user) {
        setIsDataLoaded(true);
        setIsAuthenticated(false);
        return;
      }

      setIsAuthenticated(true);
      fetchUserDetails(user.uid);
    });

    return () => listener();
  }, []);

  return (
    <div className="App">
      {/* <h1>Srijan Gupta</h1> */}
      <Router>
        {
          isDataLoaded ?
            <Routes>
              {!isAuthenticated && (
                <>
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<SignUp />} />
                </>
              )}
              <Route path='/account' element={<Account userDetails={userDetails} auth={isAuthenticated} />} />
              <Route path='/' element={<Home auth={isAuthenticated} />} />
              <Route path='/*' element={<Navigate to="/" />} />
            </Routes>
            :
            <Spinner />
        }
      </Router>
    </div>
  );
}

export default App;
