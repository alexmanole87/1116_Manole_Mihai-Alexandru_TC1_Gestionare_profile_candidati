import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Presupunând că AuthContext este în același director

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/'); // Redirecționare către pagina principală după logout
    };

    return (
        <nav className="navbar">
            <Link to="/">Acasă</Link>
            {user ? (
                <>
                    <Link to="/profile">Profil</Link>
                    <Link to="/job-application">Aplicații Job</Link>
                    <Link to="/candidateList">Lista Candidați</Link>
                    <Link to="/addCandidate">Adaugă Candidat</Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;
