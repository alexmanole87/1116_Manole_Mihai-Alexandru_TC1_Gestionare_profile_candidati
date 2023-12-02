import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Asigurați-vă că aveți acest fișier de stiluri

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        parola: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === credentials.email && user.parola === credentials.parola);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            alert('Autentificare reușită!');
            navigate('/profile'); // Redirecționare către pagina de profil
        } else {
            alert('Detalii de autentificare incorecte.');
        }
    };

    const handleSignUpRedirect = () => {
        navigate('/signup'); // Redirecționare către pagina de signup
    };

    return (
        <div className="login">
            <h1>Autentificare</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Parolă:
                    <input
                        type="password"
                        name="parola"
                        value={credentials.parola}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Autentifică-te</button>
            </form>
            <button onClick={handleSignUpRedirect} className="signup-redirect">
                Nu ai un cont? Înregistrează-te
            </button>
        </div>
    );
};

export default Login;
