import axios from "axios";

export async function GET() {
  const tmdbApiKey = process.env.TMDB_API_KEY;

  if (!tmdbApiKey) {
    console.error("TMDB API key is not configured.");
    return Response.json(
      { message: "Server configuration error: Missing TMDB API key." },
      { status: 500 }
    );
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list`,
      {
        params: {
          api_key: tmdbApiKey,
          language: "en-US",
        },
      }
    );
    return Response.json(response.data);
  } catch (error) {
    console.error("Error fetching genres:", error);
    return Response.json({ genres: [] }, { status: 500 });
  }
}
