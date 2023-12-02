import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import JobApplication from './pages/JobApplication';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from "./components/Footer";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                    <Route path="/job-application" element={<PrivateRoute><JobApplication /></PrivateRoute>} />
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

function PrivateRoute({ children }) {
    const { user } = useAuth();

    return user ? children : <Navigate to="/login" />;
}

export default App;
