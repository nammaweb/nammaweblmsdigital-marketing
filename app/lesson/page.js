"use client";

import { useEffect, useState } from "react";

/* ===========================
   FULL ORDERED SYLLABUS
=========================== */

const syllabus = [
  {
    day: 1,
    title: "Introduction to Digital Marketing",
    notes: [
      "What is Digital Marketing?",
      "Traditional vs Digital Marketing",
      "Why businesses need online presence",
      "Career scope in Digital Marketing"
    ],
    assignment: "Explain why Digital Marketing is important for Namma Web."
  },
  {
    day: 2,
    title: "Understanding Online Customers",
    notes: [
      "Customer journey",
      "Search behaviour",
      "Trust building",
      "Decision making process"
    ],
    assignment: "Explain how students search for Digital Marketing courses online."
  },
  {
    day: 3,
    title: "Digital Marketing Channels",
    notes: [
      "SEO",
      "Social Media Marketing",
      "Paid Ads",
      "Email Marketing"
    ],
    assignment: "List which channels Namma Web should focus on and why."
  },
  {
    day: 4,
    title: "Introduction to SEO",
    notes: [
      "What is SEO?",
      "How Google ranks websites",
      "Organic vs Paid traffic",
      "Benefits of SEO"
    ],
    assignment: "Explain how SEO can help Namma Web grow."
  },
  {
    day: 5,
    title: "Keyword Research",
    notes: [
      "What are keywords?",
      "Short tail vs Long tail keywords",
      "Search intent",
      "Finding keywords for Namma Web"
    ],
    assignment: "Find 5 keywords suitable for Namma Web."
  }
];

export default function LessonPage() {
  const [day, setDay] = useState(1);

  // 🔥 Read day directly from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const d = Number(params.get("day")) || 1;
    setDay(d);
  }, []);

  const lesson = syllabus.find(l => l.day === day);

  if (!lesson) {
    return <h1>Lesson Not Found</h1>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Day {lesson.day}: {lesson.title}</h1>

      <h2>📘 Notes</h2>
      <ul>
        {lesson.notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>

      <h2>🛠 Assignment</h2>
      <p>{lesson.assignment}</p>
      <p>
        Send your answers to:<br />
        <strong>nammaweb.assist@gmail.com</strong>
      </p>

      <br />

      <button
        onClick={() => {
          window.location.href = `/lesson?day=${day + 1}`;
        }}
        style={{
          padding: "12px 20px",
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Proceed to Day {day + 1} ▶
      </button>
    </div>
  );
}
