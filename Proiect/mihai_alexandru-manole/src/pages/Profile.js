import React, { useState } from 'react';
import './Profile.css'
const Profile = () => {
    const [profile, setProfile] = useState({
        nume: '',
        email: '',
        profesie: ''
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aici puteți adăuga logica pentru actualizarea profilului
        console.log(profile);
        alert('Profil actualizat!');
    };

    return (
        <div className="profile">
            <h1>Profilul Meu</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nume:
                    <input type="text" name="nume" value={profile.nume} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={profile.email} onChange={handleChange} />
                </label>
                <label>
                    Profesie:
                    <input type="text" name="profesie" value={profile.profesie} onChange={handleChange} />
                </label>
                <button type="submit">Actualizează Profilul</button>
            </form>
        </div>
    );
};

export default Profile;
