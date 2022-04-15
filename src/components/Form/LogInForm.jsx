import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './LogInForm.css'
import app from '../../firebase.init';
import { getAuth, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
const auth = getAuth(app)

const LogInForm = () => {
    const navigate = useNavigate()
    let location = useLocation()
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState('')
    const [registered, setRegistered] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [user] = useAuthState(auth)
    const [createUSersignInWithEmailPass] = useCreateUserWithEmailAndPassword(auth)
    const [signInWithEmailPass] = useSignInWithEmailAndPassword(auth)
    const from = location.state?.from?.pathname || "/";

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPass(e.target.value)
    }
    const handleCheck = e => {
        setRegistered(e.target.checked)
    }
    const handleEmailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("Email verification send")
            })
    }
    const forGetPassBtn = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Password mail send ")
            })
            .catch(error => {
                setError(error.message)
            })

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {

            event.stopPropagation();
        }
        setValidated(true);
        if (!registered) {
            createUSersignInWithEmailPass(email, pass)
                .then(() => {
                    navigate(from, { replace: true })
                })
        } else {
            signInWithEmailPass(email, pass)
                .then(() => {
                    navigate(from, { replace: true })
                })
        }
    };


    const handlePopupBtn = (e) => {
        e.preventDefault()
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })

    }
    return (
        <div className='register'>
            <Form noValidate validated={validated} className='border-3 border-white ' onSubmit={handleSubmit}>
                <h3 className='mb-4'>Please <span className='text-danger'>{registered ? "Log in" : "Register"}</span></h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control onBlur={handleEmail} className='input' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='input' type="password"
                        onBlur={handlePass}
                        placeholder="Password" required />
                    <Button onClick={forGetPassBtn} className='text-decoration-none w-full text-end' variant='link'>Forget Password</Button>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={handleCheck} className='text-start' type="checkbox" label="Already Register" />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Button className='log-in-btn mt-4' type="submit">
                    {
                        registered ? "Log in" : "Register"
                    }
                </Button>
                <p>or continue with</p>
                <div className="google d-flex gap-3 justify-content-center my-4 border-0">
                    <img onClick={handlePopupBtn} className='border border-light  p-3' style={{ width: '70px', height: "80px" }} src='form-img/google.png' alt="" />
                    <img onClick={handlePopupBtn} className='border border-light p-3' style={{ width: '70px', height: "80px" }} src='form-img/github.jpg' alt="" />

                </div>
                <p>Not a member? <Button variant='link' className='text-decoration-none'>
                    Register Now
                </Button></p>


            </Form>
        </div>
    );
};

export default LogInForm;