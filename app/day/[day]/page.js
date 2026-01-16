"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function DayLessonPage() {
  const { day } = useParams();
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div>
      <h1>Day {day}: Introduction to Digital Marketing 🌐</h1>
      <p style={{ color: "#475569", marginBottom: "30px" }}>
        Read carefully. Think practically. Learn like a real digital marketer.
      </p>

      {/* DEFINITION */}
      <Section title="📘 What is Digital Marketing?">
        <p>
          <strong>Digital Marketing</strong> is the promotion of products,
          services, or brands using the internet and digital technologies such
          as search engines, social media, websites, email, and AI tools.
        </p>
        <p>
          Unlike traditional marketing (newspapers, banners, TV), digital
          marketing allows businesses to reach the right audience, measure
          results, and improve continuously.
        </p>
      </Section>

      {/* WHY IMPORTANT */}
      <Section title="❓ Why Digital Marketing is Important Today">
        <ul>
          <li>People search on Google before buying anything</li>
          <li>Everyone spends time on Instagram, YouTube & LinkedIn</li>
          <li>Businesses want measurable results</li>
          <li>Digital skills give high-growth career opportunities</li>
        </ul>
      </Section>

      {/* TYPES */}
      <Section title="🧩 Main Types of Digital Marketing">
        <ul>
          <li><strong>SEO</strong> – Ranking websites on Google</li>
          <li><strong>Content Marketing</strong> – Blogs, videos, posts</li>
          <li><strong>Social Media Marketing</strong> – Instagram, LinkedIn</li>
          <li><strong>Paid Ads</strong> – Google Ads, Meta Ads</li>
          <li><strong>Email Marketing</strong> – Automated emails</li>
          <li><strong>AI Marketing</strong> – Using AI to work faster & smarter</li>
        </ul>
      </Section>

      {/* REAL EXAMPLE */}
      <Section title="🏢 Real Example – How Namma Web Uses Digital Marketing">
        <p>
          Namma Web attracts students by:
        </p>
        <ul>
          <li>Ranking for keywords like <em>Digital Marketing Course in Bangalore</em></li>
          <li>Posting educational content on LinkedIn & Instagram</li>
          <li>Using AI to write blogs, captions & ads</li>
          <li>Building trust through projects & reviews</li>
        </ul>
      </Section>

      {/* GEN Z */}
      <Section title="🧠 How Gen-Z Consumes Content">
        <ul>
          <li>Short videos (Reels & Shorts)</li>
          <li>Honest & relatable content</li>
          <li>Learning through real examples</li>
          <li>Visual + simple explanations</li>
        </ul>
        <p>
          As a digital marketer, your job is to create content that feels
          <strong> real, helpful and engaging</strong>.
        </p>
      </Section>

      {/* THINK */}
      <Section title="🤔 Think Like a Digital Marketer">
        <p>Answer these questions honestly:</p>
        <ol>
          <li>If you want to learn a skill, where do you search first?</li>
          <li>What made you choose Namma Web?</li>
          <li>What content would attract you on Instagram?</li>
        </ol>
      </Section>

      {/* AI */}
      <Section title="🤖 How AI Helps Digital Marketers">
        <p>
          AI tools like ChatGPT help marketers:
        </p>
        <ul>
          <li>Write blogs faster</li>
          <li>Create captions & ad copies</li>
          <li>Generate content ideas</li>
          <li>Analyze competitors</li>
        </ul>

        <p><strong>Example AI Prompt:</strong></p>
        <pre style={pre}>
Write an Instagram caption for Namma Web
promoting a Digital Marketing course
for Gen-Z students in Bangalore.
        </pre>
      </Section>

      {/* PRACTICAL */}
      <Section title="✍️ Practical Work (Very Important)">
        <ul>
          <li>Write 1 LinkedIn post for Namma Web</li>
          <li>Write 1 Instagram caption</li>
          <li>Explain how YOU would promote Namma Web online</li>
        </ul>
      </Section>

      {/* ASSIGNMENT */}
      <Section title="🛠 Assignment Submission">
        <p>
          Send your work by email to:
          <br />
          <strong>nammaweb.assist@gmail.com</strong>
        </p>
        <p style={{ fontSize: "14px", color: "#475569" }}>
          This assignment helps mentors evaluate your understanding.
        </p>
      </Section>

      {/* CONFIRM */}
      <Section title="✅ Confirmation">
        <label>
          <input
            type="checkbox"
            checked={confirmed}
            onChange={() => setConfirmed(!confirmed)}
          />{" "}
          I have completed and submitted my assignment
        </label>
      </Section>

      {/* NEXT */}
      <button
        disabled={!confirmed}
        onClick={() => router.push("/day/2")}
        style={{
          ...primaryBtn,
          background: confirmed ? "#16a34a" : "#9ca3af",
          cursor: confirmed ? "pointer" : "not-allowed"
        }}
      >
        {confirmed ? "Proceed to Day 2 ▶" : "Complete assignment to continue"}
      </button>
    </div>
  );
}

/* REUSABLE SECTION */
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
