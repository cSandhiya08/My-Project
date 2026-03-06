import React, { useState } from "react";
import "./App.css";

function Payment() {
  const [method, setMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful" );
  };

  return (
    <div className="payment-container">
      <form className="payment-box" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" required />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Amount</label>
        <input type="number" placeholder="Enter The Amount " required />
        <br />
        
        <h2>Select Payment Method</h2>

        <div className="method-options">
          <label>
            <input
              type="radio"
              value="card"
              checked={method === "card"}
              onChange={(e) => setMethod(e.target.value)}
            />
            Credit / Debit Card
          </label>
           <br />
          <label>
            <input
              type="radio"
              value="upi"
              checked={method === "upi"}
              onChange={(e) => setMethod(e.target.value)}
            />
            UPI
          </label>
            <br />
          <label>
            <input
              type="radio"
              value="netbanking"
              checked={method === "netbanking"}
              onChange={(e) => setMethod(e.target.value)}
            />
            Net Banking
          </label>
        </div>


        {method === "card" && (
          <>
            <input type="text" placeholder="Card Number" required />
            <input type="text" placeholder="Card Holder Name" required />
            <input type="text" placeholder="Expiry Date (MM/YY)" required />
            <input type="text" placeholder="CVV" required />
          </>
        )}

        {method === "upi" && (
          <input type="text" placeholder="Enter UPI ID" required />
        )}

        {method === "netbanking" && (
          <select required>
            <option value="">Select Bank</option>
            <option>SBI</option>
            <option>HDFC</option>
            <option>ICICI</option>
            <option>Axis Bank</option>
          </select>
        )}

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
