"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [student, setStudent] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("studentName");
    if (name) setStudent(name);
  }, []);

  return (
    <div>
      {/* WELCOME SECTION */}
      <section style={welcomeBox}>
        <h1>Welcome, {student || "Student"} 👋</h1>
        <p>
          Digital Marketing LMS • Namma Web
        </p>
      </section>

      {/* PROGRESS OVERVIEW */}
      <section style={section}>
        <h2>📊 Your Course Progress</h2>

        <div style={progressBox}>
          <div style={{ ...progressBar, width: "22%" }} />
        </div>
        <p style={{ marginTop: "8px", color: "#475569" }}>
          Day 40 of 180 • 22% completed
        </p>
      </section>

      {/* TODAY'S LESSON */}
      <section style={section}>
        <h2>📘 Today’s Lesson</h2>

        <div style={card}>
          <h3>SEO – On Page Optimization</h3>
          <p>
            Learn how to optimise website content, headings,
            keywords and internal links to rank better on Google.
          </p>

          <button style={primaryBtn}>
            Start Today’s Lesson
          </button>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section style={section}>
        <h2>⚡ Quick Access</h2>

        <div style={grid}>
          <DashboardCard title="📚 Syllabus" link="/syllabus" />
          <DashboardCard title="📝 Assignments" link="/assignments" />
          <DashboardCard title="🛠 Projects" link="/projects" />
          <DashboardCard title="📅 Timetable" link="/timetable" />
          <DashboardCard title="📈 Progress" link="/progress" />
          <DashboardCard title="⭐ Reviews" link="/reviews" />
        </div>
      </section>
    </div>
  );
}

/* COMPONENTS */

function DashboardCard({ title, link }) {
  return (
    <a href={link} style={dashCard}>
      {title}
    </a>
  );
}

/* STYLES */

const welcomeBox = {
  background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
  color: "white",
  padding: "40px",
  borderRadius: "16px",
  marginBottom: "40px"
};

const section = {
  marginBottom: "40px"
};

const progressBox = {
  width: "100%",
  height: "14px",
  background: "#e5e7eb",
  borderRadius: "20px",
  overflow: "hidden"
};

const progressBar = {
  height: "100%",
  background: "#2563eb",
  borderRadius: "20px"
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
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

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "20px"
};

const dashCard = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  fontWeight: "600",
  color: "#0f172a",
  textDecoration: "none",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
};
