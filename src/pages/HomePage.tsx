import React from "react";
import { Link } from "react-router-dom";
import "./home-page.scss";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to Friday AI</h1>
        <p className="tagline">
          Your Intelligent Voice Assistant for Everyday Tasks
        </p>
        <div className="cta-buttons">
          <Link to="/assistant" className="primary-button">
            Start Using Friday
          </Link>
          <Link to="/features" className="secondary-button">
            Learn More
          </Link>
        </div>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="emoji-icon">🎯</span>
            <h3>Smart Assistance</h3>
            <p>
              Get instant help with tasks, information, and decision-making
              through natural conversation.
            </p>
          </div>
          <div className="feature-card">
            <span className="emoji-icon">👁️</span>
            <h3>Visual Analysis</h3>
            <p>
              Upload images for instant analysis and get detailed insights about
              what you see.
            </p>
          </div>
          <div className="feature-card">
            <span className="emoji-icon">🎙️</span>
            <h3>Voice Interaction</h3>
            <p>
              Communicate naturally through voice commands and get spoken
              responses.
            </p>
          </div>
          <div className="feature-card">
            <span className="emoji-icon">🔍</span>
            <h3>Smart Search</h3>
            <p>
              Find information quickly with advanced search capabilities and
              context-aware results.
            </p>
          </div>
        </div>
      </section>

      <section className="capabilities-section">
        <h2>What Friday Can Do</h2>
        <div className="capabilities-grid">
          <div className="capability-item">
            <h3>Task Management</h3>
            <ul>
              <li>Schedule appointments and reminders</li>
              <li>Create and manage to-do lists</li>
              <li>Set alarms and timers</li>
              <li>Track important dates</li>
            </ul>
          </div>
          <div className="capability-item">
            <h3>Information & Research</h3>
            <ul>
              <li>Answer questions on any topic</li>
              <li>Provide real-time information</li>
              <li>Summarize articles and documents</li>
              <li>Generate creative content</li>
            </ul>
          </div>
          <div className="capability-item">
            <h3>Smart Home Control</h3>
            <ul>
              <li>Control smart home devices</li>
              <li>Adjust lighting and temperature</li>
              <li>Manage security systems</li>
              <li>Control entertainment systems</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Experience the Future?</h2>
        <p>
          Start using Jarvis AI today and discover how artificial intelligence
          can enhance your daily life.
        </p>
        <Link to="/assistant" className="primary-button">
          Try Friday Now
        </Link>
      </section>

      <footer className="footer">
        <p>© 2024 Friday AI. All rights reserved. Developed By Krishna</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
