export const syllabus = {};

const modules = {
  1: "Foundations",
  2: "SEO & Content Mastery",
  3: "Paid Ads & Analytics",
  4: "AI & Live Project"
};

const topics = [
  "Digital Marketing Ecosystem",
  "Customer Psychology",
  "Market Research",
  "Branding Strategy",
  "SEO Fundamentals",
  "Keyword Research",
  "Search Intent",
  "On-Page SEO",
  "Technical SEO",
  "Content Strategy",
  "Blog Writing",
  "Social Media Overview",
  "LinkedIn Branding",
  "Instagram Growth",
  "Analytics Basics",
  "Advanced SEO",
  "Competitor Analysis",
  "Topic Authority",
  "Content Calendar",
  "AI Content Tools",
  "YouTube SEO",
  "Local SEO",
  "Schema Markup",
  "Backlink Strategy",
  "Email Marketing",
  "Funnel Design",
  "Landing Pages",
  "Conversion Optimization",
  "Copywriting Psychology",
  "Case Study Writing",
  "Google Ads",
  "Search Campaigns",
  "Display Ads",
  "Meta Ads",
  "Creative Strategy",
  "AI Ad Automation",
  "Budget Optimization",
  "Advanced Analytics",
  "Pixel Tracking",
  "Retargeting",
  "Reporting",
  "A/B Testing",
  "Scaling Ads",
  "Media Planning",
  "Brand Audit",
  "AI Workflows",
  "Chatbots",
  "Marketing Automation",
  "CRM Systems",
  "Growth Hacking",
  "LinkedIn Outreach",
  "Instagram Campaign",
  "Blog Publishing",
  "Website Optimization",
  "SEO Audit",
  "Digital Strategy Draft",
  "Pitch Presentation",
  "Portfolio Building",
  "Mock Interview",
  "Final Certification Exam"
];

for (let i = 1; i <= 60; i++) {

  syllabus[i] = {
    title: topics[i - 1],
    video: "https://www.youtube.com/embed/6mbwJ2xhgzM",
    notes: `
Module: ${i <= 15 ? modules[1] : i <= 30 ? modules[2] : i <= 45 ? modules[3] : modules[4]}

Day ${i}: ${topics[i - 1]}

Explanation:
This session covers strategic digital marketing implementation 
with real business applications and AI tools integration.

Company Examples:
• Amazon personalization engine
• Netflix recommendation AI
• Nike ad automation
• HubSpot marketing funnels

Mentor Talking Points:
• Why this topic matters in 2025
• How AI enhances this area
• Practical business use case
• How Namma Web can implement it

Practical Application:
Students apply today’s concept directly to Namma Web 
AI Courses / School Automation / Exam AI products.
    `,
    quiz: Array.from({ length: 10 }, (_, q) => ({
      question: `Question ${q + 1} related to ${topics[i - 1]}?`,
      options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      correct: 1
    }))
  };
}
