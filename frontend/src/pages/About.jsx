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

      <section className="collaboration-section">
        <div className="section-container">
          <div className="collaboration-grid">
            <div className="collaboration-card animate-on-scroll">
              <div className="collaboration-logo">
                <img
                  src={`${process.env.PUBLIC_URL}/sulopa_logo.jpg`}
                  alt="Sulopa"
                  className="collaboration-logo-img collaboration-logo-img--wide"
                  loading="lazy"
                />
              </div>
              <div className="collaboration-title">Sulopa Technologies</div>
              <div className="collaboration-subtitle">Collaboration with Sulopa</div>
              <div className="collaboration-text">
                Team of dedicated 50+ Software engineers working in same sector since last 6+
                years. To minimize the cost from starting
              </div>
            </div>

            <div className="collaboration-card animate-on-scroll">
              <div className="collaboration-logo collaboration-logo--stack">
                <div className="collaboration-logos-row">
                  <img
                    src={`${process.env.PUBLIC_URL}/VUB.png`}
                    alt="VUB"
                    className="collaboration-logo-img collaboration-logo-img--round"
                    loading="lazy"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/MMU.jpg`}
                    alt="MMU"
                    className="collaboration-logo-img collaboration-logo-img--round"
                    loading="lazy"
                  />
                </div>
                
                  <img
                    src={`${process.env.PUBLIC_URL}/UCO.png`}
                    alt="UCO"
                    className="collaboration-logo-img collaboration-logo-img--badge"
                    loading="lazy"
                  />
                
              </div>
              <div className="collaboration-title">
                VUB, MMU, UOA AND UCO IN
                <br />
                DISCUSSION
              </div>
              <div className="collaboration-subtitle">Language partners</div>
              <div className="collaboration-text">
                In discussion with multiple universities to bring them on board as language
                partner and Sign the contract
              </div>
            </div>

            <div className="collaboration-card animate-on-scroll">
              <div className="collaboration-logo">
                <img
                  src={`${process.env.PUBLIC_URL}/becentral.jpg`}
                  alt="BeCentral"
                  className="collaboration-logo-img collaboration-logo-img--plain"
                  loading="lazy"
                />
              </div>
              <div className="collaboration-title">Becentral</div>
              <div className="collaboration-subtitle">Collaboration with Becentral</div>
              <div className="collaboration-text">
                Working with
                <br />
                Becentral to
                <br />
                achieve the target
              </div>
            </div>

            <div className="collaboration-card animate-on-scroll">
              <div className="collaboration-logo">
                <img
                  src={`${process.env.PUBLIC_URL}/startlab_brussels_logo.jpg`}
                  alt="StartLab.Brussels"
                  className="collaboration-logo-img collaboration-logo-img--plain"
                  loading="lazy"
                />
              </div>
              <div className="collaboration-title">Startlab.brussels</div>
              <div className="collaboration-subtitle">Collaboration with Startlab</div>
              <div className="collaboration-text">
                Working with
                <br />
                Startlab.brussels
                <br />
                to achieve the target
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="revenue-section">
        <div className="section-container">
          <div className="revenue-shell animate-on-scroll">
            <div className="revenue-shell-header">
              <h2 className="revenue-shell-title">Revenue</h2>
            </div>

            <div className="revenue-forecast-card">
              <div className="revenue-forecast-title">Revenue Forecast</div>
              <div className="revenue-forecast-legend">
                <div className="revenue-legend-item">
                  <span className="revenue-legend-swatch revenue-legend-swatch--blue" />
                  <span>Target Prelaunch</span>
                </div>
                <div className="revenue-legend-item">
                  <span className="revenue-legend-swatch revenue-legend-swatch--red" />
                  <span>Proposal sent</span>
                </div>
              </div>

              <div className="revenue-chart">
                <div className="revenue-y-axis">
                  <span className="revenue-y-tick">100000</span>
                  <span className="revenue-y-tick">75000</span>
                  <span className="revenue-y-tick">50000</span>
                  <span className="revenue-y-tick">25000</span>
                  <span className="revenue-y-tick revenue-y-tick--zero">0</span>
                </div>

                <div className="revenue-plot" role="img" aria-label="Revenue Forecast bar chart">
                  <div className="revenue-gridline" style={{ top: '0%' }} />
                  <div className="revenue-gridline" style={{ top: '25%' }} />
                  <div className="revenue-gridline" style={{ top: '50%' }} />
                  <div className="revenue-gridline" style={{ top: '75%' }} />
                  <div className="revenue-gridline revenue-gridline--base" style={{ top: '100%' }} />

                  <div className="revenue-year">
                    <div className="revenue-year-bars">
                      <div className="revenue-bar-group">
                        <div className="revenue-value revenue-value--blue">100000</div>
                        <div className="revenue-bar revenue-bar--blue" style={{ '--bar': 100 }} />
                      </div>
                      <div className="revenue-bar-group">
                        <div className="revenue-value revenue-value--red">10499</div>
                        <div className="revenue-bar revenue-bar--red" style={{ '--bar': 10.5 }} />
                      </div>
                    </div>
                    <div className="revenue-year-label">2026</div>
                  </div>

                  <div className="revenue-year">
                    <div className="revenue-year-bars">
                      <div className="revenue-bar-group">
                        <div className="revenue-value revenue-value--blue">0</div>
                        <div className="revenue-bar revenue-bar--blue" style={{ '--bar': 0 }} />
                      </div>
                      <div className="revenue-bar-group">
                        <div className="revenue-value revenue-value--red">0</div>
                        <div className="revenue-bar revenue-bar--red" style={{ '--bar': 0 }} />
                      </div>
                    </div>
                    <div className="revenue-year-label">2027</div>
                  </div>

                  <div className="revenue-year">
                    <div className="revenue-year-bars">
                      <div className="revenue-bar-group">
                        <div className="revenue-value revenue-value--blue">0</div>
                        <div className="revenue-bar revenue-bar--blue" style={{ '--bar': 0 }} />
                      </div>
                      <div className="revenue-bar-group">
                        <div className="revenue-value revenue-value--red">0</div>
                        <div className="revenue-bar revenue-bar--red" style={{ '--bar': 0 }} />
                      </div>
                    </div>
                    <div className="revenue-year-label">2028</div>
                  </div>

                  <div className="revenue-year">
                    <div className="revenue-year-bars">
                      <div className="revenue-bar-group">
                        <div className="revenue-value revenue-value--blue">0</div>
                        <div className="revenue-bar revenue-bar--blue" style={{ '--bar': 0 }} />
                      </div>
                      <div className="revenue-bar-group">
                        <div className="revenue-value revenue-value--red">0</div>
                        <div className="revenue-bar revenue-bar--red" style={{ '--bar': 0 }} />
                      </div>
                    </div>
                    <div className="revenue-year-label">2029</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="revenue-shell-footer" />
          </div>
        </div>
      </section>

      <section className="raising-section">
        <div className="section-container">
          <div className="raising-hero animate-on-scroll">
            <h2 className="raising-title">We are raising</h2>
            <div className="raising-amount">
              <span className="raising-currency">€</span>
              <span className="raising-highlight">350K Thousand</span>
            </div>
          </div>
        </div>
      </section>

      <section className="strategy-section">
        <div className="section-container">
          <div className="strategy-shell animate-on-scroll">
            <div className="strategy-head">
              <div className="strategy-kicker">Strategy</div>
              <div className="strategy-title">Raising €350K to expand</div>
            </div>

            <div className="strategy-grid">
              <div className="strategy-bubble">
                <div className="strategy-bubble-title">Products</div>
                <div className="strategy-bubble-title">Expansion</div>
                <div className="strategy-bubble-amount">€350K</div>
              </div>

              <div className="strategy-rows">
                <div className="strategy-row">
                  <div className="strategy-percent">60%</div>
                  <div className="strategy-arrow" aria-hidden="true">
                    <svg viewBox="0 0 120 44" preserveAspectRatio="none">
                      <path d="M0 12H82V0L120 22L82 44V32H0Z" fill="#dcdcdcff" />
                    </svg>
                  </div>

                  <div className="strategy-pair">
                    <div className="strategy-item">
                      <div className="strategy-icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M7 3h7l3 3v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 3v4h4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11 14a3 3 0 1 0 0.01 0Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M15.5 18.5l2 2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="strategy-item-text">
                        <div className="strategy-item-title">R &amp; D</div>
                        <div className="strategy-item-sub">
                          Hiring team for
                          <br />
                          Development and research
                        </div>
                      </div>
                    </div>

                    <div className="strategy-item">
                      <div className="strategy-icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M4 21V10l5-3v3l6-4v4l5-3v14H4Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 21v-5h3v5M14 21v-8h3v8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="strategy-item-text">
                        <div className="strategy-item-title">COGS</div>
                        <div className="strategy-item-sub">
                          Initial printing of
                          <br />
                          Educational card and
                          <br />
                          Set up cost
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="strategy-row strategy-row--highlight">
                  <div className="strategy-percent">30%</div>
                  <div className="strategy-arrow" aria-hidden="true">
                    <svg viewBox="0 0 120 44" preserveAspectRatio="none">
                      <path d="M0 12H82V0L120 22L82 44V32H0Z" fill="#dcdcdcff" />
                    </svg>
                  </div>

                  <div className="strategy-highlight-card">
                    <div className="strategy-item">
                      <div className="strategy-icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M3 10.5V21h10.5V10.5H3Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.5 7.5H7.5L10.5 3h6V7.5Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.5 10.5H21V21h-7.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="strategy-item-text">
                        <div className="strategy-item-title">Sales and Marketing</div>
                        <div className="strategy-item-sub">
                          Paid campaign, School and
                          <br />
                          universities
                        </div>
                      </div>
                    </div>

                    <div className="strategy-item">
                      <div className="strategy-icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <circle
                            cx="11"
                            cy="11"
                            r="6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M16 16l5 5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="strategy-item-text">
                        <div className="strategy-item-title">SEO</div>
                        <div className="strategy-item-sub">Long term content- SEO</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="strategy-row">
                  <div className="strategy-percent">10%</div>
                  <div className="strategy-arrow" aria-hidden="true">
                    <svg viewBox="0 0 120 44" preserveAspectRatio="none">
                      <path d="M0 12H82V0L120 22L82 44V32H0Z" fill="#dcdcdcff" />
                    </svg>
                  </div>

                  <div className="strategy-item strategy-item--others">
                    <div className="strategy-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="6" cy="12" r="2" fill="currentColor" />
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                        <circle cx="18" cy="12" r="2" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="strategy-item-text">
                      <div className="strategy-item-title">Others</div>
                      <ul className="strategy-others-list">
                        <li>Accounting</li>
                        <li>Legal</li>
                        <li>Unforeseen</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
