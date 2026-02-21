import { syllabus } from "./syllabus";

export const dailyQuestions = {};

const generateQuestions = (topic) => ([
{
  question: `What is the core objective of ${topic}?`,
  options: [
    "To achieve measurable digital growth",
    "To perform offline marketing only",
    "To avoid analytics",
    "To remove automation"
  ],
  correct: 0
},
{
  question: `Which tool is commonly used in ${topic}?`,
  options: [
    "Google & AI tools",
    "Stone carving tools",
    "Manual printing press",
    "Postal letters"
  ],
  correct: 0
},
{
  question: `How does AI improve ${topic}?`,
  options: [
    "By automating optimization",
    "By removing data",
    "By avoiding strategy",
    "By blocking tracking"
  ],
  correct: 0
},
{
  question: `Which metric matters most in ${topic}?`,
  options: [
    "Performance measurement",
    "Wall paint quality",
    "Temperature",
    "Manual guesswork"
  ],
  correct: 0
},
{
  question: `Which company successfully applies ${topic}?`,
  options: [
    "Amazon / HubSpot / Netflix",
    "Local street shop",
    "Random offline store",
    "None"
  ],
  correct: 0
},
{
  question: `Practical: How would you apply ${topic} for Namma Web?`,
  options: [
    "Create structured campaign strategy",
    "Ignore digital channels",
    "Use only offline banners",
    "Skip tracking"
  ],
  correct: 0
},
{
  question: `Scenario: Budget is low. What should you optimize first in ${topic}?`,
  options: [
    "High ROI elements",
    "Random ads",
    "No tracking",
    "Delete campaign"
  ],
  correct: 0
},
{
  question: `Which data source supports ${topic} decisions?`,
  options: [
    "Analytics & reporting",
    "Guessing",
    "Rumors",
    "Manual notes only"
  ],
  correct: 0
},
{
  question: `Why is strategy important in ${topic}?`,
  options: [
    "For structured growth",
    "For confusion",
    "For random posting",
    "For ignoring KPIs"
  ],
  correct: 0
},
{
  question: `Future of ${topic} depends on?`,
  options: [
    "AI & automation",
    "Manual work only",
    "No measurement",
    "Offline only"
  ],
  correct: 0
}
]);

Object.keys(syllabus).forEach(day => {
  dailyQuestions[day] = generateQuestions(syllabus[day].title);
});
