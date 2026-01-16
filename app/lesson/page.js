"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

/* ===========================
   FULL SYLLABUS (DAY 1–30)
=========================== */

const syllabus = [
  {
    day: 1,
    title: "Introduction to Digital Marketing",
    definition: "Digital Marketing is promoting products and services using the internet.",
    notes: [
      "Traditional vs Digital Marketing",
      "Why businesses go online",
      "Career scope in Digital Marketing"
    ],
    questions: [
      "Why did you choose Digital Marketing?",
      "Where do you search before buying something?"
    ]
  },
  {
    day: 2,
    title: "Understanding Online Customers",
    definition: "Customer behaviour explains how users think and act online.",
    notes: [
      "Customer journey",
      "Search intent",
      "Trust factors"
    ],
    questions: [
      "How do students search for courses?",
      "What makes you trust a website?"
    ]
  },
  {
    day: 3,
    title: "Digital Marketing Channels",
    definition: "Channels are platforms used to reach customers online.",
    notes: [
      "SEO",
      "Social Media",
      "Paid Ads",
      "Email Marketing"
    ],
    questions: [
      "Which channel do you use most?",
      "Why is SEO important?"
    ]
  },
  {
    day: 4,
    title: "Introduction to SEO",
    definition: "SEO improves website visibility on Google.",
    notes: [
      "What is SEO",
      "Why SEO matters",
      "Examples of SEO"
    ],
    questions: [
      "Why SEO is long-term?",
      "What happens without SEO?"
    ]
  },
  {
    day: 5,
    title: "Keyword Research Basics",
    definition: "Keyword research finds what users search on Google.",
    notes: [
      "Short-tail keywords",
      "Long-tail keywords",
      "Search intent"
    ],
    questions: [
      "Which keyword suits Namma Web?",
      "Why long-tail keywords convert?"
    ]
  }
  // Day 6–30 will extend exactly the same way
];

export default function LessonPage() {
  const params = useSearchParams();
  const router = useRouter();

  const day = Number(params.get("day")) || 1;
  const lesson = syllabus.find(l => l.day === day);

  const [completed, setCompleted] = useState(false);

  if (!lesson) {
    return <h1>Lesson not found</h1>;
  }

  return (
    <div>
      <h1>Day {lesson.day}: {lesson.title}</h1>

      <h2>📘 Definition</h2>
      <p>{lesson.definition}</p>

      <h2>📝 Notes</h2>
      <ul>
        {lesson.notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>

      <h2>❓ Assessment Questions</h2>
      <ol>
        {lesson.questions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ol>

      <h2>🛠 Assignment</h2>
      <p>
        Answer and mail to:<br />
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
        onClick={() => router.push(`/lesson?day=${day + 1}`)}
        style={{
          padding: "14px 24px",
          background: completed ? "#16a34a" : "#9ca3af",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: completed ? "pointer" : "not-allowed"
        }}
      >
        Proceed to Day {day + 1} ▶
      </button>
    </div>
  );
}
