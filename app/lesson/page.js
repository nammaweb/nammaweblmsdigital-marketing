"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { syllabus } from "../../data/syllabus";

export default function LessonPage() {
  const [day, setDay] = useState(1);
  const [currentDay, setCurrentDay] = useState(1);
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const d = Number(params.get("day")) || 1;
    setDay(d);

    const storedName = localStorage.getItem("studentName");
    if (!storedName) return;

    setName(storedName);

    const fetchProgress = async () => {
      const studentRef = doc(db, "students", storedName);
      const snap = await getDoc(studentRef);
      if (snap.exists()) {
        setCurrentDay(snap.data().currentDay);
      }
    };

    fetchProgress();
  }, []);

  const lesson = syllabus[day];

  const handleSelect = (qIndex, optionIndex) => {
    setAnswers({ ...answers, [qIndex]: optionIndex });
  };

  const submitQuiz = async () => {
    let calculatedScore = 0;

    lesson.quiz.forEach((q, index) => {
      if (answers[index] === q.correct) {
        calculatedScore += 5;
      }
    });

    setScore(calculatedScore);

    if (calculatedScore >= 40 && day === currentDay) {
      const studentRef = doc(db, "students", name);
      await updateDoc(studentRef, {
        currentDay: currentDay + 1
      });
      alert("Excellent! Next lesson unlocked.");
    } else {
      alert("You need minimum 40/50 to unlock next lesson.");
    }
  };

  if (!lesson) return <h1>Lesson Not Found</h1>;
  if (day > currentDay) return <h1>🔒 This lesson is locked</h1>;

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>

      <h1 style={{ fontSize: "32px" }}>
        Day {day}: {lesson.title}
      </h1>

      <div style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.05)"
      }}>
        <iframe
          width="100%"
          height="400"
          src={lesson.video}
          allowFullScreen
        />
      </div>

      <div style={{
        marginTop: "30px",
        padding: "25px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.08)"
      }}>
        <h2>📘 Detailed Notes</h2>
        <pre style={{ whiteSpace: "pre-wrap", lineHeight: "1.7" }}>
          {lesson.notes}
        </pre>
      </div>

      <div style={{
        marginTop: "30px",
        padding: "25px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.08)"
      }}>
        <h2>🏢 Company Case Study</h2>
        <pre style={{ whiteSpace: "pre-wrap", lineHeight: "1.7" }}>
          {lesson.caseStudy}
        </pre>
      </div>

      <div style={{
        marginTop: "30px",
        padding: "25px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.08)"
      }}>
        <h2>📝 Quiz (50 Marks)</h2>

        {lesson.quiz.map((q, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <p><strong>{index + 1}. {q.question}</strong></p>
            {q.options.map((option, i) => (
              <div key={i}>
                <input
                  type="radio"
                  name={`q${index}`}
                  onChange={() => handleSelect(index, i)}
                /> {option}
              </div>
            ))}
          </div>
        ))}

        <button
          onClick={submitQuiz}
          style={{
            padding: "12px 25px",
            background: "#22c55e",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Submit Quiz
        </button>

        {score !== null && (
          <h3>Your Score: {score} / 50</h3>
        )}
      </div>

      <div style={{
        marginTop: "30px",
        padding: "25px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.08)"
      }}>
        <h2>🛠 Assignment</h2>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {lesson.assignment}
        </pre>
        <p>Submit to: nammaweb.assist@gmail.com</p>
      </div>

    </div>
  );
}
