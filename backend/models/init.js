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
    "title": "AI & Machine Learning Bootcamp",
    "description": "An introductory bootcamp covering ML basics, Python tools, and hands-on project building for beginners.",
    "img": "https://images.unsplash.com/photo-1677442135703-1787a5bba8f2",
    "time": "10:00 AM",
    "date": "2026-01-15",
    "reward": 0,
    "venue": "Seminar Hall - Block A",
    "category": "Technical",
    "department": "CSE"
  },
  {
    "title": "Hackathon 2K26",
    "description": "A 24-hour coding marathon where teams solve real-world problems using technology. Exciting prizes await the winners.",
    "img": "https://images.unsplash.com/photo-1551836022-4c4c79ecde16",
    "time": "09:00 AM",
    "date": "2026-02-01",
    "reward": 50000,
    "venue": "Innovation Lab",
    "category": "Competition",
    "department": "IT"
  },
  {
    "title": "Photography Club Meetup",
    "description": "Casual meetup for students passionate about photography. Learn composition, lighting, and editing techniques.",
    "img": "https://images.unsplash.com/photo-1484704849700-f032a568e944",
    "time": "04:00 PM",
    "date": "2026-01-12",
    "reward": 0,
    "venue": "Open Grounds",
    "category": "Cultural",
    "department": "Media"
  },
  {
    "title": "Entrepreneurship Talk: From Idea to Startup",
    "description": "Guest session by startup founders sharing their journey from college projects to funded startups.",
    "img": "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    "time": "02:00 PM",
    "date": "2026-01-20",
    "reward": 0,
    "venue": "Auditorium",
    "category": "Seminar",
    "department": "MBA"
  },
  {
    "title": "Annual Sports Tryouts",
    "description": "Open registrations for cricket, football, basketball, badminton, and athletics selection trials.",
    "img": "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    "time": "07:00 AM",
    "date": "2026-01-18",
    "reward": 0,
    "venue": "Sports Ground",
    "category": "Sports",
    "department": "Sports Council"
  }
]

const initDB = async () => {
    await Event.deleteMany({});
    await Event.insertMany(events);
    console.log("Data Initialized");
}

initDB();