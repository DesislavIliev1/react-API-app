import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const signIn = () => {
        const url = `http://127.0.0.1:8000/api/login`;
        const dataToUpdate = new FormData();
        dataToUpdate.append('email', email);
        dataToUpdate.append('password', password);
        
        fetch(url, {
            method: 'POST',
            body: dataToUpdate
        })
            .then((response) => response.json())
            .then((updatedData) => {
                // Handle the updated date in your state
                console.log(updatedData);
                setToken(updatedData);

                if(updatedData.status === true){
                    navigate(`/dashboard/${updatedData.data.id}`);
                }
            })
            .catch((error) => {
                // Handle error properly
                console.log(error);
    
        });
    }

    const navigateToRegister = () => {
        navigate('/register');
    };


    return(
       <div className="data">
            <h1>Login</h1>
            <label>
                Email:
                <input type="email"  onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password"  onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button className='button-submit' onClick={signIn}>Login</button>
            <button className='button-submit' onClick={navigateToRegister}>Register</button>
        </div>
        
    );
}

export default Login;