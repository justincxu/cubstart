import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 
import { auth } from '../firebase-config';
import { useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";

function getUser(string) {
  if (string != null) {
    return (
      string.substring(0, string.indexOf("@"))
    )
  }
}

function Home () {
    function App() {

      const[user, setUser] = useState({});

      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

        return (
        <div>
          <div style={{ 
            backgroundImage: `url("https://1800cabinetwholesalers.com/wp-content/uploads/2014/11/kitchen-cabinet-background-1.jpg")`,  
            marginTop: "20px" ,backgroundSize:'cover', marginLeft: "300px", marginRight: '300px', backgroundPosition: 'center', height: '540px'

          }}>
             <div class="flex flex-col items-center space-y-16 text-xl text-white m-4">
                <Link class="mt-6" to={"/Shirts"}>Shirts</Link>
                <Link to={"/Pants"}>Pants</Link>
                <Link to={"/Jackets"}>Jackets</Link>
                <Link to={"/Shorts"}>Shorts</Link>
                <Link to={"/Accessories"}>Accessories</Link>
                <Link to={"/Shoes"}>Shoes</Link>
           
            </div>   
          </div>
        </div>
        );
      }
    return (
    <div class="text-center font-bold">
        <div className="text-3xl m-4 inline-flex">
          <span class="text-sky-600/100 font-bold">

            {getUser(auth.currentUser?.email)}
          </span>
          <span>
              's Digital Closet
            </span>
        </div>
        <div class="justify-center">
        <App />
        </div>
    </div>
    )
}


export default Home;