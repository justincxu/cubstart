import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config"; 

function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPw, setRegisterPw] = useState("");

    const[user, setUser] = useState({});
    let navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPw);
            console.log(user);
            navigate("/")

        } catch (error) {
            console.log(error.message);
        }
    }

    const logOut = async () => {
        await signOut(auth);
        navigate("/");
    }

    return (
        <div className="flex flex-col">  
        
            {user?.email}

            <div className="flex flex-col">
                <div>Sign Up</div>
                <input type="text" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setRegisterPw(e.target.value)}/>
                <button onClick={register}>Submit</button>
            </div>
            

            <button onClick={logOut}>Log Out</button>
        </div>
    )

}
export default SignUp