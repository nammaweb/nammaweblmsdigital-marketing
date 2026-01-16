"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/* ===========================
   COURSE CONTENT (DAY 1–30)
=========================== */

const lessons = {
  1: {
    title: "Introduction to Digital Marketing",
    video: "https://www.youtube.com/embed/6mbwJ2xhgzM",
    points: [
      "What is Digital Marketing",
      "Traditional vs Digital Marketing",
      "Why digital skills matter",
      "Career opportunities"
    ],
    questions: [
      "Why did you choose Digital Marketing?",
      "Where do you search before buying something?"
    ]
  },
  2: {
    title: "Understanding Online Customers",
    video: "https://www.youtube.com/embed/9No-FiEInLA",
    points: [
      "Customer journey",
      "Online behavior",
      "Trust & decision making",
      "Pain points"
    ],
    questions: [
      "How do students search for courses?",
      "What builds trust online?"
    ]
  },
  3: {
    title: "Digital Marketing Channels Overview",
    video: "https://www.youtube.com/embed/nNbcB5m4sU4",
    points: [
      "SEO",
      "Social Media",
      "Paid Ads",
      "Email & Automation"
    ],
    questions: [
      "Which channel do you use most?",
      "Why is SEO important?"
    ]
  },
  4: {
    title: "Introduction to AI in Marketing",
    video: "https://www.youtube.com/embed/2ePf9rue1Ao",
    points: [
      "What is AI?",
      "Why marketers use AI",
      "AI tools overview",
      "Ethical use of AI"
    ],
    questions: [
      "How can AI save time?",
      "Where should AI not be used?"
    ]
  },
  5: {
    title: "Building a Digital Marketing Strategy",
    video: "https://www.youtube.com/embed/XkRfs0hF6Lw",
    points: [
      "Target audience",
      "Business goals",
      "Content planning",
      "Measurement"
    ],
    questions: [
      "Who is Namma Web’s target audience?",
      "What is a marketing goal?"
    ]
  }
  // (Days 6–30 remain same as earlier and WILL work now)
};

/* ===========================
   PAGE COMPONENT
=========================== */

export default function DayLessonPage() {
  const params = useParams();
  const router = useRouter();

  // Convert day safely
  const day = Number(params.day);

  const [confirmed, setConfirmed] = useState(false);

  // 🔥 CRITICAL FIX: reset state when day changes
  useEffect(() => {
    setConfirmed(false);
  }, [day]);

  const lesson = lessons[day];

  if (!lesson) {
    return (
      <div>
        <h1>Lesson Coming Soon 🚧</h1>
        <p>Content for Day {day} will be available shortly.</p>
      </div>
    );
  }

  return (
    <div key={day}>
      <h1>Day {day}: {lesson.title}</h1>

      {/* VIDEO */}
      <iframe
        width="100%"
        height="360"
        src={lesson.video}
        title={lesson.title}
        allowFullScreen
        style={{ borderRadius: "12px", marginBottom: "20px" }}
      />

      {/* LEARNING POINTS */}
      <h2>📘 What You Will Learn</h2>
      <ul>
        {lesson.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      {/* QUESTIONS */}
      <h2>🤔 Think & Answer</h2>
      <ol>
        {lesson.questions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ol>

      {/* ASSIGNMENT */}
      <h2>🛠 Assignment</h2>
      <p>
        Apply today’s topic practically and email your work to:
        <br />
        <strong>nammaweb.assist@gmail.com</strong>
      </p>

      {/* CONFIRMATION */}
      <label>
        <input
          type="checkbox"
          checked={confirmed}
          onChange={() => setConfirmed(!confirmed)}
        />{" "}
        I have completed and submitted today’s assignment
      </label>

      <br /><br />

      {/* NEXT BUTTON */}
      <button
        disabled={!confirmed}
        onClick={() => router.push(`/day/${day + 1}`)}
        style={{
          padding: "14px 24px",
          background: confirmed ? "#16a34a" : "#9ca3af",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: confirmed ? "pointer" : "not-allowed"
        }}
      >
        {confirmed ? "Proceed to Next Day ▶" : "Complete assignment to continue"}
      </button>
    </div>
  );
}
