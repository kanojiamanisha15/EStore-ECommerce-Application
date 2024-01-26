import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig'

function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        try {
            const user = await auth.createUserWithEmailAndPassword(email, password, name)
            auth.currentUser.updateProfile({
                displayName: name
            })
            if (user) {
                alert("Account Created Successfully")
                console.log(user);
            }
        } catch (error) {
            alert(error)
        }
        console.log(email, password, name);
    }

    return (
        <div className='main_container_signup'>
            <div className='header'>
                <h2>SignUp</h2>
            </div>
            <div className='box'>
                <input type='text' value={name} placeholder='Username' onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='box'>
                <input type='email' value={email} placeholder='E-Mail' onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='box'>
                <input type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <p>Already have an account <Link to='/'>Login</Link></p>
            <button onClick={submit}>SignUp</button>
        </div>
    )
}

export default SignUp