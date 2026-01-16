"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function DayLessonPage() {
  const { day } = useParams();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <h1>Day {day}: Digital Marketing in the Real World 🚀</h1>
      <p style={{ color: "#475569", marginBottom: "30px" }}>
        Learn like a professional. Think like a marketer. Work on real brands.
      </p>

      {/* INTRO */}
      <Section title="🎯 What You’ll Learn Today">
        <ul>
          <li>How digital marketing actually works in companies</li>
          <li>How Namma Web attracts students online</li>
          <li>How AI makes marketing 10x faster</li>
        </ul>
      </Section>

      {/* VIDEO */}
      <Section title="🎥 Watch & Learn">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/6mbwJ2xhgzM"
          title="Digital Marketing Basics"
          allowFullScreen
          style={{ borderRadius: "12px" }}
        />
        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          🎬 This is a reference video. Namma Web recorded sessions will appear here.
        </p>
      </Section>

      {/* REAL EXAMPLE */}
      <Section title="🏢 Real Scenario – Namma Web">
        <p>
          You joined Namma Web. The company wants more students for its
          Digital Marketing course in Bangalore.
        </p>
        <p>
          👉 Your task as a marketer is to bring leads using:
        </p>
        <ul>
          <li>Google search (SEO)</li>
          <li>Instagram & LinkedIn content</li>
          <li>AI-generated blogs & posts</li>
        </ul>
      </Section>

      {/* THINKING QUESTIONS */}
      <Section title="🧠 Think Like a Marketer">
        <p><strong>Answer these in your notebook or Google Doc:</strong></p>
        <ol>
          <li>If you were a student, where would you search first?</li>
          <li>What type of Instagram reel would attract Gen-Z?</li>
          <li>What problem does Namma Web solve?</li>
        </ol>
      </Section>

      {/* AI PROMPT */}
      <Section title="🤖 AI Practice (Very Important)">
        <pre style={pre}>
Write an Instagram reel script for Namma Web promoting
a Digital Marketing course for Gen-Z students in Bangalore.
Keep it simple, trendy and engaging.
        </pre>
      </Section>

      {/* NOTES DOWNLOAD */}
      <Section title="📥 Download Notes (PDF)">
        <a
          href="/namma-web-digital-marketing-day1-notes.pdf"
          download
          style={downloadBtn}
        >
          ⬇ Download Namma Web Digital Marketing Notes (PDF)
        </a>
        <p style={{ fontSize: "12px", marginTop: "8px" }}>
          © Namma Web. All rights reserved.
        </p>
      </Section>

      {/* ASSIGNMENT */}
      <Section title="🛠 Assignment (Real Work)">
        <ul>
          <li>Write 1 LinkedIn post for Namma Web</li>
          <li>Write 1 Instagram caption</li>
          <li>Explain how YOU would market Namma Web</li>
        </ul>
        <p>
          📧 Mail your work to:
          <br />
          <strong>nammaweb.assist@gmail.com</strong>
        </p>
      </Section>

      {/* CONFIRMATION */}
      <Section title="✅ Submission Confirmation">
        <label>
          <input
            type="checkbox"
            checked={submitted}
            onChange={() => setSubmitted(!submitted)}
          />{" "}
          I have submitted my assignment via email
        </label>
      </Section>

      {/* NEXT STEP */}
      <button
        style={{
          ...primaryBtn,
          background: submitted ? "#16a34a" : "#9ca3af",
          cursor: submitted ? "pointer" : "not-allowed"
        }}
        disabled={!submitted}
        onClick={() => router.push("/day/2")}
      >
        {submitted ? "Proceed to Day 2 ▶" : "Submit assignment to continue"}
      </button>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

/* STYLES */
const section = {
  background: "white",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  marginBottom: "25px"
};

const primaryBtn = {
  padding: "16px 26px",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontWeight: "bold",
  marginTop: "20px"
};

const pre = {
  background: "#0f172a",
  color: "#f8fafc",
  padding: "16px",
  borderRadius: "12px",
  overflowX: "auto"
};

const downloadBtn = {
  display: "inline-block",
  padding: "12px 18px",
  background: "#2563eb",
  color: "white",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold"
};
