"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate").forEach(el => observer.observe(el));
  }, []);

  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero animate">
        <h1>Namma Web Digital Marketing LMS</h1>
        <p>
          AI-powered, live-project based Digital Marketing course designed to
          create real-world experts.
        </p>
        <a href="/login" className="cta">Student Login</a>
      </section>

      {/* TRUST & RECOGNITION */}
      <section className="section animate">
        <h2>🏆 Trust & Recognition</h2>
        <div className="grid">
          <TrustCard text="Recognised by Startup India" />
          <TrustCard text="Government Awarded Company" />
          <TrustCard text="Startup Karnataka Recognised" />
          <TrustCard text="MSME Registered" />
          <TrustCard text="Registered under Ministry of Corporate Affairs" />
        </div>
      </section>

      {/* COURSE OVERVIEW */}
      <section className="section light animate">
        <h2>📘 Course Overview</h2>
        <ul className="list">
          <li>⏳ Duration: 6 Months (180 Days)</li>
          <li>🧠 AI-assisted Digital Marketing Training</li>
          <li>🛠 Live Projects on Namma Web</li>
          <li>🎓 Certification & Placement Opportunity</li>
          <li>🏢 Online + Offline Access (Bangalore)</li>
        </ul>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="section animate">
        <h2>🚀 What You Will Master</h2>
        <div className="grid">
          <InfoCard title="SEO" text="Rank real websites on Google with live SEO tasks." />
          <InfoCard title="Social Media" text="Instagram, LinkedIn & YouTube growth strategies." />
          <InfoCard title="Paid Ads" text="Googl
