# Deployment Guide

## Backend (Render)
1. Push `backend/` folder to a GitHub repo
2. Go to [https://render.com](https://render.com) and create a new Web Service
3. Connect your repo and set the root directory to `backend`
4. Add `start` command as: `node server.js`

## Frontend (Vercel)
1. Push `frontend/` folder to GitHub
2. Go to [https://vercel.com](https://vercel.com) and import the project
3. Set root to `frontend` and build command as: `npm run build`
4. Set environment variable for API if needed
