import React from "react";
import { Link } from "react-router-dom";
import ngo from "./assets/ngo.png";
import whatsapplogo from "./assets/whatsapplogo.png";
import fblogo from "./assets/fblogo.png";
import inslogo from "./assets/inslogo.png";
import "./App.css";
import Signin from "./signin";
import Payment from "./Payment";

function Homepage() {
  const features = [
    {
      id: 1,
      title: "Browse Causes",
      desc: "Find campaigns that need your help and change lives.",
      img: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea",
    },
    {
      id: 2,
      title: "Start a Fundraiser",
      desc: "Create your own fundraising campaign and inspire others.",
      img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    },
    {
      id: 3,
      title: "Make a Donation",
      desc: "Give to a cause you care about and make real impact.",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },
  ];

  const causes = [
    {
      id: 1,
      title: "Education for Every Child",
      desc: "Provide books, uniforms, and school supplies to children in need.",
      raised: "₹25,000",
      goal: "₹50,000",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    },
    {
      id: 2,
      title: "Medical Emergency Fund",
      desc: "Support families struggling with medical expenses.",
      raised: "₹40,000",
      goal: "₹75,000",
      img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    },
    {
      id: 3,
      title: "Feed the Hungry",
      desc: "Help provide meals to underprivileged communities.",
      raised: "₹18,000",
      goal: "₹30,000",
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    },
    {
      id: 4,
      title: "Plant Trees Initiative",
      desc: "Join us in protecting and restoring our environment.",
      raised: "₹12,000",
      goal: "₹25,000",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Anjali Sharma",
      text: "I love how transparent and impactful this platform is!",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      text: "Donating here feels safe and truly meaningful.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Sneha Iyer",
      text: "I can actually see the change my donations create.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "Arjun Patel",
      text: "A beautiful platform for supporting real causes.",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

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
          <Link to="/Payment" className="dbtn">Start Fundraising</Link>
        </div>
      </header>

      <section className="hero">
        <h1>Make a Difference Today</h1>
        <h3>Support causes that truly matter</h3>
        <div className="herobtn">
          
          <Link to="/Payment" className="dbtn">Donate Now</Link>
          <Link to="/causes" className="discoverbtn">Discover Causes</Link> 
        </div>
      </section>

      <section className="features">
        {features.map((item) => (
          <div key={item.id} className="febox">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>


      <section className="featured">
        <h2>Featured Causes</h2>
        <div className="cards">
          {causes.map((cause) => (
            <div className="card" key={cause.id}>
              <img src={cause.img} alt={cause.title} />
              <br />
              <h3>{cause.title}</h3>
              <p>{cause.desc}</p>
              <p>
                <strong>Raised:</strong> {cause.raised} <br />
                <strong>Goal:</strong> {cause.goal}
              </p>
              <br />
              <Link to="/Payment" className="dbtn">Donate Now</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="how">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Choose a Cause</h3>
            <p>Select a campaign that speaks to your heart.</p>
          </div>
          <div className="step">
            <h3>Donate Online</h3>
            <p>Make a secure donation in just a few clicks.</p>
          </div>
          <div className="step">
            <h3>Track Impact</h3>
            <p>See how your contribution is making a real difference.</p>
          </div>
        </div>
        <br />
        <button className="discoverbtn">Discover More Causes</button>
      </section>

      <section className="donors">
        <h2>What Our Donors Say</h2>
        <div className="donorbox">
          {testimonials.map((donor) => (
            <div key={donor.id} className="say">
              <img src={donor.img} alt={donor.name} />
              <h4>{donor.name}</h4>
              <p>"{donor.text}"</p>
            </div>
          ))}
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
          <h4>Contact Info</h4>
          <img src={whatsapplogo} alt="WhatsApp" width="30" />
          <img src={fblogo} alt="Facebook" width="30" />
          <img src={inslogo} alt="Instagram" width="30" />
        </div>

        <p>© 2026 Helping Hands NGO. All rights reserved.</p>
      </footer>
    </>
  );
}
export default Homepage;