import React from "react";
import { Link } from "react-router-dom";
import ngo from "./assets/ngo.png";
import whatsapplogo from "./assets/whatsapplogo.png";
import fblogo from "./assets/fblogo.png";
import inslogo from "./assets/inslogo.png";
import "./App.css";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "10 Ways to Make a Difference Today",
      desc: "Simple actions you can take today to help communities in need.",
      image:
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    },
    {
      id: 2,
      title: "The Importance of Clean Water in Communities",
      desc: "Access to clean water changes lives and prevents diseases.",
      image:
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    },
    {
      id: 3,
      title: "Stories of Hope: Changing Lives Through Education",
      desc: "How education empowers children and builds stronger futures.",
      image:
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
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

      <section className="bloghero">
        <div className="blogherocontent">
          <h1>Our Blog</h1>
          <p>Stories, updates, and insights from our journey</p>
          <br />
          <Link to="/Payment" className="dbtn">Donate Now</Link>
        </div>
      </section>

      <section className="blogsection">
        <h2>Recent Blog Posts</h2>

        <div className="cards">
          {blogs.map((blog) => (
            <div className="card" key={blog.id}>
              <img src={blog.image} alt={blog.title} />
              <div className="blogcontent">
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <button>Read More</button>
              </div>
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

export default Blog;
