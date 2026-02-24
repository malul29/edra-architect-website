"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple authentication (in production, use proper backend auth)
        if (credentials.username === "admin" && credentials.password === "edra2024") {
            localStorage.setItem("edra_admin", "true");
            router.push("/admin/dashboard");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-box">
                    <Image src="/edra-logo.png" alt="EDRA" className="login-logo" width={100} height={100} />
                    <h1 className="login-title">Admin Dashboard</h1>
                    <p className="login-subtitle">Sign in to manage content</p>

                    {error && <div className="login-error">{error}</div>}

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="login-field">
                            <label>Username</label>
                            <input
                                type="text"
                                value={credentials.username}
                                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                                placeholder="Enter username"
                                autoComplete="username"
                                required
                            />
                        </div>

                        <div className="login-field">
                            <label>Password</label>
                            <input
                                type="password"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                placeholder="Enter password"
                                autoComplete="current-password"
                                required
                            />
                        </div>

                        <button type="submit" className="login-btn">
                            Sign In
                        </button>
                    </form>

                    {/* Development Credentials - Remove in Production */}
                    <div style={{
                        marginTop: '2rem',
                        padding: '1rem',
                        background: 'rgba(52, 199, 89, 0.1)',
                        border: '1px solid rgba(52, 199, 89, 0.3)',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.7)',
                        textAlign: 'left'
                    }}>
                        <strong style={{ color: '#34c759', display: 'block', marginBottom: '0.5rem' }}>
                            🔐 Development Access
                        </strong>
                        <div style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
                            Username: <strong style={{ color: '#fff' }}>admin</strong><br />
                            Password: <strong style={{ color: '#fff' }}>edra2024</strong>
                        </div>
                    </div>

                    <p className="login-footer">
                        EDRA Arsitek Indonesia © 2024
                    </p>
                </div>
            </div>
        </div>
    );
}
