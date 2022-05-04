import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Category from './Components/Category';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config"; 
import Author from './Components/Author';

function App() {
  const[user, setUser] = useState({});


  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  })

  return (
  <>
  <Router>
  <Navbar />
 
      <Routes>
          {!user && (
            <>
            <Route path='/' element={< Author />} />
            <Route path='/SignUp' element={< SignUp />}></Route>
            <Route path='/SignIn' element={< SignIn />}></Route>
            </>
            )}
          {user && (
            <>
            <Route path='/' element={< Home />}></Route>
            <Route path='/Shirts' element={< Category name="Shirts" />}></Route>
            <Route path='/Pants' element={< Category name="Pants"/>}></Route>
            <Route path='/Jackets' element={< Category name="Jackets"/>}></Route>
            <Route path='/Shorts' element={< Category name="Shorts"/>}></Route>
            <Route path='/Accessories' element={< Category name="Accessories"/>}></Route>
            <Route path='/Shoes' element={< Category name="Shoes"/>}></Route>
            </>
            )}
      </Routes>

  </Router>
  </>
  );
}


export default App;
