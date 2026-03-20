import React, { useState } from "react";
import { Link } from "react-router-dom";
import ngo from "./assets/ngo.png";
import whatsapplogo from "./assets/whatsapplogo.png";
import fblogo from "./assets/fblogo.png";
import inslogo from "./assets/inslogo.png";
import "./App.css";

function Causes() {
  const [selectedCategory, setSelectedCategory] = useState("All");

 const causes = [
  {
    id: 1,
    title: "Education for Every Child",
    category: "Education",
    desc: "Help underprivileged children get access to quality education and school supplies.",
    raised: "₹45,000",
    goal: "₹1,00,000",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    id: 2,
    title: "Medical Support for Families",
    category: "Health",
    desc: "Support families struggling to afford life-saving treatments and medicines.",
    raised: "₹72,000",
    goal: "₹1,50,000",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
  {
    id: 3,
    title: "Save the Environment",
    category: "Environment",
    desc: "Join us in planting trees and promoting sustainable environmental practices.",
    raised: "₹30,000",
    goal: "₹80,000",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 4,
    title: "Disaster Relief Fund",
    category: "Disaster",
    desc: "Provide urgent food, shelter, and medical aid during natural disasters.",
    raised: "₹90,000",
    goal: "₹2,00,000",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
  },
  {
    id: 5,
    title: "Food for the Hungry",
    category: "Hunger",
    desc: "Help provide nutritious meals to people facing hunger and poverty.",
    raised: "₹25,000",
    goal: "₹70,000",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    id: 6,
    title: "Women Empowerment",
    category: "Women",
    desc: "Support programs that help women gain skills and financial independence.",
    raised: "₹40,000",
    goal: "₹1,00,000",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    id: 7,
    title: "Animal Rescue Mission",
    category: "Animals",
    desc: "Help rescue and care for injured and abandoned animals.",
    raised: "₹18,000",
    goal: "₹50,000",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
  },
  {
    id: 8,
    title: "Clean Water for Villages",
    category: "Water",
    desc: "Provide clean drinking water facilities to rural communities.",
    raised: "₹35,000",
    goal: "₹90,000",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
  },
  {
    id: 9,
    title: "Support for Elderly",
    category: "Social Care",
    desc: "Help elderly people with food, shelter, and medical support.",
    raised: "₹28,000",
    goal: "₹75,000",
    img: "https://images.unsplash.com/photo-1581579185169-0c90c9c8c5c6",
  },
  {
    id: 10,
    title: "School Supplies Drive",
    category: "Education",
    desc: "Donate school bags, books, and stationery to children in need.",
    raised: "₹20,000",
    goal: "₹60,000",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
];

  const filteredCauses =
    selectedCategory === "All"
      ? causes
      : causes.filter((cause) => cause.category === selectedCategory);

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

      <section className="causeshero">
        <h1>Our Causes</h1>
        <h3>Donate today and create real change in someone’s life.</h3>
        <br />
        <Link to="/Payment" className="dbtn">Donate Now</Link>
      </section>

      <section className="causes">
        <aside className="sidebar">
          <h3>Categories</h3>

          {["All", "Education", "Health", "Environment", "Disaster"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? "active" : ""}
              >
                {cat}
              </button>
            )
          )}
        </aside>

       
        <main className="cards">
          {filteredCauses.map((cause) => (
            <div className="card" key={cause.id}>
              <img src={cause.img} alt={cause.title} />
              <h2>{cause.title}</h2>
              <p>{cause.desc}</p>
              <p className="funding">
                <strong>Raised:</strong> {cause.raised} <br />
                <strong>Goal:</strong> {cause.goal}
              </p>
              <button className="dbtn">Donate Now</button>
            </div>
          ))}
        </main>
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
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>

        <div>
          <h4>Connect With Us</h4>
          <img src={whatsapplogo} alt="WhatsApp" width="30" />
          <img src={fblogo} alt="Facebook" width="30" />
          <img src={inslogo} alt="Instagram" width="30" />
        </div>

        <p className="copyright">
          © 2026 Helping Hands NGO. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Causes;
