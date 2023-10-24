import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import "./Login.style.css"
const Login = () => {
    const [email, setEmail] = React.useState()
    const [emailError, setEmailError] = React.useState("")
    const [password, setPassword] = React.useState()
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const handleEmailChange = (event) => {
        const emailValue = event.target.value.toLowerCase();
        setEmail(emailValue);
        if (!EMAIL_PATTERN.test(emailValue)) {
            setEmailError('Email not valid');
        } else {
            setEmailError('');
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        login(email)
        navigate("/dashboard")
    }

    return (
        <>
            <main className='parent'>
                <section className='loginContainer '>
                    <div className='container'>
                        <form className='login__form' onSubmit={handleSubmit}>
                            <label htmlFor="email">Email:</label>
                            <input className='login__form__input-field' type="email" name="email" id="email" placeholder='email' autoComplete='email' value={email} onChange={handleEmailChange} />
                            {
                                email && emailError && <p className='login__form__error-message'>{emailError}</p>
                            }
                            <label htmlFor="password">Password:</label>
                            <input type="password" className='login__form__input-field' name="password" id="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            {
                                email && emailError ? <button className='login__form__submit-button--disabled' disabled>Login</button>
                                    :
                                    <button className='login__form__submit-button--active'>Login</button>

                            }
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login