"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  // STATE (must be INSIDE component)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // LOGIN HANDLER
  const handleLogin = () => {
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (!name.trim()) {
        setError("Please enter your name");
        setLoading(false);
        return;
      }

      if (password !== "9241") {
        setError("Invalid password");
        setLoading(false);
        return;
      }

      // Save student name (temporary)
      localStorage.setItem("studentName", name);

      // Go to dashboard
      router.push("/dashboard");
    }, 800);
  };

  return (
    <div style={container}>
      <div style={card}>
        <h1>Student Login</h1>
        <p style={{ marginBottom: "20px", color: "#475569" }}>
          Namma Web Digital Marketing LMS
        </p>

        {error && <p style={errorStyle}>{error}</p>}

        <label style={label}>Student Name</label>
        <input
          style={input}
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label style={label}>Password</label>
        <input
          style={input}
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={button}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login to LMS"}
        </button>

        <p style={note}>
          * This LMS is exclusively for Namma Web students
        </p>
      </div>
    </div>
  );
}

/* ===== STYLES (SAFE AT BOTTOM) ===== */

const container = {
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #e0e7ff, #f8fafc)"
};

const card = {
  background: "white",
  padding: "40px",
  width: "100%",
  maxWidth: "400px",
  borderRadius: "16px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  textAlign: "center"
};

const label = {
  display: "block",
  textAlign: "left",
  marginBottom: "6px",
  fontWeight: "500"
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "18px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1"
};

const button = {
  width: "100%",
  padding: "14px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer"
};

const errorStyle = {
  background: "#fee2e2",
  color: "#991b1b",
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "15px"
};

const note = {
  marginTop: "15px",
  fontSize: "12px",
  color: "#64748b"
};
