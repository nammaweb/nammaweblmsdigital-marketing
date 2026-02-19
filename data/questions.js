export const dailyQuestions = {

1: [
{
question: "What is the primary objective of Digital Marketing?",
options: [
"To promote brands using measurable online channels",
"To distribute newspapers",
"To sell door-to-door only",
"To advertise only on television"
],
correct: 0
},
{
question: "Which platform is core to the Digital Marketing ecosystem?",
options: [
"Google Search Engine",
"Stone carving",
"Wall painting",
"Postal letters"
],
correct: 0
},
{
question: "Why is Digital Marketing superior to traditional marketing?",
options: [
"Because it is measurable and data-driven",
"Because it avoids analytics",
"Because it removes tracking",
"Because it works offline only"
],
correct: 0
},
{
question: "Which company uses advanced digital personalization?",
options: [
"Amazon",
"Local grocery store",
"Street vendor",
"Offline library"
],
correct: 0
},
{
question: "What role does AI play in Digital Marketing?",
options: [
"Automates targeting and optimization",
"Reduces visibility",
"Blocks engagement",
"Eliminates campaigns"
],
correct: 0
},
{
question: "Which metric measures campaign success?",
options: [
"Conversion Rate",
"Weather temperature",
"Paper thickness",
"Building height"
],
correct: 0
},
{
question: "SEO primarily focuses on?",
options: [
"Ranking on search engines",
"Printing flyers",
"TV ads only",
"Billboards"
],
correct: 0
},
{
question: "Digital marketing funnel starts with?",
options: [
"Awareness",
"Action",
"Retention",
"Purchase"
],
correct: 0
},
{
question: "ROI stands for?",
options: [
"Return on Investment",
"Rate of Instagram",
"Reach of Internet",
"Revenue of Index"
],
correct: 0
},
{
question: "Future of Digital Marketing depends on?",
options: [
"AI and Automation",
"Manual guesswork",
"Offline marketing only",
"No analytics"
],
correct: 0
}
]

};

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

// Import syllabus to auto-generate questions for all 60 days
import { syllabus } from "./syllabus";

Object.keys(syllabus).forEach(day => {
  dailyQuestions[day] = generateQuestions(syllabus[day].title);
});

