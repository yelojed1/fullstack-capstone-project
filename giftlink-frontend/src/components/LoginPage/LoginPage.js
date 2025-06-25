import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
    // State variables for login form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle login form submission
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login attempt with:', {
            email,
            password
        });
        // Here you would typically send the credentials to your backend API
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="login-card p-4 border rounded">
                        <h2 className="text-center mb-4 font-weight-bold">Login</h2>
                        
                        <form onSubmit={handleLogin}>
                            {/* Email Input */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoComplete="username"
                                />
                            </div>
                            
                            {/* Password Input */}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="current-password"
                                />
                            </div>
                            
                            {/* Login Button */}
                            <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Login</button>
                        </form>
                        
                        <p className="mt-4 text-center">
                            New here? <a href="/app/register" className="text-primary">Register Here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;