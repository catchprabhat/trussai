import React, { useEffect, useRef } from 'react';
import {
  Lightbulb,
  Target,
  Frown,
  Clock,
  DollarSign,
  StarOff,
  MonitorX,
  CheckCircle,
  Users,
  MessageSquare,
  Trophy,
  Zap,
  Globe,
  Rocket,
  TrendingUp,
  Award,
  Heart,
} from 'lucide-react';
import './Home.css';

const Home = () => {
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
            <p className="hero-tagline"></p>
            <h2 className="hero-subtitle">
              <span className="highlight">A game-based, AI-powered language learning</span> platform connecting blind and sighted users.
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
              src="https://images.unsplash.com/photo-1743192033279-57a6fa72585a?w=800"
              alt="Gaming platform"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="problems-section">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Problems</h2>
          <div className="personas animate-on-scroll">
            <div className="persona-card">
              <img
                src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?w=400"
                alt="Jacob"
                className="persona-img"
              />
              <h3>Jacob</h3>
              <p>Differently Abled</p>
            </div>
            <div className="persona-arrow">
              <div className="arrow-line"></div>
            </div>
            <div className="persona-card">
              <img
                src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?w=400"
                alt="Tom"
                className="persona-img"
              />
              <h3>Tom</h3>
              <p>International Student</p>
            </div>
          </div>
          <p className="problems-intro animate-on-scroll">
            Tom and Jacob like millions of other Students struggle to find a solution:
          </p>
          <div className="problems-grid">
            <div className="problem-item animate-on-scroll">
              <Lightbulb className="problem-icon" />
              <p>
                Difficult to learn any language for both Blind/Sighted students because app and
                website do not contain specific words and phrases
              </p>
            </div>
            <div className="problem-item animate-on-scroll">
              <Target className="problem-icon" />
              <p>Sighted students don't find it interesting to play with blind students</p>
            </div>
            <div className="problem-item animate-on-scroll">
              <Frown className="problem-icon" />
              <p>It's hard for Blind students to interact with Technology</p>
            </div>
            <div className="problem-item animate-on-scroll">
              <Clock className="problem-icon" />
              <p>Time Consuming process, extra time must be given to learn a language</p>
            </div>
            <div className="problem-item animate-on-scroll">
              <DollarSign className="problem-icon" />
              <p>Braille not available for same course</p>
            </div>
            <div className="problem-item animate-on-scroll">
              <StarOff className="problem-icon" />
              <p>No Incentive or fun hence people lose interest</p>
            </div>
            <div className="problem-item animate-on-scroll">
              <MonitorX className="problem-icon" />
              <p>No offline tool available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="section-container">
          <div className="solutions-grid">
            <div className="solutions-visual animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1587741097323-0fdcee8b0e24?w=600"
                alt="TrusspAI App"
                className="app-mockup"
              />
              <div className="educational-cards">
                <h4>TRUSSPAI educational cards</h4>
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
                    Language courses are delivered in a gamified and interactive format for sighted
                    students, while blind students learn through Braille-supported content followed
                    by guided practice
                  </p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <MessageSquare className="solution-icon" />
                  <p>
                    Practice speaking and guidance for blind and sighted students with AI, chat/talk
                    with friends while playing, and get your questions answered by AI.
                  </p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <Users className="solution-icon" />
                  <p>
                    An interactive gaming environment is provided to students where 2 or 3 students
                    can play at a time
                  </p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <Clock className="solution-icon" />
                  <p>
                    Now students don't have to invest extra time for learning, now learn during your
                    leisure time
                  </p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <DollarSign className="solution-icon" />
                  <p>Trusspai platform is available for free with some limitations</p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <Trophy className="solution-icon" />
                  <p>Quarterly gaming events for students for sighted students</p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <Award className="solution-icon" />
                  <p>Trusspai educational card for offline fun</p>
                </div>
                <div className="solution-item animate-on-scroll">
                  <Heart className="solution-icon" />
                  <p>Sighted students who cannot afford costly education Also gets benefit in memberships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="information-section">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Why TrusspAI</h2>
          <div className="info-grid">
            <div className="info-stats animate-on-scroll">
              <div className="stat-item">
                <h3 className="stat-number">297 Million</h3>
                <p>people worldwide live with some kind of visual impairment</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">40 million</h3>
                <p>people are learning new languages every year</p>
              </div>
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
                    <div className="bar" style={{ width: '93%', backgroundColor: '#ff6b35' }}>
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
              <p className="chart-subtitle">
                Rapid increase in interactive learning are making teachers to adopt different
                technology to make learning easy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis Section */}
      <section className="competitive-section">
        <div className="section-container">
          
          <p className="section-subtitle animate-on-scroll">
            What we Offer?
          </p>
          <div className="competitive-table-wrapper animate-on-scroll">
            <table className="competitive-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Interactive Gaming/learning</th>
                  <th>Specific words and phrases</th>
                  <th>Learn with friends & AI</th>
                  <th>Game events/prizes</th>
                  <th>People with disabilities</th>
                  <th>College Courses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-name">TRUSS PAI</td>
                  <td><CheckCircle className="check-icon" /></td>
                  <td><CheckCircle className="check-icon" /></td>
                  <td><CheckCircle className="check-icon" /></td>
                  <td><CheckCircle className="check-icon" /></td>
                  <td><CheckCircle className="check-icon" /></td>
                  <td><CheckCircle className="check-icon" /></td>
                </tr>
                {/* Other product rows removed */}
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
                TRUSSPAI provide interactive learning-gaming environment which helps its user to
                learn a language easily
              </p>
            </div>
            <div className="value-card animate-on-scroll">
              <div className="value-icon-wrapper">
                <TrendingUp className="value-icon" />
              </div>
              <h4>Trending Media</h4>
              <p>
                Interactive learning is being accepted by teachers around the world as it is the
                best way to increase ability to remember for longer duration
              </p>
            </div>
            <div className="value-card animate-on-scroll">
              <div className="value-icon-wrapper">
                <Globe className="value-icon" />
              </div>
              <h4>All-in-One solution</h4>
              <p>
                TRUSSPAI platform provides all in one solution for language learning to its user
                available at no cost
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
                <li>Provide platform for blind people to connect with normal world</li>
                <li>Encouraging students to learn different languages</li>
                <li>Building a platform for blind people to learn a language</li>
                <li>
                  Broader vision and encouraging students to go different countries for higher study
                </li>
                <li>Building community for language learning people</li>
                <li>
                  Interaction between international students that will help them to learn about
                  different countries and cultures
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
            <h2>Ready to Transform Language Learning?</h2>
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