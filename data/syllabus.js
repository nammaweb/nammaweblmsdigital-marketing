export const syllabus = {};

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
Day ${i}: ${topics[i - 1]}

Detailed Explanation:
This topic explains professional digital marketing execution
with AI integration and real-world examples.

Company Case Studies:
• Amazon personalization engine
• Netflix recommendation AI
• Nike ad automation
• HubSpot funnel optimization

Apply today's concept to Namma Web digital strategy.
`
  };
}
