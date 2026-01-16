"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const lessons = {
  1: {
    title: "Introduction to Digital Marketing",
    content: [
      "What is Digital Marketing?",
      "Why digital skills matter today",
      "Overview of SEO, Social Media, Ads, AI"
    ],
    task: "Write why you want to learn Digital Marketing"
  },
  2: {
    title: "Understanding Online Customers",
    content: [
      "Customer journey",
      "Search behavior",
      "Buying psychology",
      "Trust & branding"
    ],
    task: "Explain how students search for courses online"
  },
  3: {
    title: "Digital Marketing Channels",
    content: [
      "SEO",
      "Social Media",
      "Paid Ads",
      "Email Marketing"
    ],
    task: "List channels you see Namma Web using"
  },
  4: {
    title: "Introduction to AI in Marketing",
    content: [
      "What is AI?",
      "Why marketers use AI",
      "AI tools overview"
    ],
    task: "Use ChatGPT to generate 5 content ideas"
  },
  5: {
    title: "Digital Marketing Strategy Basics",
    content: [
      "Target audience",
      "Goals",
      "Content planning",
      "Measurement"
    ],
    task: "Create a simple strategy for Namma Web"
  }
  // Day 6–30 will follow same structure (we’ll extend next)
};

export default function DayLessonPage() {
  const { day } = useParams();
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);

  const lesson = lessons[day];

  if (!lesson) {
    return (
      <div>
        <h1>Lesson Coming Soon 🚧</h1>
        <p>Content will be available shortly.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Day {day}: {lesson.title}</h1>
      <p style={{ color: "#475569", marginBottom: "30px" }}>
        Learn step-by-step with real Namma Web examples
      </p>

      <Section title="📘 Key Concepts">
        <ul>
          {lesson.content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="🏢 Namma Web Example">
        <p>
          Think how Namma Web uses today’s concept to attract students,
          build trust, and grow digitally.
        </p>
      </Section>

      <Section title="🤖 AI Practice">
        <pre style={pre}>
Use ChatGPT to explain "{lesson.title}"
in simple words with an example.
        </pre>
      </Section>

      <Section title="🛠 Assignment">
        <p>{lesson.task}</p>
        <p>
          📧 Submit to:
          <strong> nammaweb.assist@gmail.com</strong>
        </p>
      </Section>

      <Section title="✅ Confirmation">
        <label>
          <input
            type="checkbox"
            checked={confirmed}
            onChange={() => setConfirmed(!confirmed)}
          />{" "}
          I have completed today’s assignment
        </label>
      </Section>

      <button
        disabled={!confirmed}
        onClick={() => router.push(`/day/${Number(day) + 1}`)}
        style={{
          ...primaryBtn,
          background: confirmed ? "#16a34a" : "#9ca3af",
          cursor: confirmed ? "pointer" : "not-allowed"
        }}
      >
        {confirmed ? "Proceed to Next Day ▶" : "Complete assignment to continue"}
      </button>
    </div>
  );
}

/* SECTION COMPONENT */
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
  padding: "16px 28px",
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
