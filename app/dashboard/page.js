"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("studentName");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Welcome, {name}</h1>
      <p>Your LMS dashboard is ready.</p>

      <button
        onClick={() => {
          window.location.href = "/lesson?day=1";
        }}
        style={{
          padding: "10px 20px",
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px"
        }}
      >
        Start Course
      </button>
    </div>
  );
}
