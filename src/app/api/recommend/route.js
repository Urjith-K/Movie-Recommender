import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

export async function POST(req) {
  const body = await req.json();
  const { likedMovie, genres, actor, director, mood } = body;
  const geminiApiKey = process.env.GEMINI_API_KEY;
  const tmdbApiKey = process.env.TMDB_API_KEY;

  const genAI = new GoogleGenerativeAI(geminiApiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
    You are a movie recommendation expert. Based on the user's preferences, recommend 5 movies.
    User preferences:
    - Liked Movie: ${likedMovie}
    - Genres: ${genres}
    - Actor: ${actor}
    - Director: ${director}
    - Mood: ${mood}

    Respond with a JSON array of movie titles and their release years, like this:
    [
      {"title": "Movie Title 1", "year": "YYYY"},
      {"title": "Movie Title 2", "year": "YYYY"}
    ]
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    // Clean the response to ensure it's valid JSON
    const cleanedText = text.replace(/```json\n?/g, '').replace(/```/g, '');
    const recommendedMovies = JSON.parse(cleanedText);

    const detailedMovies = await Promise.all(
      recommendedMovies.map(async (movie) => {
        const searchResponse = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: tmdbApiKey,
              query: movie.title,
              primary_release_year: movie.year,
            },
          }
        );

        if (searchResponse.data.results.length > 0) {
          const tmdbMovie = searchResponse.data.results[0];
          return {
            title: tmdbMovie.title,
            year: tmdbMovie.release_date.substring(0, 4),
            overview: tmdbMovie.overview,
            poster_path: `https://image.tmdb.org/t/p/w500${tmdbMovie.poster_path}`,
            vote_average: tmdbMovie.vote_average,
          };
        }
        return null;
      })
    );

    const filteredMovies = detailedMovies.filter(Boolean);
    return Response.json({ movies: filteredMovies });
  } catch (err) {
    console.error("Error:", err);
    return Response.json({ movies: [] });
  }
}
