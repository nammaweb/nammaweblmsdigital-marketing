"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("studentName");
    if (storedName) setName(storedName);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Welcome, {name} 👋
      </h1>

      <p style={{ opacity: 0.8 }}>
        Namma Web Digital Marketing & AI LMS
      </p>

      {/* Course Card */}
      <div style={{
        marginTop: "40px",
        padding: "30px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        transition: "0.3s",
      }}>
        <h2>📚 Digital Marketing Using AI (6 Months)</h2>
        <p>
          60 Classes • Theory + Practical • Live Namma Web Projects
        </p>

        <button
          onClick={() => {
            window.location.href = "/course";
          }}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Continue Learning →
        </button>
      </div>

      {/* Placement Section */}
      <div style={{
        marginTop: "40px",
        padding: "30px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.08)"
      }}>
        <h2>💼 Placement Opportunities</h2>
        <p>
          Top Companies: Zoho, TCS Digital, Accenture, Infosys, Startups
        </p>
        <p>
          Up to 4 LPA based on performance & live project contribution.
        </p>
      </div>

    </div>
  );
}
