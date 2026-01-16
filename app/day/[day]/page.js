"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

/* ===========================
   COMPLETE ORDERED SYLLABUS
=========================== */

const syllabus = [
  {
    day: 1,
    title: "Introduction to Digital Marketing",
    definition:
      "Digital Marketing is the promotion of products or services using the internet and digital technologies.",
    notes: [
      "Difference between traditional and digital marketing",
      "Why digital marketing is important today",
      "Career opportunities in digital marketing"
    ],
    assessment: [
      "Why do businesses need digital marketing?",
      "How is digital marketing different from traditional marketing?"
    ]
  },
  {
    day: 2,
    title: "Understanding Online Customer Behaviour",
    definition:
      "Customer behaviour refers to how users search, compare, and decide online.",
    notes: [
      "Customer journey stages",
      "Search behaviour",
      "Trust and decision making"
    ],
    assessment: [
      "How do students search for courses online?",
      "What builds trust on a website?"
    ]
  },
  {
    day: 3,
    title: "Digital Marketing Channels Overview",
    definition:
      "Digital marketing channels are platforms used to reach customers online.",
    notes: [
      "SEO",
      "Social Media Marketing",
      "Paid Advertising",
      "Email Marketing"
    ],
    assessment: [
      "Which channel do you use most and why?",
      "Why is SEO important?"
    ]
  },
  {
    day: 4,
    title: "Introduction to Search Engines",
    definition:
      "Search engines help users find information on the internet.",
    notes: [
      "How Google works",
      "Search results page",
      "Organic vs paid results"
    ],
    assessment: [
      "What is a search engine?",
      "Why Google is popular?"
    ]
  },
  {
    day: 5,
    title: "Introduction to SEO",
    definition:
      "SEO is the process of improving website visibility on search engines.",
    notes: [
      "What is SEO",
      "Benefits of SEO",
      "SEO career scope"
    ],
    assessment: [
      "Why SEO is important for businesses?",
      "What happens if SEO is ignored?"
    ]
  }

  // 👉 Day 6–30 will continue in SAME order & structure
];

/* ===========================
   PAGE COMPONENT
=========================== */

export default function DayLessonPage() {
  const { day } = useParams();
  const router = useRouter();
  const currentDay = Number(day);

  const lesson = syllabus.find(item => item.day === currentDay);
  const [completed, setCompleted] = useState(false);

  if (!lesson) {
    return (
      <div>
        <h1>Lesson Not Available</h1>
        <p>Content for Day {currentDay} will be added.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Day {lesson.day}: {lesson.title}</h1>

      <h2>📘 Definition</h2>
      <p>{lesson.definition}</p>

      <h2>📝 Notes</h2>
      <ul>
        {lesson.notes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>

      <h2>❓ Assessment Questions</h2>
      <ol>
        {lesson.assessment.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ol>

      <h2>🛠 Assignment</h2>
      <p>
        Write answers and mail to:<br />
        <strong>nammaweb.assist@gmail.com</strong>
      </p>

      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />{" "}
        I have completed today’s assignment
      </label>

      <br /><br />

      <button
        disabled={!completed}
        onClick={() => router.push(`/day/${currentDay + 1}`)}
        style={{
          padding: "14px 24px",
          background: completed ? "#16a34a" : "#9ca3af",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: completed ? "pointer" : "not-allowed"
        }}
      >
        Proceed to Day {currentDay + 1} ▶
      </button>
    </div>
  );
}
