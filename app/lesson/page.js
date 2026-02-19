"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const syllabus = {
  1: {
    title: "Digital Marketing Fundamentals",
    youtube: "https://www.youtube.com/embed/6mbwJ2xhgzM",
    notes: [
      "Digital marketing promotes products using online platforms.",
      "Includes SEO, Social Media, Ads, Email Marketing.",
      "AI tools reduce content production time drastically.",
      "ROI is measurable in digital platforms."
    ],
    quiz: [
      "What is digital marketing?",
      "Difference between traditional and digital marketing?",
      "Name 3 digital marketing platforms.",
      "Why is SEO important?",
      "How does AI help marketers?"
    ],
    assignment:
      "Write 1 LinkedIn post introducing Namma Web and explain why AI marketing is important."
  },

  2: {
    title: "Customer Psychology & Online Behaviour",
    youtube: "https://www.youtube.com/embed/9No-FiEInLA",
    notes: [
      "Customer journey has awareness, consideration, decision stages.",
      "Trust signals increase conversions.",
      "Gen-Z prefers short video content.",
      "Emotional triggers improve marketing."
    ],
    quiz: [
      "What is customer journey?",
      "What builds trust online?",
      "Why Gen-Z prefers reels?",
      "Define conversion.",
      "Explain emotional trigger."
    ],
    assignment:
      "Create an Instagram reel script promoting Namma Web AI Course."
  }
};

export default function LessonPage() {
  const [day, setDay] = useState(1);
  const [name, setName] = useState("");
  const [currentDay, setCurrentDay] = useState(1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const d = Number(params.get("day")) || 1;
    setDay(d);

    const storedName = localStorage.getItem("studentName");
    if (!storedName) return;

    setName(storedName);

    const fetchProgress = async () => {
      const studentRef = doc(db, "students", storedName);
      const studentSnap = await getDoc(studentRef);

      if (studentSnap.exists()) {
        setCurrentDay(studentSnap.data().currentDay);
      }
    };

    fetchProgress();
  }, []);

  const lesson = syllabus[day];

  const handleQuizSubmit = async () => {
    if (score >= 20 && day >= currentDay) {
      const studentRef = doc(db, "students", name);
      await updateDoc(studentRef, {
        currentDay: currentDay + 1
      });
      alert("Quiz passed! Next day unlocked.");
      window.location.href = "/course";
    } else {
      alert("Score must be 20+ to unlock next day.");
    }
  };

  if (!lesson) return <h1>Content Coming Soon</h1>;

  if (day > currentDay) return <h1>🔒 This lesson is locked.</h1>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Day {day}: {lesson.title}</h1>

      <iframe
        width="100%"
        height="300"
        src={lesson.youtube}
        title="YouTube video"
        allowFullScreen
      />

      <h2>📘 Notes</h2>
      <ul>
        {lesson.notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>

      <h2>📝 Quiz (25 Marks)</h2>
      {lesson.quiz.map((q, index) => (
        <div key={index}>
          <p>{q}</p>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) setScore(score + 5);
            }}
          />
          Correct Answer
        </div>
      ))}

      <button
        onClick={handleQuizSubmit}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none"
        }}
      >
        Submit Quiz
      </button>

      <h2>🛠 Assignment</h2>
      <p>{lesson.assignment}</p>
      <p>
        Submit to: <strong>nammaweb.assist@gmail.com</strong>
      </p>
    </div>
  );
}
