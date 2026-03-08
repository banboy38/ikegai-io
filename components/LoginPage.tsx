"use client";

import React from 'react';
import '../styles/css/LoginPage.css';

const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="login-container">
      {/* LEFT SECTION: Visual/Branding */}
      <div className="visual-section">
        <div className="visual-wrapper">
          <img 
            src="/logo.png" 
            alt="Agentic AI Diagram" 
            className="diagram-image" 
          />
        </div>
      </div>

      {/* RIGHT SECTION: Login Form */}
      <div className="form-section">
        {/* KPMG Logo */}
        <div className="logo-header">
          <img src="/kpmg_logo.png" alt="KPMG Logo" className="brand-logo" />
        </div>

        <div className="form-content">
          <header className="form-title-group">
            <p className="brand-subtext">KPMG India</p>
            <h1 className="platform-title">Agentic AI Platform</h1>
          </header>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label>Username</label>
              <input type="text" placeholder="Enter username" />
              <button type="button" className="forgot-link">Forgot username?</button>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
              <button type="button" className="forgot-link">Forgot password?</button>
            </div>

            <button type="submit" className="login-submit-btn">
              Login
            </button>
          </form>

          <footer className="legal-footer">
            <p>
              The Gen AI application is for the use of authorized users only. Individuals 
              using this application without authority, or in excess of their authority 
              may result in legal action. Copyright @KPMG
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;