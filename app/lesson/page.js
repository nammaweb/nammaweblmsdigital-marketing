"use client";

import { useEffect, useState } from "react";

const syllabus = [
  {
    day: 1,
    title: "Introduction to Digital Marketing",
    content: "This is Day 1 content."
  },
  {
    day: 2,
    title: "Understanding Online Customers",
    content: "This is Day 2 content."
  },
  {
    day: 3,
    title: "Digital Marketing Channels",
    content: "This is Day 3 content."
  }
];

export default function LessonPage() {
  const [day, setDay] = useState(1);

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
      <p>{lesson.content}</p>

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
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Next Day ▶
      </button>
    </div>
  );
}
