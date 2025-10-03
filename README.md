# 🎬 Movie Genius – Your AI-Powered Movie Guide  

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)  
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![TMDB](https://img.shields.io/badge/TMDB_API-01D277?style=for-the-badge&logo=themoviedatabase&logoColor=white)  
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-AI-blue?style=for-the-badge)  

> 🎥 *Tired of scrolling endlessly to decide what to watch? Let Movie Genius be your personal film buddy.* 🍿  

Movie Genius is not just another recommendation app. It’s a **next-gen, AI-driven movie companion** that understands your natural language queries. Whether you’re in the mood for *“a mind-bending thriller like Inception but slower paced”* or *“a heartwarming 80s comedy,”* Movie Genius delivers spot-on recommendations powered by **Google’s Gemini AI** and enriched with **The Movie Database (TMDB)**.  

✨ Imagine chatting with an AI friend who knows your cinematic taste and instantly brings you a list of movies that fit your vibe. That’s **Movie Genius**.  

---

## 🚀 Why Movie Genius?  

Most platforms filter by *genre* or *popularity*. Movie Genius goes beyond:  
- ✅ Understands **natural language prompts** (moods, vibes, themes).  
- ✅ Combines **AI intelligence (Gemini)** + **rich movie data (TMDB)**.  
- ✅ Creates an **immersive, cinematic browsing experience** with dynamic visuals.  

---

## 🖼️ Sneak Peek  

><img width="1862" height="899" alt="image" src="https://github.com/user-attachments/assets/238edded-643d-4e9d-926a-f5f2dc63d736" />

><img width="1459" height="675" alt="image" src="https://github.com/user-attachments/assets/9cf5fa4d-4272-4658-8c98-252d2342c9af" />

- 🎨 **Dynamic Homepage** → Posters of trending movies slide into the background.  
- 🎥 **Interactive Results** → Clean movie cards with posters, ratings, and years.  
- 📖 **Deep Dive** → Click a card → Modal with full-size poster + plot summary.  
- 🌀 **Genre Explorer** → Learn about movie genres, why they’re fun, and explore examples.  
- 💬 **Quote Carousel** → Famous lines from movies keep the experience lively.  
-- 🎯 **Recommender:** An AI-powered engine that suggests movies tailored to your query, mood, or preferences.

---

## 🛠️ How It Works  

1. **User Input** ✍️ → Type a query in natural language.  
2. **AI Brain (Gemini API)** 🧠 → Gemini interprets it, returns a list of movies.  
3. **Movie Data (TMDB API)** 🎞️ → TMDB enriches with posters, ratings, summaries.  
4. **Dynamic UI** 🎨 → Next.js + Tailwind CSS render a fluid, cinematic experience.  

---

## ✨ Features  

- 🔮 **AI-Powered Core:** Google Gemini interprets natural language queries.  
- 🎬 **Interactive Genre Explorer:** Learn genres + see examples.  
- 🎠 **Movie & Quote Sliders:** Keep the homepage fresh and cinematic.  
- 🖼️ **Movie Modals:** Smooth deep dive into movie details.  
- 📱 **Responsive Design:** Works beautifully on all devices.  

---

## 🧑‍💻 Tech Stack  

- ⚡ **Frontend & Backend:** [Next.js](https://nextjs.org)  
- 🎨 **Styling:** [Tailwind CSS](https://tailwindcss.com)  
- 🧠 **AI Integration:** Google Gemini API  
- 🎥 **Movie Data:** [TMDB API](https://www.themoviedb.org/documentation/api)  
- ⚛️ **Framework:** [React](https://react.dev)  

---

## 📦 Setup & Installation  

### Required API Keys
- [TMDB API Key](https://www.themoviedb.org/documentation/api)  
- [Google Gemini API Key](https://ai.google.dev)  

### Steps  

```bash
# 1. Clone the repo
git clone https://github.com/your-username/movie-genius.git
cd movie-genius

# 2. Install dependencies
npm install
# or yarn install

# 3. Add environment variables
echo "TMDB_API_KEY=your_tmdb_api_key" >> .env.local
echo "GEMINI_API_KEY=your_gemini_api_key" >> .env.local

# 4. Run the dev server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

When deploying, make sure to add the `TMDB_API_KEY` as an environment variable in your Vercel project settings.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Vercel link 

Here is my deployed Vercel link - [Vercel](https://movie-recommender-ten-pi.vercel.app/)
