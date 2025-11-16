import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/sonner';
import './Contact.css';

function Contact() {
  const { toast } = useToast();
  const observerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <Toaster />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1 className="contact-hero-title animate-on-scroll">
            Get In <span className="title-orange">Touch</span>
          </h1>
          <p className="contact-hero-subtitle animate-on-scroll">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
          <div className="contact-hero-divider"></div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-main-section">
        <div className="section-container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info animate-on-scroll">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-subtitle">
                Reach out to us through any of these channels. We're here to help!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <MapPin className="contact-icon" />
                  </div>
                  <div className="contact-text">
                    <h3>Address</h3>
                    <p>Rue de Grand-Bigard 14,</p>
                    <p>1082 Brussels Belgium
</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <Phone className="contact-icon" />
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+324664545615</p>
                    <p>Rahul Singh</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <Mail className="contact-icon" />
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>rahulsinghme286@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a
                    href="https://facebook.com/TRUSSPAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Facebook size={24} />
                    <span>@TRUSSPAI</span>
                  </a>
                  <a
                    href="https://twitter.com/TRUSSPAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Twitter size={24} />
                    <span>@TRUSSPAI</span>
                  </a>
                </div>
              </div>

              <div className="handshake-image">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
                  alt="Partnership"
                  className="handshake-img"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper animate-on-scroll">
              <h2 className="form-title">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows="6"
                    className="form-textarea"
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="submit-button">
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - Using placeholder) */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps?q=Rue%20de%20Grand-Bigard%2014,%201082%20Brussels%20Belgium&output=embed"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item animate-on-scroll">
              <h3>What is TrusspAI?</h3>
              <p>
                TrusspAI is a game-based language learning platform that brings blind and sighted
                users together through interactive gaming experiences and AI-powered learning.
              </p>
            </div>
            <div className="faq-item animate-on-scroll">
              <h3>How can I get started?</h3>
              <p>
                You can download our app or sign up on our platform. We offer both free and
                premium membership options to suit your learning needs.
              </p>
            </div>
            <div className="faq-item animate-on-scroll">
              <h3>Is the platform accessible for blind users?</h3>
              <p>
                Yes! We provide comprehensive Braille-supported content and audio guidance to
                ensure equal learning opportunities for all users.
              </p>
            </div>
            <div className="faq-item animate-on-scroll">
              <h3>What languages are available?</h3>
              <p>
                We offer multiple language courses and are constantly expanding our language
                library. Contact us to learn about specific language availability.
              </p>
            </div>
            <div className="faq-item animate-on-scroll">
              <h3>How do I contact support?</h3>
              <p>
                You can reach us through the contact form above, email us directly, or call our
                support line. We're here to help!
              </p>
            </div>
            <div className="faq-item animate-on-scroll">
              <h3>Are there educational partnerships available?</h3>
              <p>
                Yes! We collaborate with educational institutions, blind institutes, and
                organizations. Contact us to discuss partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;