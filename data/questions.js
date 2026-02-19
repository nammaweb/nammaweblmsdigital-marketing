export const dailyQuestions = {};

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

for (let day = 1; day <= 60; day++) {

  const topic = topics[day - 1];

  dailyQuestions[day] = Array.from({ length: 10 }, (_, i) => ({
    question: `${topic} – Advanced Question ${i + 1}`,
    options: [
      `Correct concept related to ${topic}`,
      `Incorrect strategy for ${topic}`,
      `Outdated method`,
      `Irrelevant practice`
    ],
    correct: 0
  }));
}
