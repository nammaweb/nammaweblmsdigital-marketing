"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const syllabus = {
  1: {
    title: "Digital Marketing Ecosystem & AI Revolution",

    video: "https://www.youtube.com/embed/6mbwJ2xhgzM",

    notes: `
Digital Marketing is the strategic use of online platforms to promote products, 
services, or brands through measurable and optimized digital channels.

Key Pillars:
• SEO
• Social Media
• Paid Advertising
• Email Marketing
• Analytics
• AI Automation

AI has transformed marketing through:
• Automated content generation
• Predictive analytics
• Customer segmentation
• Smart ad targeting
    `,

    example: `
Case Study: Nike

Nike uses data-driven personalization and AI-based ads to target users 
based on browsing behaviour, purchase history and interests.
    `,

    news: `
2024 Trend: AI-driven marketing automation tools increased conversion rates 
by 35% across e-commerce platforms globally (Source: Forbes Marketing Report).
    `,

    quiz: [
      {
        question: "What is Digital Marketing?",
        options: [
          "Newspaper Advertising",
          "Promotion using digital channels",
          "Cold calling strategy",
          "Retail store marketing"
        ],
        correct: 1
      },
      {
        question: "Which is NOT a digital marketing channel?",
        options: [
          "SEO",
          "Instagram",
          "Television Only",
          "Google Ads"
        ],
        correct: 2
      },
      {
        question: "What does AI help in marketing?",
        options: [
          "Manual printing",
          "Data automation",
          "Billboard painting",
          "Door-to-door selling"
        ],
        correct: 1
      },
      {
        question: "Which stage comes first in AIDA?",
        options: ["Action", "Awareness", "Desire", "Interest"],
        correct: 1
      },
      {
        question: "Which metric measures success?",
        options: ["ROI", "Temperature", "Weather", "Population"],
        correct: 0
      },
      {
        question: "SEO stands for?",
        options: [
          "Search Engine Optimization",
          "Sales Engine Online",
          "Social Engagement Option",
          "Search Email Outreach"
        ],
        correct: 0
      },
      {
        question: "Which platform is used for professional branding?",
        options: ["LinkedIn", "TikTok", "Snapchat", "WhatsApp"],
        correct: 0
      },
      {
        question: "What is conversion?",
        options: [
          "Visitor becoming customer",
          "Website loading",
          "Ad skipping",
          "Scrolling feed"
        ],
        correct: 0
      },
      {
        question: "Which tool is AI-based?",
        options: ["ChatGPT", "Notebook", "Paper", "Poster"],
        correct: 0
      },
      {
        question: "Digital marketing is measurable because?",
        options: [
          "It uses data analytics",
          "It uses TV",
          "It is offline",
          "It is random"
        ],
        correct: 0
      }
    ],

    assignment: `
1. Create a LinkedIn post introducing Namma Web AI Marketing Course.
2. Identify which funnel stage it targets.
3. Suggest 3 AI tools for Namma Web growth.
4. Prepare a short digital marketing strategy document (1 page).
Submit to: nammaweb.assist@gmail.com
    `
  }
};

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

    if (calculatedScore >= 40 && day >= currentDay) {
      const studentRef = doc(db, "students", name);
      await updateDoc(studentRef, {
        currentDay: currentDay + 1
      });
      alert("Quiz Passed! Next day unlocked.");
    } else {
      alert("You need 40+ marks to unlock next lesson.");
    }
  };

  if (!lesson) return <h1>Content Coming Soon</h1>;
  if (day > currentDay) return <h1>🔒 Lesson Locked</h1>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Day {day}: {lesson.title}</h1>

      <iframe
        width="100%"
        height="350"
        src={lesson.video}
        allowFullScreen
      />

      <h2>📘 Notes</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>{lesson.notes}</pre>

      <h2>🏢 Industry Example</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>{lesson.example}</pre>

      <h2>📰 Industry News</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>{lesson.news}</pre>

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

      <button onClick={submitQuiz}>
        Submit Quiz
      </button>

      {score !== null && <h3>Your Score: {score} / 50</h3>}

      <h2>🛠 Assignment</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>{lesson.assignment}</pre>
    </div>
  );
}
