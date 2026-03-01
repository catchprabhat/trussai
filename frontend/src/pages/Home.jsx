import React, { useEffect, useRef } from 'react';
import {
  Clock,
  DollarSign,
  CheckCircle,
  Users,
  MessageSquare,
  Trophy,
  Zap,
  Globe,
  TrendingUp,
  Award,
  Heart,
} from 'lucide-react';
import './Home.css';

function Home() {
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
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content animate-on-scroll">
            {/* Removed the logo-badge button */}
            {/* <div className="hero-logo">
              <div className="logo-badge">
                <span className="logo-text">TRUSSPAI</span>
              </div>
            </div> */}
            <h1 className="hero-title">
              <span className="title-white">TRUSSPAI</span>
            </h1>
            <div className="hero-title-divider" aria-hidden="true" />
            <p className="hero-tagline">
              Turn Lessons into Adventure, Connections into Impact.
            </p>
            <h2 className="hero-subtitle">
              <span className="highlight">The world’s first B2B SaaS platform that enables
institutions to transform traditional courses
into engaging,inclusive, unbiased, and scalable interactive learning games
 using AI — in just one click.
</span>  
            </h2>
            <a
              className="hero-badge"
              href="https://docs.google.com/forms/d/1oRj0yHP0gDVIDbtha7NajVt5heuOV_t2TUge80R5WvM/edit?usp=drive_web&ouid=101506192588054239063"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Today
            </a>
          </div>
          <div className="hero-image animate-on-scroll">
            <img
              src={`${process.env.PUBLIC_URL}/homee.jpg`}
              alt="TrusspAI Hero"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="problems-section">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Problems</h2>
          <div className="problems-layout">
            <div className="problems-media animate-on-scroll">
              <img
                src={`${process.env.PUBLIC_URL}/problem.jpg`}
                alt="Problems illustration"
                className="problems-image"
              />
            </div>
            <div className="problems-content animate-on-scroll">
              <h3 className="problems-heading">
                <span className="problems-heading-strong">Many Schools/Universities</span>{' '}
                struggle to find a solution:
              </h3>
              <ul className="problems-bullets">
                <li>
                  <span className="bullet-icon" aria-hidden="true">
                    <CheckCircle className="bullet-icon-svg" />
                  </span>
                  <span className="bullet-text">
                    Institutions are still bound by traditional approaches to education. Language
                    learning is one of the example.
                  </span>
                </li>
                <li>
                  <span className="bullet-icon" aria-hidden="true">
                    <MessageSquare className="bullet-icon-svg" />
                  </span>
                  <span className="bullet-text">
                    The interface feels complex and unintuitive for modern learners.
                  </span>
                </li>
                <li>
                  <span className="bullet-icon" aria-hidden="true">
                    <Users className="bullet-icon-svg" />
                  </span>
                  <span className="bullet-text">
                    Available platforms have heavy setup and maintenance demand technical
                    expertise, and increase complexity and operational costs for institutions.
                  </span>
                </li>
                <li>
                  <span className="bullet-icon" aria-hidden="true">
                    <Clock className="bullet-icon-svg" />
                  </span>
                  <span className="bullet-text">
                    Time Consuming process, extra time and effort must be to learn a skill
                  </span>
                </li>
                <li>
                  <span className="bullet-icon" aria-hidden="true">
                    <MessageSquare className="bullet-icon-svg" />
                  </span>
                  <span className="bullet-text">
                    Teachers/ Professors cannot design their own games
                  </span>
                </li>
                <li>
                  <span className="bullet-icon" aria-hidden="true">
                    <Trophy className="bullet-icon-svg" />
                  </span>
                  <span className="bullet-text">No Incentive or fun hence students lose interest</span>
                </li>
                <li>
                  <span className="bullet-icon" aria-hidden="true">
                    <Award className="bullet-icon-svg" />
                  </span>
                  <span className="bullet-text">
                    Students are leaving different courses due to traditional way of teaching
                  </span>
                </li>
                <li>
                  <span className="bullet-icon" aria-hidden="true">
                    <Heart className="bullet-icon-svg" />
                  </span>
                  <span className="bullet-text">
                    Parents cannot create custom practice sessions for their children or play it
                    together with them.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="section-container">
          <div className="solutions-grid">
            <div className="solutions-visual animate-on-scroll">
              <h2 className="solutions-title animate-on-scroll">Solutions</h2>
              {/* Blue box container with both images */}
              <div className="visual-box">
                <img
                  src={`${process.env.PUBLIC_URL}/EC.png`}
                  alt="TrusspAI App"
                  className="app-mockup-inbox"
                />
              </div>
            </div>
            <div className="solutions-content">
              <h2 className="section-title animate-on-scroll">
                <span className="title-orange">Truss PAI</span>
              </h2>
              <div className="solution-items">
                <div className="solution-item animate-on-scroll">
                  <CheckCircle className="solution-icon" />
                  <p>
                    Institutions can convert their traditional courses into
interactive learning games for all students —
including those with disabilities — with just one click
                  </p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <MessageSquare className="solution-icon" />
                  <p>
                    Practice speaking and receive guidance with AI,
chat and connect with friends while playing, and
get your questions answered instantly by AI
                  </p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <Users className="solution-icon" />
                  <p>
                    Students are offered an interactive gaming
environment where they can team up with friends
to play, if they choose.
                  </p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <Clock className="solution-icon" />
                  <p>
                    Students no longer have to invest extra time in 
learning — they can now learn during their leisure time
                  </p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <MessageSquare className="solution-icon" />
                  <p>Tools to create quizzes, simulations, and gamified
learning experiences without technical expertise.</p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <Trophy className="solution-icon" />
                  <p>Quarterly gaming events for students</p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <Award className="solution-icon" />
                  <p>Teachers/professors can design their own games for
their students and keep track of their students progress.</p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <Heart className="solution-icon" />
                  <p>Students who cannot afford costly education also benefit through memberships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="information-section">
        <div className="section-container">
          <h2 className="information-kicker animate-on-scroll">Information</h2>
          <h3 className="information-heading animate-on-scroll">
            60K+ Institutes connected through European lifelong learning networks
          </h3>
          <div className="info-grid">
            <div className="info-stats animate-on-scroll">
              <p className="information-lead">
                LLLP market is projected to
                <br />
                be 231 Billions USD by 2032
              </p>
              <p className="information-note">
                Rapid increase in <span className="information-note-em">interactive learning</span>
                <br />
                are making teachers adopt different
                <br />
                technologies
              </p>
            </div>
            <div className="info-chart animate-on-scroll">
              <h3 className="chart-title">Digital game-based learning</h3>
              <div className="chart-bars">
                <div className="chart-bar-item">
                  <span className="bar-label">Digital game based learning to augment lessons</span>
                  <div className="bar-wrapper">
                    <div className="bar" style={{ width: '74%', backgroundColor: '#4ade80' }}>
                      <span className="bar-value">74%</span>
                    </div>
                  </div>
                </div>
                <div className="chart-bar-item">
                  <span className="bar-label">Class time for game based learning</span>
                  <div className="bar-wrapper">
                    <div className="bar" style={{ width: '93%', backgroundColor: '#fe0000ff' }}>
                      <span className="bar-value">93%</span>
                    </div>
                  </div>
                </div>
                <div className="chart-bar-item">
                  <span className="bar-label">Teacher agree importance of digital learning</span>
                  <div className="bar-wrapper">
                    <div className="bar" style={{ width: '54%', backgroundColor: '#ffd23f' }}>
                      <span className="bar-value">54%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis Section */}
      <section className="competitive-section">
        <div className="section-container">
          <div className="competitive-header animate-on-scroll">
            <div className="competitive-kicker">Competitive Analysis</div>
            <h2 className="competitive-heading">
              <span className="competitive-heading-accent">Competitive edge</span> in visual
              <br />
              educational industry
            </h2>
          </div>
          <div className="competitive-table-wrapper animate-on-scroll">
            <table className="competitive-table">
              <thead>
                <tr>
                  <th className="ca-head ca-head--name" />
                  <th className="ca-head">Interactive<br />Gaming/<br />learning</th>
                  <th className="ca-head">Design your<br />own game</th>
                  <th className="ca-head">Learn with<br />friends &amp; AI</th>
                  <th className="ca-head">Game events/<br />prizes</th>
                  <th className="ca-head">People with<br />disabilities</th>
                  <th className="ca-head">College/School<br />Courses</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ca-row ca-row--featured">
                  <td className="ca-name ca-name--featured">
                    <span className="ca-brand-truss">TRUSS</span>{' '}
                    <span className="ca-brand-pai">PAI</span>
                  </td>
                  <td><span className="ca-check ca-check--primary">✓</span></td>
                  <td><span className="ca-check ca-check--primary">✓</span></td>
                  <td><span className="ca-check ca-check--primary">✓</span></td>
                  <td><span className="ca-check ca-check--primary">✓</span></td>
                  <td><span className="ca-check ca-check--primary">✓</span></td>
                  <td><span className="ca-check ca-check--primary">✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-section">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Value Proposition</h2>
          <h3 className="value-subtitle animate-on-scroll">Why now?</h3>
          <div className="value-grid">
            <div className="value-card animate-on-scroll">
              <div className="value-icon-wrapper">
                <Zap className="value-icon" />
              </div>
              <h4>First to market</h4>
              <p>
                TRUSSPAI provides an 
