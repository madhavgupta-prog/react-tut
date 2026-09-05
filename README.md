# React Media Search

A small React project built for learning purposes — a media search app that lets you search for photos (via the Unsplash API) and videos (via the Pexels API), switch between them with tabs, and save favorites to a personal "Collection" that persists in localStorage.

## Why I Built This

I wanted a hands-on project to practice the core skills every React developer needs beyond the basics — calling external APIs, managing global state properly with Redux Toolkit, and wiring up client-side routing — instead of just following a tutorial line by line. This project intentionally touches a bunch of different "real app" concerns at once: async data fetching, loading/error states, persisted state, reusable components, and conditional rendering.

## What I Learned / Practiced

- **Redux Toolkit fundamentals** — setting up a store with `configureStore`, splitting state into feature slices (`searchSlice`, `collectionSlice`), and using `createSlice` reducers/actions instead of hand-writing action types and reducers.
- **Connecting Redux to components** — using `useSelector` to read state and `useDispatch` to fire actions from components.
- **Handling async API calls** — calling two different third-party APIs (Unsplash, Pexels) with Axios, passing query params and auth headers, and normalizing two differently-shaped API responses into one common shape the UI can render.
- **Loading / error state patterns** — dispatching `setLoading` / `setError` / `setResults` around an async call inside a `useEffect`.
- **Persisting state to localStorage** — reading the saved collection on store init and writing to localStorage on every add/remove/clear.
- **React Router** — setting up `BrowserRouter`, `Routes`, and `Route` for a two-page app (Home / Collection), plus `Link` for navigation.
- **Component composition** — breaking the UI into small reusable pieces (`SearchBar`, `Tabs`, `ResultGrid`, `ResultCard`, `CollectionCard`, `Navbar`).
- **Conditional rendering** based on state (e.g. only showing tabs/results once a search query exists, showing an empty-state message when the collection is empty).
- **Third-party UI libraries** — toast notifications with `react-toastify`, icons with `lucide-react`.
- **Environment variables in Vite** — using `import.meta.env` to keep API keys out of the source code.
- **Styling with Tailwind CSS v4**, including the new Vite plugin setup.
- **Debugging real bugs** — see `challenges.md` in this repo for a few issues I ran into (like an empty initial search query causing a bad API request, and a mismatched import name crashing the whole app) and how I reasoned through fixing them.

## Tech Stack

| Category | Tools |
|---|---|
| Framework | React 19 + Vite |
| State management | Redux Toolkit, React Redux |
| Routing | React Router DOM |
| HTTP client | Axios |
| Styling | Tailwind CSS v4 |
| Notifications | react-toastify |
| Icons | lucide-react |
| APIs | Unsplash (photos), Pexels (videos) |

## Features

- Search photos or videos by keyword using a single search bar
- Toggle between "Photos" and "Videos" tabs
- Save any result to a personal Collection (bookmark icon)
- Collection page with persistent items (survives page refresh via localStorage) and a "Clear all" option
- Toast notifications when items are added/removed from the collection

## Project Structure

```
src/
├── api/
│   └── mediaApi.js         # Axios calls to Unsplash & Pexels
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── Tabs.jsx
│   ├── ResultGrid.jsx
│   ├── ResultCard.jsx
│   └── CollectionCard.jsx
├── pages/
│   ├── HomePage.jsx
│   └── CollectionPage.jsx
├── redux/
│   ├── store.js
│   └── features/
│       ├── searchSlice.js      # query, active tab, results, loading, error
│       └── collectionSlice.js  # saved items, persisted to localStorage
├── App.jsx
└── main.jsx
```

## Getting Started

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root with your API keys:
   ```
   VITE_UNSPLASH_KEY=your_unsplash_access_key
   VITE_PEXELS_KEY=your_pexels_api_key
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```

## Notes

This was built purely as a learning exercise, so it's not production-hardened — see `challenges.md` for known rough edges I found while working through it (e.g. a couple of Redux action bugs and an edge case in the initial API call). Revisiting and fixing those was part of the learning process.
