import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandidatList from './pages/CandidatList';
import CandidatForm from './pages/CandidatForm';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/candidateList" element={<CandidatList />} />
                <Route path="/addCandidate" element={<CandidatForm />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
