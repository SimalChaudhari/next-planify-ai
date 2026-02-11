export const HERO_CHAT_SCENARIOS = [
  {
    user: "Plan my day for tomorrow",
    ai: "Done! I've created a balanced schedule with focus time, meetings, and breaks. You can drag to adjust any slot.",
    schedule: [
      { time: "7:00 AM", task: "Morning exercise" },
      { time: "9:00 AM", task: "Deep work" },
      { time: "12:00 PM", task: "Lunch" },
      { time: "2:00 PM", task: "Meeting" },
      { time: "6:00 PM", task: "Call Mom" },
      { time: "8:00 PM", task: "Study" },
    ],
  },
  {
    user: "Add meeting at 10 AM with the design team",
    ai: 'Added "Design team meeting" at 10:00 AM to today\'s schedule.',
    schedule: [{ time: "10:00 AM", task: "Design team meeting" }],
  },
  {
    user: "Remind me at 6 PM to call mom",
    ai: 'Reminder set for 6:00 PM today: "Call mom".',
    schedule: [],
  },
  {
    user: "I have an extra meeting at 4 PM — move gym to 7 PM",
    ai: "Rescheduled. Gym is now at 7:00 PM; your 4:00 PM slot is free for the meeting.",
    schedule: [
      { time: "4:00 PM", task: "Meeting" },
      { time: "7:00 PM", task: "Gym" },
    ],
  },
  {
    user: "What's on my schedule for today?",
    ai: "Here's your day so far:",
    schedule: [
      { time: "9:00 AM", task: "Standup" },
      { time: "11:00 AM", task: "Project work" },
      { time: "1:00 PM", task: "Lunch" },
      { time: "3:00 PM", task: "Client call" },
    ],
  },
];

export const TYPING_SPEED_USER = 45;
export const TYPING_SPEED_AI = 25;
export const THINKING_MS = 1200;
export const SCHEDULE_ITEM_MS = 450;
export const HOLD_BEFORE_NEXT_MS = 3200;

export const FAQ_ITEMS = [
  { q: "What is Planify AI?", a: "Planify AI is an AI-powered daily planner. You tell it what you need in plain English (e.g. \"Plan my day for tomorrow\" or \"Remind me at 6 PM to call mom\"), and it creates your schedule, tasks, and reminders for you." },
  { q: "Is Planify AI free?", a: "Yes. You can start for free with daily planning, AI chat, tasks, and reminders. Our Pro plan ($7/month) adds smart adaptive scheduling, unlimited tasks and reminders, and daily insights." },
  { q: "How does AI planning work?", a: "You chat with Planify in natural language. The AI understands dates, times, and priorities, then creates or updates your schedule and to-do list. You can also drag and edit your schedule manually." },
  { q: "Who is Planify for?", a: "Students, professionals, entrepreneurs, freelancers, and anyone who wants to plan their day better. If you struggle with time management or want a smarter calendar, Planify is for you." },
  { q: "Can I use Planify on mobile?", a: "Planify works in your browser on any device. A dedicated mobile app is planned for the future. The web app is responsive and works great on phones and tablets." },
];
