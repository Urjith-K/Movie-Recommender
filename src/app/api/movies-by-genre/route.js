import axios from "axios";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const genreId = searchParams.get('genreId');
  const tmdbApiKey = process.env.TMDB_API_KEY;

  if (!genreId) {
    return Response.json({ error: "Genre ID is required" }, { status: 400 });
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          api_key: tmdbApiKey,
          with_genres: genreId,
          sort_by: "popularity.desc",
          language: "en-US",
          page: 1,
        },
      }
    );

    const movies = response.data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      year: movie.release_date ? movie.release_date.substring(0, 4) : "N/A",
      overview: movie.overview,
      poster_path: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null,
      vote_average: movie.vote_average,
    }));

    return Response.json({ movies });
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
    return Response.json({ movies: [] }, { status: 500 });
  }
}
