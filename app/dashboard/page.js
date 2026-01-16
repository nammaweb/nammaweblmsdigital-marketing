"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [studentName, setStudentName] = useState("");

  // Check login
  useEffect(() => {
    const name = localStorage.getItem("studentName");
    if (!name) {
      router.push("/login");
    } else {
      setStudentName(name);
    }
  }, [router]);

  // Logout
  const handleLogout = () => {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("studentName");
      router.push("/login");
    }
  };

  return (
    <div>
      {/* HEADER */}
      <div style={header}>
        <h2>Welcome, {studentName} 👋</h2>
        <button onClick={handleLogout} style={logoutBtn}>
          Logout
        </button>
      </div>

      <p style={{ color: "#475569", marginBottom: "30px" }}>
        Your Digital Marketing learning journey with Namma Web
      </p>

      {/* ACTION BUTTON */}
      <button style={primaryBtn} onClick={() => window.location.href = "/lesson?day=1";

        ▶ Start Today’s Class
      </button>

      {/* DASHBOARD GRID */}
      <div style={grid}>
        <Card title="📘 Syllabus" onClick={() => router.push("/syllabus")} />
        <Card title="📝 Assignments" onClick={() => router.push("/assignments")} />
        <Card title="🛠 Live Projects" onClick={() => router.push("/projects")} />
        <Card title="📅 Timetable" onClick={() => router.push("/timetable")} />
        <Card title="📈 Progress" onClick={() => router.push("/progress")} />
        <Card title="📜 Rules & Certification" onClick={() => router.push("/rules")} />
      </div>
    </div>
  );
}

/* COMPONENT */
function Card({ title, onClick }) {
  return (
    <div style={card} onClick={onClick}>
      <h3>{title}</h3>
      <p style={{ color: "#64748b", fontSize: "14px" }}>
        Click to view details
      </p>
    </div>
  );
}

/* STYLES */
const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px"
};

const logoutBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "10px 16px",
  borderRadius: "8px",
  cursor: "pointer"
};

const primaryBtn = {
  padding: "14px 22px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  marginBottom: "30px",
  cursor: "pointer"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px"
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  cursor: "pointer",
  transition: "0.3s"
};
