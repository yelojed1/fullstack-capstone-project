import React, { useState } from 'react';
import './RegisterPage.css';

function RegisterPage() {
    // State variables for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle registration form submission
    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Registration submitted:', {
            firstName,
            lastName,
            email,
            password
        });
        // Here you would typically send the data to your backend API
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="register-card p-4 border rounded">
                        <h2 className="text-center mb-4 font-weight-bold">Register</h2>
                        
                        <form onSubmit={handleRegister}>
                            {/* First Name Input */}
                            <div className="mb-4">
                                <label htmlFor="firstName" className="form label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            
                            {/* Last Name Input */}
                            <div className="mb-4">
                                <label htmlFor="lastName" className="form label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                            
                            {/* Email Input */}
                            <div className="mb-4">
                                <label htmlFor="email" className="form label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            
                            {/* Password Input */}
                            <div className="mb-4">
                                <label htmlFor="password" className="form label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            
                            {/* Register Button */}
                            <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>Register</button>
                        </form>
                        
                        <p className="mt-4 text-center">
                            Already a member? <a href="/app/login" className="text-primary">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;