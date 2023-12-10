import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [userDetails, setUserDetails] = useState({
        nume: '',
        email: '',
        parola: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === userDetails.email);

        if (userExists) {
            alert('Un utilizator cu acest email există deja.');
        } else {
            users.push(userDetails);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Înregistrare completă!');
            navigate('/login');
        }
    };

    return (
        <div className="signup">
            <h1>Înregistrare</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nume:
                    <input
                        type="text"
                        name="nume"
                        value={userDetails.nume}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Parolă:
                    <input
                        type="password"
                        name="parola"
                        value={userDetails.parola}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Înregistrează-te</button>
            </form>
        </div>
    );
};

export default SignUp;
