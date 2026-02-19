export const syllabus = {

  1: {
    title: "Digital Marketing Ecosystem & AI Revolution",
    video: "https://www.youtube.com/embed/6mbwJ2xhgzM",
    notes: `
Digital marketing is the strategic use of online platforms to promote brands.

Core Areas:
• SEO
• Social Media Marketing
• Paid Advertising
• Analytics
• AI Automation

AI tools transforming marketing:
• ChatGPT
• Jasper AI
• Midjourney
• Google AI Ads Optimization
`,
    assignment: `
Create LinkedIn post for Namma Web AI Course.
Identify funnel stage.
Suggest 3 AI tools for growth.
`
  },

  2: {
    title: "Customer Psychology & Online Behaviour",
    video: "https://www.youtube.com/embed/9No-FiEInLA",
    notes: `
Understand how customers think online.

Concepts:
• AIDA Funnel
• FOMO
• Social Proof
• Emotional triggers
`,
    assignment: `
Create Instagram reel script for Gen-Z audience.
`
  },

  3: {
    title: "Market Research & Competitor Analysis",
    video: "https://www.youtube.com/embed/2ePf9rue1Ao",
    notes: `
Learn competitor analysis using:
• SWOT
• SEMrush
• SimilarWeb
• Google Trends
`,
    assignment: `
Analyze 2 competitors of Namma Web.
`
  }

};

// AUTO GENERATE DAYS 4–60 STRUCTURE

for (let i = 4; i <= 60; i++) {
  syllabus[i] = {
    title: i <= 30
      ? `Theory Module ${i}`
      : `Live Project Implementation ${i}`,
    video: "https://www.youtube.com/embed/6mbwJ2xhgzM",
    notes: `
Detailed digital marketing concept for Day ${i}.
Topics covered:
• Strategy
• Execution
• AI Integration
• Optimization
`,
    assignment: `
Apply today's strategy for Namma Web.
Submit report to nammaweb.assist@gmail.com
`
  };
}
