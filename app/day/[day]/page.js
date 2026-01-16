"use client";

import { useParams } from "next/navigation";

export default function DailyLessonPage() {
  const { day } = useParams();

  return (
    <div>
      <h1>Day {day} – Digital Marketing Foundations</h1>
      <p style={{ color: "#475569", marginBottom: "30px" }}>
        Learn, practice and work on real Namma Web projects
      </p>

      {/* TOPIC */}
      <Section title="📘 Today’s Topic">
        <p>
          Introduction to Digital Marketing and how businesses like
          <strong> Namma Web</strong> grow using SEO, content,
          social media and AI tools.
        </p>
      </Section>

      {/* NOTES */}
      <Section title="📝 Notes">
        <ul>
          <li>What is Digital Marketing?</li>
          <li>Why businesses need online presence</li>
          <li>Difference between traditional & digital marketing</li>
          <li>Overview of SEO, Social Media, Ads & AI</li>
        </ul>
      </Section>

      {/* REAL EXAMPLE */}
      <Section title="🏢 Real Example – Namma Web">
        <p>
          Namma Web attracts students by ranking for keywords like
          <strong> “Digital Marketing Course in Bangalore”</strong>,
          posting educational content on LinkedIn & Instagram,
          and using AI for content creation.
        </p>
      </Section>

      {/* PRACTICAL TASK */}
      <Section title="✍️ Practical Task">
        <ul>
          <li>Write 1 paragraph about Namma Web services</li>
          <li>Create 1 LinkedIn post idea</li>
          <li>Create 1 Instagram caption</li>
        </ul>
      </Section>

      {/* AI PROMPT */}
      <Section title="🤖 AI Prompt (Use ChatGPT)">
        <pre style={pre}>
Write a LinkedIn post promoting a digital marketing course
by Namma Web targeting students in Bangalore.
        </pre>
      </Section>

      {/* ASSIGNMENT */}
      <Section title="🛠 Assignment Submission">
        <p>
          Mail your work to:
          <br />
          <strong>nammaweb.assist@gmail.com</strong>
        </p>
      </Section>

      {/* QUIZ */}
      <Section title="❓ Quick Quiz">
        <p>What is Digital Marketing?</p>
        <label><input type="radio" /> Online promotion of products</label><br />
        <label><input type="radio" /> Only newspaper ads</label>
      </Section>

      {/* NEXT */}
      <button style={primaryBtn}>
        ✅ Mark Day {day} as Completed
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
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  marginBottom: "25px"
};

const primaryBtn = {
  padding: "14px 24px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer"
};

const pre = {
  background: "#0f172a",
  color: "#f8fafc",
  padding: "15px",
  borderRadius: "10px",
  overflowX: "auto"
};
