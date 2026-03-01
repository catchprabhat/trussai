import React, { useEffect, useRef } from 'react';
import { Users, Lightbulb } from 'lucide-react';
import './About.css';

const About = () => {
  const observerRef = useRef(null);

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

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <h1 className="about-hero-title animate-on-scroll">
            About <span className="title-orange">TrusspAI</span>
          </h1>
          <p className="about-hero-subtitle animate-on-scroll">
            Turn Lessons into Adventure, Connections into Impact.
          </p>
          <div className="about-hero-divider"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="mission-grid">
            <div className="mission-content animate-on-scroll">
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-text">
                Our mission is to transform education into an engaging and inclusive experience by enabling institutions to convert traditional courses into AI-powered interactive learning games accessible to learners of all abilities.
              </p>
              
            </div>
            <div className="mission-image animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?w=600"
                alt="Team collaboration"
                className="mission-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="values-section">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Our Vision & Values</h2>
          <div className="values-grid">
            <div className="value-card animate-on-scroll">
              <div className="value-icon-wrapper">
                <Lightbulb className="value-icon" />
              </div>
              <h3>Innovation</h3>
              <p>
                By combining AI, gaming, and Braille-supported content, we're pioneering new
                ways of learning that are both effective and engaging for all users.
              </p>
            </div>
            <div className="value-card animate-on-scroll">
              <div className="value-icon-wrapper">
                <Users className="value-icon" />
              </div>
              <h3>Community</h3>
              <p>
                We build bridges between different learners, creating a supportive community where everyone can learn together and from each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Our Team</h2>
          <p className="team-subtitle animate-on-scroll">
            Over 30+ years of combined experience
          </p>
          <div className="team-grid">
            <div className="team-member animate-on-scroll">
              <div className="team-img-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/rahul.jpg`}
                  alt="Rahul Singh"
                  className="team-img"
                />
              </div>
              <h3>Rahul Singh</h3>
              <p className="team-role">Co-founder, CEO</p>
              <div className="team-experience">
                <p>Current: TrusspAI Enterprises</p>
                <p>Former: 7+ years of Experience in industry</p>
              </div>
            </div>
            <div className="team-member animate-on-scroll">
              <div className="team-img-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/prabhat.png`}
                  alt="Prabhat Padhy"
                  className="team-img"
                />
              </div>
              <h3>Prabhat Padhy</h3>
              <p className="team-role">Co-founder, CTO</p>
              <div className="team-experience">
                <p>Current: CISCO senior software engineer</p>
                <p>19+ years of experience in full stack development</p>
              </div>
            </div>
            <div className="team-member animate-on-scroll">
              <div className="team-img-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/abhineet%20(2).png`}
                  alt="Abhineet Krishna"
                  className="team-img"
                />
              </div>
              <h3>Abhineet Krishna</h3>
              <p className="team-role">Freelance Graphic designer & Tester</p>
              <div className="team-experience">
                <p>6+ years of experience in game development on unity platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="future-section">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">
            <span className="title-orange">Scalable & Sustainable Future</span>
          </h2>
          <div className="future-grid">
            <div className="future-card animate-on-scroll">
              <h3>Inclusive Extended Reality</h3>
              <p>
                IER for students to provide them
very futuristic environment.
              </p>
            </div>
            <div className="future-card animate-on-scroll">
              <h3>Independent courses</h3>
              <p>
                Independent tutors/professors
can create their own game to make
money.
              </p>
            </div>
            <div className="future-card animate-on-scroll">
              <h3>Merchandise</h3>
              <p>
                In-app purchases.
              </p>
            </div>
            <div className="future-card animate-on-scroll">
              <h3>Sponsered Gaming Event</h3>
              <p>
                Quartely 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="section-container">
          <div className="about-cta-content animate-on-scroll">
            <h2>Join Us in Our Mission</h2>
            <p>
              Be part of the revolution in the education sector. Whether you're a student, educator, or partner, there's a place for you at TrusspAI.
            </p>
            <a href="/contact" className="cta-button">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