interactive learning and 
gaming environment that 
helps users learn a skill 
easily.
              </p>
            </div>
            <div className="value-card animate-on-scroll">
              <div className="value-icon-wrapper">
                <TrendingUp className="value-icon" />
              </div>
              <h4>Trending Media</h4>
              <p>
                Interactive learning is being 
accepted by teachers around 
the world as it is the best way 
to increase ability to 
remember for longer duration.
              </p>
            </div>
            <div className="value-card animate-on-scroll">
              <div className="value-icon-wrapper">
                <Globe className="value-icon" />
              </div>
              <h4>All-in-One solution</h4>
              <p>
                TRUSSPAI platform provides in one solution for institutes and
learners to learn or design any
skills at no cost or low cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      
      {/* Society Impact Section */}
      <section className="impact-section">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Society Impact</h2>
          <div className="impact-grid">
            <div className="impact-icon-large animate-on-scroll">
              <Heart className="impact-main-icon" />
            </div>
            <div className="impact-content animate-on-scroll">
              <ul className="impact-list">
                <li>Building Global Learning Communities</li>
                <li>Encourage students to learn multiple skill-based courses</li>
                <li>Promote a broader global perspective by motivating students to pursue higher education in different countries</li>
                <li>
                  Build a strong community for learners by fostering interaction among international students to help them learn about different countries and cultures.
                </li>
                <li>Make education inclusive and accessible for all learners</li>
                <li>
                  Creates a future-ready model where AI, accessibility, and human connection coexist
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content animate-on-scroll">
            <h2>Ready to Redefine the Future of Education?</h2>
            <p>
              Join our waitlist and get notified when we go live!
            </p>
            <button
              type="button"
              className="cta-button"
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/1oRj0yHP0gDVIDbtha7NajVt5heuOV_t2TUge80R5WvM/edit?usp=drive_web&ouid=101506192588054239063',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            >
              Join Our Waitlist!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
