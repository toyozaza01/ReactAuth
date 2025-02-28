import './App.css';
import auth from "../firebase_config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./pages/Home";
import Header from "./components/NavBar";
import Infomation from "./pages/Information";
import Ativities from "./pages/Activities.jsx";
import Education from "./pages/Education.jsx";
import Contact from "./pages/Contact.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) { // User is logged in
        setUserInfo(user);
      } else {  // User is not logged in
        setUserInfo(null);
      }
    });
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }

  const login = () => {
    const provider = new GoogleAuthProvider();
    auth.languageCode = 'th';
    signInWithPopup(auth, provider)
      .then((result) => {
        // User logged in successfully
      }).catch((error) => {
        window.alert(error);
      });
  }

  return (
    <BrowserRouter>
      <AppContent userInfo={userInfo} login={login} logout={logout} />
    </BrowserRouter>
  );
}

const AppContent = ({ userInfo, login, logout }) => {
  const location = useLocation(); // Get the current route

  const isPageNotFound = location.pathname === "/404" || location.pathname === "*";

  return (
    <>
      {/* Render Header only if the current route is not PageNotFound */}
      {!isPageNotFound && <Header user={userInfo} login={login} logout={logout} />}

      <Routes>
        <Route path="/" element={<Home user={userInfo} />} />
        <Route path="/information" element={<Infomation user={userInfo} />} />
        <Route path="/activities" element={<Ativities user={userInfo} />} />
        <Route path="/education" element={<Education user={userInfo} />} />
        <Route path="/contact" element={<Contact user={userInfo} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
