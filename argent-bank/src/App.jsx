import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import User from './pages/user/User';
import { getTokenFromStorage } from './redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { tokenSelector } from './selectors';
import { isAuthSelector } from './selectors';

function PrivateRoute(props) {
  const userIsAuth = useSelector(isAuthSelector) === true;

  if (userIsAuth) {
    return props.children;
  }

  return <Navigate to="/sign-in" />;
}

function App() {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);

  // Récupération du TOKEN
  if (!token && localStorage.token) {
    const userInfo = {
      token: localStorage.token,
      firstName: localStorage.firstName,
    };
    dispatch(getTokenFromStorage(userInfo));
  }

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
