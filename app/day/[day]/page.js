"use client";

import { useParams } from "next/navigation";

export default function DailyLessonPage() {
  const params = useParams();
  const day = params.day;

  return (
    <div>

      {/* HEADER */}
      <section style={header}>
        <h1>Day {day} – Digital Marketing Lesson</h1>
        <p>Live Learning • Namma Web LMS</p>
      </section>

      {/* LESSON CONTENT */}
      <section style={section}>
        <h2>📘 Today’s Topic</h2>
        <div style={card}>
          <h3>SEO – On Page Optimization</h3>
          <p>
            Learn how to optimise website content, headings, keywords,
            internal links and images to improve Google rankings.
          </p>
        </div>
      </section>

      {/* NOTES */}
      <section style={section}>
        <h2>📝 Notes</h2>
        <div style={card}>
          <ul>
            <li>Understanding search intent</li>
            <li>Optimising title & meta description</li>
            <li>Keyword placement</li>
            <li>Internal linking strategy</li>
            <li>Image optimisation</li>
          </ul>
        </div>
      </section>

      {/* VIDEO */}
      <section style={section}>
        <h2>🎥 Video Lesson</h2>
        <div style={videoBox}>
          <p>Recorded class video will appear here</p>
        </div>
      </section>

      {/* AI PRACTICE */}
      <section style={section}>
        <h2>🤖 AI Practice Task</h2>
        <div style={card}>
          <p>
            Use AI to generate:
          </p>
          <ul>
            <li>5 SEO-friendly blog titles</li>
            <li>Meta description for a service page</li>
            <li>Keyword list for a local business</li>
          </ul>
        </div>
      </section>

      {/* ASSIGNMENT */}
      <section style={section}>
        <h2>🛠 Assignment</h2>
        <div style={card}>
          <p>
            Perform on-page SEO optimisation for any one webpage and
            submit screenshots and report.
          </p>

          <button style={primaryBtn}>
            Mark Lesson as Completed
          </button>
        </div>
      </section>

    </div>
  );
}

/* STYLES */

const header = {
  background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
  color: "white",
  padding: "40px",
  borderRadius: "16px",
  marginBottom: "40px"
};

const section = {
  marginBottom: "40px"
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
};

const videoBox = {
  background: "#e5e7eb",
  height: "220px",
  borderRadius: "14px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#475569"
};

const primaryBtn = {
  marginTop: "15px",
  padding: "14px 24px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer"
};
