import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CandidatList = () => {
    const [candidati, setCandidati] = useState([]);

    useEffect(() => {
        // Setarea titlului paginii
        document.title = "Lista de Candidați";

        axios.get('/candidati')
            .then(response => {
                setCandidati(response.data);
            })
            .catch(error => console.error('There was an error!', error));
    }, []);

    return (
        <div>
            <h2>Lista de Candidați</h2>
            <p>Acesta este un text static pentru testare.</p>
            <ul>
                {candidati.map(candidat => (
                    <li key={candidat.id}>{candidat.nume} {candidat.prenume}</li>
                ))}
            </ul>
        </div>
    );
};

export default CandidatList;
