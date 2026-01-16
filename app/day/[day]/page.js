"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

/* ===========================
   COMPLETE COURSE DATA
=========================== */

const lessons = {
  1: {
    title: "Introduction to Digital Marketing",
    video: "https://www.youtube.com/embed/6mbwJ2xhgzM",
    points: [
      "What is Digital Marketing",
      "Traditional vs Digital Marketing",
      "Why companies need digital presence",
      "Career opportunities"
    ],
    questions: [
      "Why did you choose Digital Marketing?",
      "Where do you search before buying something?"
    ]
  },
  2: {
    title: "Understanding Online Customers",
    video: "https://www.youtube.com/embed/9No-FiEInLA",
    points: [
      "Customer journey",
      "Online behavior",
      "Trust & decision making",
      "Pain points"
    ],
    questions: [
      "How do students search for courses?",
      "What builds trust online?"
    ]
  },
  3: {
    title: "Digital Marketing Channels Overview",
    video: "https://www.youtube.com/embed/nNbcB5m4sU4",
    points: [
      "SEO",
      "Social Media",
      "Paid Ads",
      "Email & Automation"
    ],
    questions: [
      "Which channel do you use most?",
      "Why is SEO important?"
    ]
  },
  4: {
    title: "Introduction to AI in Marketing",
    video: "https://www.youtube.com/embed/2ePf9rue1Ao",
    points: [
      "What is AI?",
      "Why marketers use AI",
      "AI tools overview",
      "Ethical use of AI"
    ],
    questions: [
      "How can AI save time?",
      "Where should AI not be used?"
    ]
  },
  5: {
    title: "Building a Digital Marketing Strategy",
    video: "https://www.youtube.com/embed/XkRfs0hF6Lw",
    points: [
      "Target audience",
      "Business goals",
      "Content planning",
      "Measurement"
    ],
    questions: [
      "Who is Namma Web’s target audience?",
      "What is a marketing goal?"
    ]
  },

  /* ===== SEO MODULE ===== */

  6: {
    title: "What is SEO?",
    video: "https://www.youtube.com/embed/DvwS7cV9GmQ",
    points: [
      "Search engines",
      "Organic traffic",
      "Importance of SEO",
      "How Google ranks pages"
    ],
    questions: [
      "Why is SEO free traffic?",
      "What happens if SEO is ignored?"
    ]
  },
  7: {
    title: "Keyword Research",
    video: "https://www.youtube.com/embed/OMb5Z7WZy_k",
    points: [
      "What are keywords",
      "Short vs long-tail keywords",
      "Search intent",
      "Tools for keyword research"
    ],
    questions: [
      "Which keyword suits Namma Web?",
      "Why long-tail keywords convert?"
    ]
  },
  8: {
    title: "On-Page SEO",
    video: "https://www.youtube.com/embed/IMhC2EjqzBQ",
    points: [
      "Title tags",
      "Meta descriptions",
      "Content optimization",
      "Internal linking"
    ],
    questions: [
      "What is meta title?",
      "Why internal links matter?"
    ]
  },
  9: {
    title: "Technical SEO Basics",
    video: "https://www.youtube.com/embed/1ktGvJ5JpGg",
    points: [
      "Website speed",
      "Mobile friendliness",
      "Indexing",
      "Core Web Vitals"
    ],
    questions: [
      "Why site speed matters?",
      "What is mobile-first indexing?"
    ]
  },
  10: {
    title: "Local SEO & Google Business Profile",
    video: "https://www.youtube.com/embed/9zvG7n2vLZ0",
    points: [
      "Local search",
      "Google Maps",
      "Reviews",
      "NAP consistency"
    ],
    questions: [
      "How does Namma Web benefit from Local SEO?",
      "Why reviews are powerful?"
    ]
  },

  /* ===== CONTENT & SOCIAL ===== */

  11: {
    title: "Content Marketing Basics",
    video: "https://www.youtube.com/embed/0z1rK8cS9lY",
    points: [
      "What is content",
      "Blogs & videos",
      "Content for trust",
      "Educational marketing"
    ],
    questions: [
      "Why content builds authority?",
      "What content do you trust?"
    ]
  },
  12: {
    title: "Blog Writing for SEO",
    video: "https://www.youtube.com/embed/mY2gM5D1C9A",
    points: [
      "Blog structure",
      "Headings",
      "Keywords placement",
      "Call to action"
    ],
    questions: [
      "Why blogs bring leads?",
      "What makes a blog useful?"
    ]
  },
  13: {
    title: "Instagram Marketing",
    video: "https://www.youtube.com/embed/x9G0z8p5D2o",
    points: [
      "Reels",
      "Captions",
      "Hashtags",
      "Consistency"
    ],
    questions: [
      "What reel attracts you?",
      "Why visuals matter?"
    ]
  },
  14: {
    title: "LinkedIn Personal Branding",
    video: "https://www.youtube.com/embed/Zr0nFZrGzE0",
    points: [
      "Profile optimization",
      "Content ideas",
      "Professional storytelling",
      "Engagement"
    ],
    questions: [
      "Why LinkedIn is powerful?",
      "What post would you share?"
    ]
  },
  15: {
    title: "YouTube & Video Marketing",
    video: "https://www.youtube.com/embed/6x0p0g7wR6k",
    points: [
      "YouTube SEO",
      "Thumbnails",
      "Titles",
      "Watch time"
    ],
    questions: [
      "Why videos convert?",
      "What video would you watch?"
    ]
  },

  /* ===== ADS ===== */

  16: {
    title: "Introduction to Paid Ads",
    video: "https://www.youtube.com/embed/3pV9qvYkLzE",
    points: [
      "Why paid ads",
      "Organic vs paid",
      "Ad platforms",
      "Budgeting"
    ],
    questions: [
      "When should ads be used?",
      "Why ads give faster results?"
    ]
  },
  17: {
    title: "Google Ads Basics",
    video: "https://www.youtube.com/embed/V3G9oEw7p0A",
    points: [
      "Search ads",
      "Keywords",
      "Ad copy",
      "Quality score"
    ],
    questions: [
      "Why keyword intent matters?",
      "What makes good ad copy?"
    ]
  },
  18: {
    title: "Meta Ads (Facebook & Instagram)",
    video: "https://www.youtube.com/embed/6Q8sZkJxKpU",
    points: [
      "Audience targeting",
      "Creatives",
      "Campaign structure",
      "Testing"
    ],
    questions: [
      "Why targeting is important?",
      "What creative works best?"
    ]
  },
  19: {
    title: "Landing Pages & Conversion",
    video: "https://www.youtube.com/embed/Hm5x1k0y9Z8",
    points: [
      "Landing page elements",
      "Trust signals",
      "Forms",
      "Conversion rate"
    ],
    questions: [
      "What makes a landing page convert?",
      "Why simple pages work?"
    ]
  },
  20: {
    title: "Ad Performance & Optimization",
    video: "https://www.youtube.com/embed/Yt2s3ZJ0X6g",
    points: [
      "CTR",
      "CPC",
      "ROI",
      "Optimization"
    ],
    questions: [
      "Why data matters?",
      "How to improve ads?"
    ]
  },

  /* ===== AI & CAREER ===== */

  21: {
    title: "AI Tools for Marketers",
    video: "https://www.youtube.com/embed/2ePf9rue1Ao",
    points: [
      "ChatGPT",
      "Canva AI",
      "Automation tools",
      "Productivity"
    ],
    questions: [
      "Which AI tool excites you?",
      "How AI saves time?"
    ]
  },
  22: {
    title: "AI Content Creation",
    video: "https://www.youtube.com/embed/0tYcQGJcGvI",
    points: [
      "Prompts",
      "Content ideas",
      "Blogs",
      "Social posts"
    ],
    questions: [
      "Why prompt quality matters?",
      "What content can AI write?"
    ]
  },
  23: {
    title: "Marketing Automation",
    video: "https://www.youtube.com/embed/j7QJk9wPZsU",
    points: [
      "Email automation",
      "CRM",
      "Lead nurturing",
      "Funnels"
    ],
    questions: [
      "Why automation is powerful?",
      "What is a funnel?"
    ]
  },
  24: {
    title: "Analytics & Tracking",
    video: "https://www.youtube.com/embed/5b1Q9Jk8y0U",
    points: [
      "Google Analytics",
      "User behavior",
      "Conversions",
      "Reports"
    ],
    questions: [
      "Why tracking is necessary?",
      "What is conversion?"
    ]
  },
  25: {
    title: "Building a Portfolio",
    video: "https://www.youtube.com/embed/VxKJkG9D2E0",
    points: [
      "Projects",
      "Case studies",
      "Proof of work",
      "Personal brand"
    ],
    questions: [
      "Why portfolio matters?",
      "What project will you show?"
    ]
  },
  26: {
    title: "Freelancing & Agency Basics",
    video: "https://www.youtube.com/embed/W3gkR7Z8J0E",
    points: [
      "Freelancing platforms",
      "Pricing",
      "Clients",
      "Deliverables"
    ],
    questions: [
      "Would you freelance or job?",
      "How to price services?"
    ]
  },
  27: {
    title: "Building Your Own Startup",
    video: "https://www.youtube.com/embed/9e8B0VJkPZ0",
    points: [
      "Idea validation",
      "Branding",
      "Online presence",
      "Growth"
    ],
    questions: [
      "What startup idea do you have?",
      "How will you market it?"
    ]
  },
  28: {
    title: "Interview Preparation",
    video: "https://www.youtube.com/embed/Zt9s7p0XJkE",
    points: [
      "Interview questions",
      "Practical skills",
      "Confidence",
      "Communication"
    ],
    questions: [
      "How will you explain SEO?",
      "What makes you different?"
    ]
  },
  29: {
    title: "Placement Strategy",
    video: "https://www.youtube.com/embed/4W1Yt3XJZ8k",
    points: [
      "Company expectations",
      "Performance",
      "Consistency",
      "Professionalism"
    ],
    questions: [
      "Why performance matters?",
      "What salary do you expect?"
    ]
  },
  30: {
    title: "Final Review & Next Steps",
    video: "https://www.youtube.com/embed/2JwXn8GZyJ0",
    points: [
      "Course recap",
      "Skills gained",
      "Career paths",
      "Continuous learning"
    ],
    questions: [
      "What did you learn?",
      "What is your next goal?"
    ]
  }
};

