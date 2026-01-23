const mongoose = require('mongoose');
const express = require('express');
const Event = require('./event');

main()
.then(() => console.log("Connected to DB 😊"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/crimson_chronical');
}


const events = [
  {
    title: "CodeSprint 2026",
    organisation: "TechClub VU",
    type: "hackathon",
    website: "https://codesprint.tech",
    description: "24-hour coding hackathon focused on problem-solving and innovation.",
    participationType: "team",
    teamSize: { min: 2, max: 4 },
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    mode: "offline",
    venue: "Innovation Lab",
    reward: { first: 30000, second: 20000, third: 10000 }
  },
  {
    title: "AI Innovators Challenge",
    organisation: "AI Society",
    type: "hackathon",
    website: "https://aiinnovators.org",
    description: "Build AI solutions for real-world problems.",
    participationType: "team",
    teamSize: { min: 3, max: 5 },
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
    mode: "online",
    venue: "Google Meet",
    reward: { first: 50000, second: 25000, third: 15000 }
  },
  {
    title: "Web Dev Battle",
    organisation: "DevHub",
    type: "hackathon",
    website: "https://devhub.com",
    description: "Frontend + Backend challenge to build a full-stack app.",
    participationType: "individual",
    teamSize: { min: 1, max: 1 },
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    mode: "online",
    venue: "Zoom",
    reward: { first: 15000, second: 8000, third: 4000 }
  },
  {
    title: "CyberSec CTF",
    organisation: "SecureNet",
    type: "hackathon",
    website: "https://securenet.io",
    description: "Capture The Flag event for cybersecurity enthusiasts.",
    participationType: "team",
    teamSize: { min: 2, max: 4 },
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    mode: "online",
    venue: "Discord",
    reward: { first: 40000, second: 20000, third: 10000 }
  },
  {
    title: "Startup Pitch Fest",
    organisation: "E-Cell",
    type: "hackathon",
    website: "https://ecellfest.com",
    description: "Pitch your startup ideas to investors.",
    participationType: "team",
    teamSize: { min: 2, max: 6 },
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
    mode: "offline",
    venue: "Auditorium",
    reward: { first: 60000, second: 30000, third: 15000 }
  },

  {
    title: "GameDev Hack",
    organisation: "Game Studio",
    type: "hackathon",
    website: "https://gamedev.io",
    description: "Create a game prototype in 36 hours.",
    participationType: "team",
    teamSize: { min: 2, max: 5 },
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
    mode: "offline",
    venue: "Media Lab",
    reward: { first: 35000, second: 20000, third: 10000 }
  },

  {
    title: "Blockchain Buildathon",
    organisation: "CryptoClub",
    type: "hackathon",
    website: "https://cryptoclub.org",
    description: "Build blockchain-based applications.",
    participationType: "team",
    teamSize: { min: 2, max: 4 },
    img: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=800",
    mode: "online",
    venue: "MS Teams",
    reward: { first: 45000, second: 25000, third: 12000 }
  },

  {
    title: "Design Sprint",
    organisation: "Creative Cell",
    type: "hackathon",
    website: "https://designsprint.com",
    description: "UI/UX design challenge.",
    participationType: "individual",
    teamSize: { min: 1, max: 1 },
    img: "https://images.unsplash.com/photo-1559027615-02843a66c19a?w=800",
    mode: "offline",
    venue: "Design Studio",
    reward: { first: 12000, second: 7000, third: 3000 }
  },

  {
    title: "Data Science Showdown",
    organisation: "DS Club",
    type: "hackathon",
    website: "https://datascience.club",
    description: "Analyze datasets and build ML models.",
    participationType: "team",
    teamSize: { min: 2, max: 4 },
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    mode: "online",
    venue: "Kaggle",
    reward: { first: 50000, second: 30000, third: 15000 }
  },

  {
    title: "Mobile App Hack",
    organisation: "AppLab",
    type: "hackathon",
    website: "https://applab.dev",
    description: "Build Android/iOS apps in 24 hours.",
    participationType: "team",
    teamSize: { min: 2, max: 4 },
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de1cd0b?w=800",
    mode: "offline",
    venue: "App Lab",
    reward: { first: 30000, second: 15000, third: 8000 }
  },

  {
    title: "Cloud Computing Challenge",
    organisation: "CloudNet",
    type: "hackathon",
    website: "https://cloudnet.com",
    description: "Deploy scalable cloud solutions.",
    participationType: "team",
    teamSize: { min: 2, max: 4 },
    img: "https://images.unsplash.com/photo-1581091012184-5c4dbe5a5a6a?w=800",
    mode: "online",
    venue: "AWS Console",
    reward: { first: 40000, second: 20000, third: 10000 }
  },

  {
    title: "IoT Hackathon",
    organisation: "Electro Club",
    type: "hackathon",
    website: "https://iothack.com",
    description: "Build IoT based solutions.",
    participationType: "team",
    teamSize: { min: 2, max: 5 },
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
    mode: "offline",
    venue: "Electronics Lab",
    reward: { first: 35000, second: 18000, third: 9000 }
  },

  {
    title: "AR/VR Build Fest",
    organisation: "XR Lab",
    type: "hackathon",
    website: "https://xrlab.io",
    description: "Create immersive AR/VR experiences.",
    participationType: "team",
    teamSize: { min: 2, max: 4 },
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800",
    mode: "offline",
    venue: "XR Lab",
    reward: { first: 45000, second: 25000, third: 12000 }
  },

  {
    title: "FinTech Code Challenge",
    organisation: "Finance Club",
    type: "hackathon",
    website: "https://fintechchallenge.com",
    description: "Solve financial tech problems.",
    participationType: "team",
    teamSize: { min: 2, max: 4 },
    img: "https://images.unsplash.com/photo-1569025690938-a00729c9e1a7?w=800",
    mode: "online",
    venue: "Web Platform",
    reward: { first: 50000, second: 25000, third: 15000 }
  },

  {
    title: "GreenTech Hack",
    organisation: "Eco Club",
    type: "workshop",
    website: "https://greentech.org",
    description: "Build sustainable technology solutions.",
    participationType: "team",
    teamSize: { min: 2, max: 5 },
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    mode: "offline",
    venue: "Eco Lab",
    reward: { first: 30000, second: 15000, third: 7000 }
  },

  {
    title: "AI Resume Builder Contest",
    organisation: "Career Cell",
    type: "workshop",
    website: "https://career.ai",
    description: "Create AI tools for resume screening.",
    participationType: "individual",
    teamSize: { min: 1, max: 1 },
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
    mode: "online",
    venue: "Online Portal",
    reward: { first: 10000, second: 5000, third: 2000 }
  },

  {
    title: "Open Source Sprint",
    organisation: "OSS Community",
    type: "internship",
    website: "https://opensource.dev",
    description: "Contribute to open-source projects.",
    participationType: "team",
    teamSize: { min: 2, max: 6 },
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    mode: "online",
    venue: "GitHub",
    reward: { first: 25000, second: 12000, third: 6000 }
  },

  {
    title: "UI Clone Wars",
    organisation: "Frontend Club",
    type: "workshop",
    website: "https://uiclone.dev",
    description: "Recreate popular app UIs.",
    participationType: "individual",
    teamSize: { min: 1, max: 1 },
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
    mode: "online",
    venue: "CodeSandbox",
    reward: { first: 8000, second: 4000, third: 2000 }
  },

  {
    title: "Smart City Hack",
    organisation: "Urban Tech",
    type: "event",
    website: "https://smartcity.tech",
    description: "Build solutions for smart cities.",
    participationType: "team",
    teamSize: { min: 3, max: 5 },
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    mode: "offline",
    venue: "City Lab",
    reward: { first: 40000, second: 20000, third: 10000 }
  },

  {
    title: "AI Chatbot Challenge",
    organisation: "ML Club",
    type: "event",
    website: "https://chatbot.ai",
    description: "Build smart AI chatbots.",
    participationType: "team",
    teamSize: { min: 2, max: 4 },
    img: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4",
    mode: "online",
    venue: "Discord",
    reward: { first: 30000, second: 15000, third: 8000 }
  }
];


const initDB = async () => {
    await Event.deleteMany({});
    await Event.insertMany(events);
    console.log("Data Initialized");
}

initDB();