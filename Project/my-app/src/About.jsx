import React from "react";
import { Link } from "react-router-dom";
import ngo from "./assets/ngo.png";
import whatsapplogo from "./assets/whatsapplogo.png";
import fblogo from "./assets/fblogo.png";
import inslogo from "./assets/inslogo.png";
import "./App.css";

function AboutUs() {
  return (
    <>
  
      <header className="header">
        <div className="logo">
          <img src={ngo} alt="NGO Logo" />
          <h2>Helping Hands</h2>
        </div>

        <nav className="nav">
          <Link to="/home">Home</Link>
          <Link to="/causes">Causes</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        <div className="btn">
          <Link to="/signin" className="signbtn">Sign In</Link>
          <Link to="/Payment" className="dbtn">
            Start Fundraising
          </Link>
        </div>
      </header>

      <section className="abouthero">
        <div className="aboutcontent">
          <h1>About Us</h1>
          <p>Together, we make a difference in the lives of people in need.</p>
          <br />
          <Link to="/Payment" className="dbtn">
            Donate Now
          </Link>
        </div>
      </section>

      
      <section className="aboutsection">
        <div className="acontainer">

          <div className="atext">
            <h2>Who We Are</h2>
            <p>
              Helping Hands is a non-profit organization committed to improving
              lives through education, healthcare, and emergency relief
              programs. We connect generous donors with meaningful causes.
            </p>
          </div>

          <div className="aboutimage">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a"
              alt="Volunteers working"
            />
          </div>

         
          <div className="atext">
            <h2>What We Do</h2>
            <p>
              We raise funds to support underprivileged communities by providing
              access to quality education, medical support, food, and clean
              water. Transparency and trust are at the heart of our platform.
            </p>
          </div>

          <div className="aboutimage">
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6"
              alt="Helping community"
            />
          </div>

         
          <div className="atext">
            <h2>Our Team</h2>
            <p>
              Our dedicated team of volunteers and professionals work tirelessly
              to ensure every donation creates real and measurable impact.
              Thank you for being part of our mission to make the world a better place!
            </p>
          </div>

          <div className="aboutimage">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team collaboration"
            />
          </div>

        </div>
      </section>

      <section className="missionvision">
        <div className="mvcard">
          <h3>Our Mission</h3>
          <p>
            To empower communities by providing access to education, clean
            water, food, and healthcare through transparent fundraising.
          </p>
        </div>

        <div className="mvcard">
          <h3>Our Vision</h3>
          <p>
            A world where every individual has equal opportunities to live a
            healthy, safe, and dignified life.
          </p>
        </div>
      </section>

      <section className="impact">
        <h2>Our Impact</h2>
        <div className="cards">
          <div className="impactcard">
            <h3>8M+</h3>
            <p>Donations Raised</p>
          </div>
          <div className="impactcard">
            <h3>25K+</h3>
            <p>Successful Campaigns</p>
          </div>
          <div className="impactcard">
            <h3>1.5M+</h3>
            <p>Lives Changed</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <h4>Quick Links</h4>
          <p>About Us</p>
          <p>Our Causes</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Help Center</p>
          <p>FAQ</p>
          <p>Terms Of Service</p>
          <p>Privacy Policy</p>
        </div>

        <div>
          <h4>Connect With Us</h4>
          <img src={whatsapplogo} alt="WhatsApp" width="30" />
          <img src={fblogo} alt="Facebook" width="30" />
          <img src={inslogo} alt="Instagram" width="30" />
        </div>

        <p>© 2026 Helping Hands NGO. All rights reserved.</p>
      </footer>
    </>
  );
}

export default AboutUs;
