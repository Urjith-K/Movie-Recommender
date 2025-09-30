import axios from "axios";

export async function GET() {
  const tmdbApiKey = process.env.TMDB_API_KEY;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: tmdbApiKey,
          language: "en-US",
          page: 1,
        },
      }
    );

    const movies = response.data.results.map((movie) => ({
      title: movie.title,
      year: movie.release_date ? movie.release_date.substring(0, 4) : "N/A",
      overview: movie.overview,
      poster_path: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null,
      vote_average: movie.vote_average,
      genre_ids: movie.genre_ids,
    }));

    return Response.json({ movies });
  } catch (error) {
    console.error("Error fetching new movies:", error);
    return Response.json({ movies: [] }, { status: 500 });
  }
}
