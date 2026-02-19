"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { syllabus } from "../../data/syllabus";
import { dailyQuestions } from "../../data/questions";

export default function Lesson() {

  const [day, setDay] = useState(1);
  const [currentDay, setCurrentDay] = useState(null);
  const [name, setName] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const d = Number(params.get("day")) || 1;
    setDay(d);

    const studentName = localStorage.getItem("studentName");

    if (!studentName) {
      window.location.href = "/login";
      return;
    }

    setName(studentName);

    const fetchData = async () => {
      try {
        const ref = doc(db, "students", studentName);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setCurrentDay(snap.data().currentDay || 1);
        } else {
          // Create student record if not exists
          await setDoc(ref, {
            name: studentName,
            currentDay: 1,
            totalScore: 0,
            totalCompletedLessons: 0,
            rankPoints: 0
          });
          setCurrentDay(1);
        }

        setLoading(false);

      } catch (error) {
        console.error("Firebase error:", error);
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  if (loading) {
    return <h1 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h1>;
  }

  const lesson = syllabus[day];
  const questions = dailyQuestions[day];

  if (!lesson) return <h1>Lesson not found</h1>;
  if (day > currentDay) return <h1>🔒 Lesson Locked</h1>;

  const handleSelect = (qIndex, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [qIndex]: optionIndex
    }));
  };

  const submitQuiz = async () => {

    let calculatedScore = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        calculatedScore += 5;
      }
    });

    setScore(calculatedScore);

    if (calculatedScore < 40) {
      alert("Minimum 40/50 required.");
      return;
    }

    try {

      const ref = doc(db, "students", name);
      const snap = await getDoc(ref);

      if (!snap.exists()) return;

      const data = snap.data();

      if (Number(day) === Number(data.currentDay)) {

        await updateDoc(ref, {
          currentDay: data.currentDay + 1,
          totalScore: (data.totalScore || 0) + calculatedScore,
          totalCompletedLessons: (data.totalCompletedLessons || 0) + 1,
          rankPoints: (data.rankPoints || 0) + calculatedScore
        });

        alert("Next lesson unlocked!");
        window.location.href = "/course";
      }

    } catch (error) {
      console.error("Update error:", error);
    }

  };

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>

      <h1>Day {day}: {lesson.title}</h1>

      <iframe
        width="100%"
        height="350"
        src={lesson.video}
        allowFullScreen
      />

      <pre style={{ whiteSpace: "pre-wrap", marginTop: "20px" }}>
        {lesson.notes}
      </pre>

      <h2>📝 Quiz (10 Questions – 50 Marks)</h2>

      {questions?.map((q, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p><strong>{index + 1}. {q.question}</strong></p>

          {q.options.map((option, i) => (
            <div key={i}>
              <input
                type="radio"
                name={`q${index}`}
                onChange={() => handleSelect(index, i)}
              />
              {" "}
              {option}
            </div>
          ))}
        </div>
      ))}

      <button
        onClick={submitQuiz}
        style={{
          padding: "10px 20px",
          background: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Submit Quiz
      </button>

      {score !== null && (
        <h3>Your Score: {score}/50</h3>
      )}

    </div>
  );
}
