"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    if (!name.trim()) {
      setError("Please enter your full name");
      return;
    }

    if (password !== "9241") {
      setError("Invalid access password");
      return;
    }

    localStorage.setItem("studentName", name);
    router.push("/dashboard");
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#0f172a", color: "white", minHeight: "100vh" }}>

      {/* HERO SECTION */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
          🚀 Namma Web – AI Driven Digital Marketing Academy
        </h1>
        <p style={{ maxWidth: "800px", margin: "20px auto", color: "#cbd5e1" }}>
          Transforming students across India into AI-powered Digital Marketing Experts.
          Startup India Recognised | MSME Registered | Manthan FKCCI Award Winner |
          Emerging Startup of India | Towards AI Innovation.
        </p>
      </div>

      {/* TRUST SECTION */}
      <div style={{
        background: "#1e293b",
        padding: "30px",
        textAlign: "center"
      }}>
        <h2>🏆 Recognitions & Achievements</h2>
        <p>✔ Startup India Recognised</p>
        <p>✔ Karnataka Emerging Startup Award</p>
        <p>✔ Manthan FKCCI Award Winner</p>
        <p>✔ Ministry of Corporate Affairs Registered</p>
        <p>✔ AI-Powered Learning Ecosystem</p>
      </div>

      {/* TESTIMONIAL SECTION */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>🎓 Student Success Stories</h2>

        <div style={{ marginTop: "20px" }}>
          <p>"Namma Web helped me get placed at ₹4.2 LPA in a digital agency." – Rahul K</p>
          <p>"AI-based marketing training gave me real confidence." – Sneha M</p>
          <p>"From zero knowledge to handling live campaigns." – Arjun S</p>
        </div>
      </div>

      {/* LOGIN CARD */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "60px"
      }}>
        <div style={{
          background: "white",
          color: "black",
          padding: "40px",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "12px"
        }}>
          <h2 style={{ textAlign: "center" }}>Student Login</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <input
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "15px" }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "15px" }}
          />

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              background: "#2563eb",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Access LMS
          </button>

          <p style={{ marginTop: "10px", fontSize: "12px", textAlign: "center" }}>
            Exclusive access for Namma Web students
          </p>
        </div>
      </div>

    </div>
  );
}