/* ===========================
   PAGE COMPONENT
=========================== */

export default function DayLessonPage() {
  const { day } = useParams();
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);

  const lesson = lessons[day];

  if (!lesson) {
    return <h1>Lesson not found</h1>;
  }

  return (
    <div>
      <h1>Day {day}: {lesson.title}</h1>

      <iframe
        width="100%"
        height="360"
        src={lesson.video}
        title={lesson.title}
        allowFullScreen
        style={{ borderRadius: "12px", marginBottom: "20px" }}
      />

      <h2>📘 What You Will Learn</h2>
      <ul>
        {lesson.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>🤔 Think & Answer</h2>
      <ol>
        {lesson.questions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ol>

      <h2>🛠 Assignment</h2>
      <p>
        Work on today’s topic and send your answers to:
        <br />
        <strong>nammaweb.assist@gmail.com</strong>
      </p>

      <label>
        <input
          type="checkbox"
          checked={confirmed}
          onChange={() => setConfirmed(!confirmed)}
        />{" "}
        I have completed and submitted today’s assignment
      </label>

      <br /><br />

      <button
        disabled={!confirmed}
        onClick={() => router.push(`/day/${Number(day) + 1}`)}
        style={{
          padding: "14px 24px",
          background: confirmed ? "#16a34a" : "#9ca3af",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: confirmed ? "pointer" : "not-allowed"
        }}
      >
        {confirmed ? "Proceed to Next Day ▶" : "Complete assignment to continue"}
      </button>
    </div>
  );
}
