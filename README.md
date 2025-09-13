# Smart Mart Art – Project Management (MERN)

Backend: Node/Express, MongoDB, Socket.IO  
Frontend: React (CRA), Redux Toolkit, react-beautiful-dnd  
Auth: JWT (access + refresh) • Realtime: project rooms, task/comment events

Dev
- Backend: cd backend && npm start (requires .env)
- Frontend: cd frontend && npm start
- Tests: backend -> npm test, frontend -> npx cypress open

Env
- backend/.env (see backend/.env.example)
- frontend/.env (see frontend/.env.example)

Deploy
- Backend: Render/Heroku/GKE (Socket.IO + MongoDB Atlas)
- Frontend: Vercel/Netlify (set REACT_APP_API_URL)
