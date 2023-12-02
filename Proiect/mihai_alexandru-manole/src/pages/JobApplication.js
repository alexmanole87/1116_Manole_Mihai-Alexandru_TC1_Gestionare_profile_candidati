import React, { useState } from 'react';
import './JobApplication.css'

const JobApplication = () => {
    const [application, setApplication] = useState({
        nume: '',
        email: '',
        cv: ''
    });

    const handleChange = (e) => {
        setApplication({ ...application, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aici puteți adăuga logica pentru trimiterea aplicației
        console.log(application);
        alert('Aplicație trimisă!');
    };

    return (
        <div className="job-application">
            <h1>Aplicație pentru Job</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nume:
                    <input type="text" name="nume" value={application.nume} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={application.email} onChange={handleChange} />
                </label>
                <label>
                    Încărcați CV:
                    <input type="file" name="cv" onChange={handleChange} />
                </label>
                <button type="submit">Trimite Aplicația</button>
            </form>
        </div>
    );
};

export default JobApplication;
