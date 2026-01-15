export default function RulesPage() {
  return (
    <div>
      <h1>📜 Rules, Certification & Placement Policy</h1>
      <p style={{ color: "#475569", marginBottom: "30px" }}>
        Please read the following terms carefully. These rules are mandatory
        for all students enrolled in the Namma Web Digital Marketing LMS.
      </p>

      {/* COURSE RULES */}
      <section style={card}>
        <h2>📘 Course Rules</h2>
        <ul>
          <li>Students must attend classes regularly.</li>
          <li>Daily lessons must be completed as per the schedule.</li>
          <li>Assignments must be submitted within the given timeline.</li>
          <li>Discipline and professionalism are mandatory.</li>
          <li>Mentor instructions must be followed strictly.</li>
        </ul>
      </section>

      {/* NO REFUND */}
      <section style={card}>
        <h2>❌ No Refund Policy</h2>
        <p>
          Fees once paid are <strong>non-refundable</strong> under any
          circumstances. This includes discontinuation, absence, or
          personal reasons.
        </p>
      </section>

      {/* CERTIFICATION */}
      <section style={card}>
        <h2>🎓 Certification Criteria</h2>
        <ul>
          <li>Minimum 75% course completion required.</li>
          <li>All mandatory assignments must be completed.</li>
          <li>Final exam conducted by Namma Web must be passed.</li>
          <li>Live project evaluation is compulsory.</li>
        </ul>
        <p style={{ marginTop: "10px", color: "#475569" }}>
          Certification will be issued only after meeting all criteria.
        </p>
      </section>

      {/* PLACEMENT */}
      <section style={card}>
        <h2>🧑‍💼 Placement Opportunity</h2>
        <p>
          Placement opportunities up to <strong>4 LPA</strong> may be
          offered based on:
        </p>
        <ul>
          <li>Project performance</li>
          <li>Consistency & discipline</li>
          <li>Skill level & execution quality</li>
          <li>Business requirements</li>
        </ul>
        <p style={{ marginTop: "10px", color: "#475569" }}>
          Hiring decisions are solely at the discretion of Namma Web
          management and are not guaranteed.
        </p>
      </section>

      {/* OFFLINE ACCESS */}
      <section style={noteBox}>
        <h2>🏢 Offline Class Access</h2>
        <p>
          Students can attend offline sessions and work on projects at
          any of the following Namma Web locations:
        </p>
        <ul>
          <li>Koramangala 4th Block</li>
          <li>Kengeri Metro Station – Opposite Branch</li>
          <li>Nagasandra – Christ Back Gate</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section style={contactBox}>
        <h3>📞 Contact & Support</h3>
        <p>Email: <strong>nammaweb.assist@gmail.com</strong></p>
        <p>WhatsApp: <strong>9241527429</strong></p>
      </section>
    </div>
  );
}

/* STYLES */

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  marginBottom: "25px"
};

const noteBox = {
  background: "#f1f5f9",
  padding: "25px",
  borderRadius: "14px",
  marginBottom: "25px"
};

const contactBox = {
  background: "#e0e7ff",
  padding: "25px",
  borderRadius: "14px"
};
