import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import  axios  from 'axios';
import './Register.css'


function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setC_password] = useState('');
    const navigate = useNavigate();
    // const [c_password, setC_password] = useState('');

    
    
    const signUp = () => {

        const url = `http://127.0.0.1:8000/api/register`;
        const dataToUpdate = new FormData();
        dataToUpdate.append('name', name);
        dataToUpdate.append('email', email);
        dataToUpdate.append('password', password);
        dataToUpdate.append('c_password', c_password);

        console.log(dataToUpdate.password);

        fetch(url, {
          method: 'POST',
          body: dataToUpdate
        })
        .then((response) => response.json())
        .then((updatedData) => {
            // Handle the updated date in your state
            console.log(updatedData);


            if(updatedData.status === true){
                navigate('/login');
            }
        })
      
        .catch((error) => {
        // Handle error properly
            console.log(error);
    });
    
    
}

const navigateToLogin = () => {
    navigate('/login');
};


        
    

    return (
        <div className="data" >
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <label>
                RePassword:
                <input type="password" value={c_password} onChange={(e) => setC_password(e.target.value)} />
            </label>
            <br />
            <button className='button-submit' onClick={signUp}>Register</button>
            <button className='button-submit' onClick={navigateToLogin}>Login</button>
        </div>
    );
}

export default Register;