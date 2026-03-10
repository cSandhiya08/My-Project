import { useState } from "react";
import "./App.css";

const banks = [
  "State Bank of India", "HDFC Bank", "ICICI Bank",
  "Axis Bank", "Kotak Mahindra Bank", "Punjab National Bank",
];

export default function PaymentPage() {
  const [selected, setSelected] = useState("card");
  const [form, setForm] = useState({
    name: "", email: "", amount: "",
    cardNumber: "", cardHolder: "", expiry: "", cvv: "",
    upiId: "", bank: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const RadioRow = ({ id, label }) => (
    <label className="radio-label">
      <input
        type="radio"
        name="paymentMethod"
        value={id}
        checked={selected === id}
        onChange={() => setSelected(id)}
      />
      <span className={selected === id ? "active" : ""}>{label}</span>
    </label>
  );

  return (
    <div className="page">
      <div className="card">

        <div className="form-group">
          <label>Name</label>
          <input className="input" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input className="input" name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input className="input" name="amount" type="number" placeholder="Enter The Amount" value={form.amount} onChange={handleChange} />
        </div>

        <h3 className="payment-title">Select Payment Method</h3>

        <RadioRow id="card" label="Credit / Debit Card" />
        {selected === "card" && (
          <div className="method-content">
            <input className="input" name="cardNumber" placeholder="Card Number" value={form.cardNumber} onChange={handleChange} />
            <input className="input" name="cardHolder" placeholder="Card Holder Name" value={form.cardHolder} onChange={handleChange} />
            <input className="input" name="expiry" placeholder="Expiry Date (MM/YY)" value={form.expiry} onChange={handleChange} />
            <input className="input" name="cvv" type="password" placeholder="CVV" value={form.cvv} onChange={handleChange} />
          </div>
        )}

        <RadioRow id="upi" label="UPI" />
        {selected === "upi" && (
          <div className="method-content">
            <input className="input" name="upiId" placeholder="Enter UPI ID (e.g. name@upi)" value={form.upiId} onChange={handleChange} />
            <div className="upi-apps">
              {["GPay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                <span key={app} className="upi-tag">{app}</span>
              ))}
            </div>
          </div>
        )}

        <RadioRow id="netbanking" label="Net Banking" />
        {selected === "netbanking" && (
          <div className="method-content">
            <select className="input" name="bank" value={form.bank} onChange={handleChange}>
              <option value="">Select your bank</option>
              {banks.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        )}

        <button className="pay-btn">Pay Now</button>
      </div>
    </div>
  );
}