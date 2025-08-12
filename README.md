AI ICU Guardian – Real-time ICU Monitoring Dashboard
Overview:
AI ICU Guardian is a full-stack ICU monitoring system that lets healthcare professionals view real-time patient vitals, track admissions, manage alerts, and analyze historical trends.
Built using HTML/CSS/JS (frontend) and Node.js + Express + PostgreSQL (backend), with live updates, alert rules, and a professional medical UI.

Features:
🖥 Dashboard
Live patient overview cards showing total/critical/stable counts
Real-time clock and notifications
Average stay duration statistics

Patients Module:
List of all ICU patients with Name, Room, Condition, Risk Level
Click to see full profile with vitals and admission date
Integrated patient search & filter

Real-time Vitals:
Heart Rate, Blood Pressure, Oxygen Saturation, Respiratory Rate, Temperature
Color-coded status (Normal, Warning, Critical)
Auto-updated from backend every 30s

Alerts:
Automatic generation based on medical thresholds
Critical/Warning/Info categories
Clear individual or all alerts

Analytics:
Patient admission trends (last 7 days)
Vital sign trend charts (24 hr)
Alert frequency graph

Settings:
Manage thresholds, notification preferences
Refresh speed configuration

Tech Stack
Frontend:
HTML5, CSS3, JavaScript
Chart.js for analytics

Responsive design for desktop

Backend:
Node.js, Express.js
REST API for patient data, vitals, alerts
WebSockets for live updates

Database:
PostgreSQL (via Docker or local install)
patients, vitals, alerts tables with seed data

Notes
Make sure Docker or PostgreSQL is running before starting backend.
When serving frontend, avoid file:// protocol to prevent CORS issues.

License
MIT License © 2025 Pushkar Singh
