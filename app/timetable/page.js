"use client";

import { useState } from "react";

export default function TimetablePage() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      <h1>📅 Choose Class Timings</h1>
      <p style={{ color: "#475569", marginBottom: "30px" }}>
        Select your preferred class timing and course start date.
        This will be used to schedule your daily learning journey.
      </p>

      <div style={card}>
        <h3>🕒 Available Time Slots (IST)</h3>

        <label style={option}>
          <input
            type="radio"
            name="time"
            value="Morning (7 AM – 9 AM)"
            onChange={(e) => setTime(e.target.value)}
          />
          Morning (7 AM – 9 AM)
        </label>

        <label style={option}>
          <input
            type="radio"
            name="time"
            value="Evening (6 PM – 8 PM)"
            onChange={(e) => setTime(e.target.value)}
          />
          Evening (6 PM – 8 PM)
        </label>

        <label style={option}>
          <input
            type="radio"
            name="time"
            value="Weekend (Sat & Sun)"
            onChange={(e) => setTime(e.target.value)}
          />
          Weekend (Saturday & Sunday)
        </label>
      </div>

      <div style={card}>
        <h3>📆 Select Course Start Date</h3>
        <input
          type="date"
          style={input}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div style={card}>
        <h3>✅ Selected Details</h3>
        <p><strong>Time Slot:</strong> {time || "Not selected"}</p>
        <p><strong>Start Date:</strong> {date || "Not selected"}</p>

        <button style={primaryBtn}>
          Confirm & Save Preference
        </button>
      </div>

      <section style={noteBox}>
        <h3>ℹ️ Important Information</h3>
        <ul>
          <li>Class timings are followed strictly.</li>
          <li>Course progress starts from the selected start date.</li>
          <li>Changes are allowed only with mentor approval.</li>
          <li>
            For enquiries, WhatsApp: <strong>9241527429</strong>
          </li>
          <li>
            Email: <strong>nammaweb.assist@gmail.com</strong>
          </li>
        </ul>
      </section>
    </div>
  );
}

/* STYLES */

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  marginBottom: "25px"
};

const option = {
  display: "block",
  marginBottom: "12px",
  fontSize: "15px"
};

const input = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  width: "100%",
  maxWidth: "260px"
};

const primaryBtn = {
  marginTop: "15px",
  padding: "12px 24px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer"
};

const noteBox = {
  marginTop: "40px",
  padding: "25px",
  background: "#f1f5f9",
  borderRadius: "14px"
};
