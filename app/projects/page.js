export default function ProjectsPage() {
  return (
    <div>
      <h1>🛠 Live Projects – Namma Web</h1>
      <p style={{ color: "#475569", marginBottom: "30px" }}>
        Students will work on real-time digital marketing projects under
        Namma Web. Performance in these projects plays a key role in
        certification, rewards, and placement opportunities.
      </p>

      <ProjectCard
        title="🌐 Website SEO Project"
        description="Optimise Namma Web and partner websites for search engines."
        tasks={[
          "Keyword research",
          "On-page SEO implementation",
          "Content optimisation",
          "SEO reporting"
        ]}
      />

      <ProjectCard
        title="📱 Social Media Growth Project"
        description="Grow Namma Web social media presence organically."
        tasks={[
          "Instagram & LinkedIn content planning",
          "Post & reel creation",
          "Hashtag research",
          "Engagement analysis"
        ]}
      />

      <ProjectCard
        title="📢 Paid Advertising Project"
        description="Plan and manage paid ad campaigns."
        tasks={[
          "Google Ads campaign structure",
          "Meta Ads creatives & targeting",
          "Budget planning",
          "Performance tracking"
        ]}
      />

      <ProjectCard
        title="📊 Analytics & Reporting Project"
        description="Analyse campaign performance and prepare reports."
        tasks={[
          "Google Analytics tracking",
          "Conversion analysis",
          "ROI calculation",
          "Client-ready reports"
        ]}
      />

      <ProjectCard
        title="🤖 AI Marketing Project"
        description="Use AI tools to enhance marketing efficiency."
        tasks={[
          "AI content generation",
          "Ad copy optimisation",
          "Competitor analysis",
          "Automation workflows"
        ]}
      />

      <section style={noteBox}>
        <h3>🎯 Important Note</h3>
        <p>
          These live projects are mandatory. Students who show consistency,
          quality execution, and innovation may receive rewards and
          placement opportunities up to <strong>4 LPA</strong>.
        </p>
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#475569" }}>
          Hiring decisions are solely at the discretion of Namma Web management.
        </p>
      </section>
    </div>
  );
}

/* COMPONENT */

function ProjectCard({ title, description, tasks }) {
  return (
    <div style={card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
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
  marginTop: "40px",
  padding: "25px",
  background: "#f1f5f9",
  borderRadius: "14px"
};
