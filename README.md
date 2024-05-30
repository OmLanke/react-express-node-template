# React + TailwindCSS + Vite + Express on Node.js

This template provides a minimal setup to get React and TailwindCSS working in Vite with ExpressJS backend on Node.js.

This template structure allows you to serve the frontend through the backend server, avoiding CORS issues, and simplyfying the production setup. You only need to deploy 1 server, instead of having frontend and backend separated.

- During development, the Vite dev server proxies the `/api/*` route to connect to the backend.
- During production build, the express backend serves the static files generated using `vite build` at `/` (root).

Checkout [App.jsx](frontend/src/App.jsx) for an example of backend api calls.

## How to use
- ### Frontend code in `frontend` directory
    - Typical Vite structure with `src` and `public` folders.
- ### Backend code in `backend` directory
    - Setup as you like, including routers, middlewares, models, etc.
    - Serve endpoints at `/api`.

## To Run
- ### During development
    - Frontend - `npm run dev` (acessible through port `5173`) 
    - Backend - `npm run backend` (accessible through port `3000`)
- ### Build and Run
    - `npm run buildrun`
    
    - Website will now be available at <http://localhost:3000/>
