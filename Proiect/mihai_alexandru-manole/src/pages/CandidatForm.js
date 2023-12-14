import React, { useState } from 'react';
import axios from 'axios';

const CandidatForm = () => {
    const [candidat, setCandidat] = useState({
        nume: '',
        prenume: '',
        email: ''
    });

    const handleChange = (e) => {
        setCandidat({ ...candidat, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/candidati', candidat)
            .then(response => {
                console.log(response.data);
                // Redirecționare sau actualizare listă candidați
            })
            .catch(error => console.error('There was an error!', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Adaugă Candidat</h2>
            <label>
                Nume:
                <input type="text" name="nume" value={candidat.nume} onChange={handleChange} />
            </label>
            <label>
                Prenume:
                <input type="text" name="prenume" value={candidat.prenume} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={candidat.email} onChange={handleChange} />
            </label>
            <button type="submit">Adaugă</button>
        </form>
    );
};

export default CandidatForm;
