import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig';
import 'firebase/compat/auth';

function LoginNew() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        try {
            const user = await auth.signInWithEmailAndPassword(email, password)
            if (user) {
                // console.log(user);
                alert("Login Successfully")
                localStorage.setItem("displayName", auth.currentUser.displayName)
                navigate('home-page')
            }
        } catch (error) {
            alert(error)
        }
        console.log(email, password);
    }

    return (
        <div className='main_container_login'>
            <div className='header'>
                <h2>Login</h2>
            </div>
            <div className='box'>
                <input type='email' value={email} placeholder='E-Mail' onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='box'>
                <input type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <p>Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>
            <button onClick={submit}>Login</button>
        </div>
    )
}

export default LoginNew