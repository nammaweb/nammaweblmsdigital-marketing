"use client";

import { useState } from "react";

export default function SyllabusPage() {
  return (
    <div>
      <h1>📘 Digital Marketing Course Syllabus</h1>
      <p style={{ color: "#475569", marginBottom: "30px" }}>
        6 Months • Live Projects • AI-Powered Learning • Namma Web
      </p>

      <Month
        title="Month 1 – Digital Marketing Foundations & AI"
        weeks={[
          {
            title: "Week 1 – Introduction & Market Basics",
            topics: [
              "What is Digital Marketing",
              "Marketing fundamentals",
              "Customer psychology",
              "Introduction to AI tools"
            ]
          },
          {
            title: "Week 2 – Branding & Online Visibility",
            topics: [
              "Brand identity",
              "Website basics",
              "Domain & hosting",
              "Competitor analysis"
            ]
          },
          {
            title: "Week 3 – Content & Research",
            topics: [
              "Content types",
              "Keyword research",
              "AI content generation",
              "Market research tools"
            ]
          },
          {
            title: "Week 4 – Strategy Building",
            topics: [
              "Digital strategy",
              "Customer funnel",
              "Growth planning",
              "Mini live project"
            ]
          }
        ]}
      />

      <Month
        title="Month 2 – Search Engine Optimization (SEO)"
        weeks={[
          {
            title: "Week 1 – SEO Fundamentals",
            topics: [
              "How search engines work",
              "Keyword research",
              "Search intent",
              "SEO tools"
            ]
          },
          {
            title: "Week 2 – On-Page SEO",
            topics: [
              "Meta tags",
              "Content optimisation",
              "Internal linking",
              "Image optimisation"
            ]
          },
          {
            title: "Week 3 – Technical & Local SEO",
            topics: [
              "Technical SEO basics",
              "Site speed",
              "Local SEO",
              "Google Business Profile"
            ]
          },
          {
            title: "Week 4 – SEO Live Project",
            topics: [
              "Website audit",
              "SEO implementation",
              "Ranking tracking",
              "SEO reporting"
            ]
          }
        ]}
      />

      <Month
        title="Month 3 – Social Media Marketing"
        weeks={[
          {
            title: "Week 1 – Social Media Strategy",
            topics: [
              "Platform overview",
              "Content planning",
              "Audience targeting",
              "Growth strategy"
            ]
          },
          {
            title: "Week 2 – Instagram & Facebook",
            topics: [
              "Profile optimisation",
              "Reels & posts",
              "Hashtags",
              "Engagement strategy"
            ]
          },
          {
            title: "Week 3 – LinkedIn & YouTube",
            topics: [
              "LinkedIn personal branding",
              "YouTube basics",
              "Short-form content",
              "Analytics"
            ]
          },
          {
            title: "Week 4 – Social Media Live Project",
            topics: [
              "Account handling",
              "Growth tracking",
              "Content execution",
              "Reporting"
            ]
          }
        ]}
      />

      <Month
        title="Month 4 – Paid Advertising"
        weeks={[
          {
            title: "Week 1 – Google Ads",
            topics: [
              "Search ads",
              "Keyword planning",
              "Ad copy writing",
              "Campaign structure"
            ]
          },
          {
            title: "Week 2 – Meta Ads",
            topics: [
              "Facebook ads",
              "Instagram ads",
              "Audience targeting",
              "Creatives"
            ]
          },
          {
            title: "Week 3 – Funnels & Conversion",
            topics: [
              "Landing pages",
              "Lead generation",
              "Conversion tracking",
              "Optimisation"
            ]
          },
          {
            title: "Week 4 – Ads Live Project",
            topics: [
              "Campaign launch",
              "Budget handling",
              "Performance analysis",
              "ROI tracking"
            ]
          }
        ]}
      />

      <Month
        title="Month 5 – Automation, CRM & Analytics"
        weeks={[
          {
            title: "Week 1 – Email Marketing",
            topics: [
              "Email campaigns",
              "Automation",
              "Segmentation",
              "Tools"
            ]
          },
          {
            title: "Week 2 – CRM & Funnels",
            topics: [
              "CRM basics",
              "Lead nurturing",
              "Sales funnels",
              "Automation logic"
            ]
          },
          {
            title: "Week 3 – Analytics",
            topics: [
              "Google Analytics",
              "Reports",
              "Tracking conversions",
              "Insights"
            ]
          },
          {
            title: "Week 4 – Automation Project",
            topics: [
              "Workflow setup",
              "Automation testing",
              "Reporting",
              "Optimization"
            ]
          }
        ]}
      />

      <Month
        title="Month 6 – Mastery, Strategy & Placement Prep"
        weeks={[
          {
            title: "Week 1 – Advanced Strategy",
            topics: [
              "Growth hacking",
              "Advanced funnels",
              "AI optimisation",
              "Scaling strategies"
            ]
          },
          {
            title: "Week 2 – Final Live Project",
            topics: [
              "Complete digital audit",
              "Execution",
              "Performance tracking",
              "Presentation"
            ]
          },
          {
            title: "Week 3 – Exam & Certification",
            topics: [
              "Revision",
              "Final exam",
              "Project evaluation",
              "Certification"
            ]
          },
          {
            title: "Week 4 – Placement & Career",
            topics: [
              "Portfolio building",
              "Interview prep",
              "Placement opportunity",
              "Career guidance"
            ]
          }
        ]}
      />
    </div>
  );
}

/* COMPONENTS */

function Month({ title, weeks }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={monthBox}>
      <div style={monthHeader} onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span>{open ? "−" : "+"}</span>
      </div>

      {open && (
        <div style={{ marginTop: "15px" }}>
          {weeks.map((week, i) => (
            <div key={i} style={weekBox}>
              <strong>{week.title}</strong>
              <ul>
                {week.topics.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* STYLES */

const monthBox = {
  background: "white",
  padding: "20px",
  borderRadius: "14px",
  marginBottom: "20px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  cursor: "pointer"
};

const monthHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const weekBox = {
  marginTop: "10px",
  paddingLeft: "15px"
};
