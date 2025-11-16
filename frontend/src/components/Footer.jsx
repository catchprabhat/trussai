import React from 'react';
import { Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="logo-truss">TRUSS</span>
              <span className="logo-pai">PAI</span>
            </h3>
            <p className="footer-tagline">See Through Sound, Play Through Connection.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>Rahul Singh</li>
                <li>+324664545615</li>
                <li>rahulsinghme286@gmail.com</li>
                <li>Chaussee de louvain 918,<br />1140 Evere</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://facebook.com/TRUSSPAI" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Facebook size={24} />
                  <span>@TRUSSPAI</span>
                </a>
                <a href="https://twitter.com/TRUSSPAI" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Twitter size={24} />
                  <span>@TRUSSPAI</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 TrusspAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;