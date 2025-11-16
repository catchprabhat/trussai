import React, { useEffect, useRef } from 'react';
import { Users, Target, Lightbulb, Rocket, Building2 } from 'lucide-react';
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
            See Through Sound, Play Through Connection.
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
                At TrusspAI, we believe that language learning should be accessible to everyone,
                regardless of their abilities. Our mission is to create an inclusive,
                game-based language learning platform that brings blind and sighted users
                together through the power of sound, interaction, and connection.
              </p>
              <p className="mission-text">
                We're revolutionizing the way people learn languages by combining cutting-edge
                AI technology with interactive gaming experiences. Our platform ensures that
                learning is not just educational, but also engaging, fun, and accessible to all.
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
                <Target className="value-icon" />
              </div>
              <h3>Accessibility First</h3>
              <p>
                We're committed to making language learning accessible to everyone, including
                people with visual impairments. Our platform is designed with inclusivity at its
                core.
              </p>
            </div>
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
                We build bridges between blind and sighted learners, creating a supportive
                community where everyone can learn together and from each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do-section">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">What We Do</h2>
          <div className="features-grid">
            <div className="feature-item animate-on-scroll">
              <div className="feature-number">01</div>
              <h3>Game-Based Learning</h3>
              <p>
                Transform language learning into an interactive gaming experience with our
                innovative Vocab Poker platform and educational cards.
              </p>
            </div>
            <div className="feature-item animate-on-scroll">
              <div className="feature-number">02</div>
              <h3>AI-Powered Practice</h3>
              <p>
                Practice speaking and get instant feedback with our AI assistant. Chat with
                friends while playing and get your questions answered in real-time.
              </p>
            </div>
            <div className="feature-item animate-on-scroll">
              <div className="feature-number">03</div>
              <h3>Braille Support</h3>
              <p>
                Blind students learn through comprehensive Braille-supported content followed by
                guided practice, ensuring equal learning opportunities.
              </p>
            </div>
            <div className="feature-item animate-on-scroll">
              <div className="feature-number">04</div>
              <h3>Interactive Gaming</h3>
              <p>
                2-3 students can play together in an interactive gaming environment, fostering
                collaboration and friendly competition.
              </p>
            </div>
            <div className="feature-item animate-on-scroll">
              <div className="feature-number">05</div>
              <h3>Quarterly Events</h3>
              <p>
                Participate in exciting quarterly gaming events designed to keep learners engaged
                and motivated throughout their language learning journey.
              </p>
            </div>
            <div className="feature-item animate-on-scroll">
              <div className="feature-number">06</div>
              <h3>College Courses</h3>
              <p>
                Learn college courses according to your institution's pattern in a gamified way,
                making higher education more accessible and enjoyable.
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
                  src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?w=400"
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
                  src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?w=400"
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
                  src="https://images.pexels.com/photos/34708698/pexels-photo-34708698.jpeg?w=400"
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

      

      {/* Achievements */}
      <section className="achievements-section">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card animate-on-scroll">
              <div className="achievement-number">13.5K+</div>
              <p>Beta Downloads in 2023</p>
            </div>
            <div className="achievement-card animate-on-scroll">
              <div className="achievement-number">100%</div>
              <p>Organic Growth</p>
            </div>
            <div className="achievement-card animate-on-scroll">
              <div className="achievement-number">30+</div>
              <p>Years Combined Experience</p>
            </div>
            <div className="achievement-card animate-on-scroll">
              <div className="achievement-number">50+</div>
              <p>Partner Engineers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="future-section">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">
            <span className="title-orange">Future</span>
          </h2>
          <div className="future-grid">
            <div className="future-card animate-on-scroll">
              <h3>Virtual Reality Integration</h3>
              <p>
                Experience language learning in immersive VR environments, making practice more
                realistic and engaging than ever before.
              </p>
            </div>
            <div className="future-card animate-on-scroll">
              <h3>Deep Tech AI</h3>
              <p>
                Our AI Speaking section will launch separately as a search engine and speaking
                app, powered by advanced deep learning technologies.
              </p>
            </div>
            <div className="future-card animate-on-scroll">
              <h3>TrussJunior</h3>
              <p>
                A specialized version for kids, introducing language learning through games at an
                early age with age-appropriate content and interactions.
              </p>
            </div>
            <div className="future-card animate-on-scroll">
              <h3>Blockchain & NFT</h3>
              <p>
                Use Trusspai coins to buy online and offline, participate in gaming events, and
                unlock exclusive content through our blockchain ecosystem.
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
              Be part of the revolution in inclusive language learning. Whether you're a student,
              educator, or partner, there's a place for you at TrusspAI.
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