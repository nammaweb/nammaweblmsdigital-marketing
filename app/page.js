export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section style={{
        background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
        color: "white",
        padding: "60px",
        borderRadius: "12px"
      }}>
        <h1 style={{ fontSize: "36px" }}>
          Digital Marketing Course with Live Projects & AI
        </h1>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Become a complete Digital Marketing expert with real business exposure at Namma Web
        </p>
        <a href="/login"
          style={{
            display: "inline-block",
            marginTop: "20px",
            background: "white",
            color: "#1e3a8a",
            padding: "12px 24px",
            borderRadius: "6px",
            fontWeight: "bold",
            textDecoration: "none"
          }}>
          Student Login
        </a>
      </section>

      {/* COURSE OVERVIEW */}
      <section id="course" style={{ marginTop: "50px" }}>
        <h2>📘 Course Overview</h2>
        <ul>
          <li>Duration: <b>6 Months</b></li>
          <li>Mode: Online + Offline (Bangalore)</li>
          <li>Live Projects on Namma Web</li>
          <li>AI-based Digital Marketing Training</li>
          <li>Certification & Placement Opportunity</li>
        </ul>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section style={{ marginTop: "40px" }}>
        <h2>🚀 What You Will Learn</h2>
        <ul>
          <li>SEO (Google ranking – real websites)</li>
          <li>Social Media Marketing (Instagram, LinkedIn, YouTube)</li>
          <li>Google Ads & Meta Ads</li>
          <li>Content Marketing & AI tools</li>
          <li>Email Marketing & Automation</li>
          <li>Analytics, Funnels & Growth Strategy</li>
        </ul>
      </section>

      {/* LIVE PROJECT */}
      <section style={{ marginTop: "40px" }}>
        <h2>🛠 Live Project Experience</h2>
        <p>
          Students will work on real-time digital marketing projects under Namma Web.
          Projects include website SEO, social media growth, paid campaigns, branding,
          lead generation and reporting.
        </p>
      </section>

      {/* RULES */}
      <section style={{ marginTop: "40px" }}>
        <h2>📜 Rules & Certification</h2>
        <ul>
          <li>No fees refund</li>
          <li>Regular attendance mandatory</li>
          <li>All assignments & projects must be completed</li>
          <li>Final exam required for certification</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ marginTop: "40px" }}>
        <h2>📞 Contact & Enquiry</h2>
        <p>Email: <b>nammaweb.assist@gmail.com</b></p>
        <p>WhatsApp: <b>9241527429</b></p>
        <p>Offline Centers: Koramangala | Kengeri | Nagasandra</p>
      </section>

    </div>
  );
}
