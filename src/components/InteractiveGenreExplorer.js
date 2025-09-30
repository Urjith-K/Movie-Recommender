'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import MovieCard from './movie-card'

export default function InteractiveGenreExplorer() {
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [exampleMovies, setExampleMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [moviesLoading, setMoviesLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch('/api/genres')
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        setGenres(data.genres)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGenres()
  }, [])

  useEffect(() => {
    if (selectedGenre) {
      const fetchExampleMovies = async () => {
        setMoviesLoading(true)
        try {
          const res = await fetch(`/api/movies-by-genre?genreId=${selectedGenre.id}`)
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
          }
          const data = await res.json()
          setExampleMovies(data.movies.slice(0, 5)) // Limit to 5 example movies
        } catch (err) {
          console.error("Error fetching example movies:", err)
          setExampleMovies([])
        } finally {
          setMoviesLoading(false)
        }
      }
      fetchExampleMovies()
    }
  }, [selectedGenre])

  const getGenreExplanation = (genreId) => {
    switch (genreId) {
      case 28: return { title: "Action", desc: "High-energy films, often involving physical feats, combat, and thrilling sequences. Good for adrenaline junkies and those who love fast-paced plots.", whyGood: "Action movies provide thrilling escapism, showcasing incredible stunts, intense fight choreography, and often compelling hero journeys. They're perfect for a high-octane viewing experience." }
      case 12: return { title: "Adventure", desc: "Stories of exciting journeys, exploration, and daring exploits. Good for those who enjoy epic quests and discovering new worlds.", whyGood: "Adventure films transport you to exotic locales and immerse you in grand narratives of discovery and challenge. They inspire a sense of wonder and excitement." }
      case 16: return { title: "Animation", desc: "Films created using animated images rather than live action. Good for all ages, offering creative storytelling and visual artistry.", whyGood: "Animation allows for boundless creativity, bringing fantastical worlds and characters to life in ways live-action cannot. They often carry deep emotional resonance and universal themes." }
      case 35: return { title: "Comedy", desc: "Films designed to make the audience laugh, often with humorous situations and dialogue. Perfect for a lighthearted and entertaining watch.", whyGood: "Comedy provides much-needed laughter and stress relief. They can be witty, slapstick, or observational, offering a diverse range of humor to brighten your day." }
      case 80: return { title: "Crime", desc: "Movies focused on criminal activities, investigations, and the justice system. Ideal for fans of suspense, intricate plots, and moral dilemmas.", whyGood: "Crime thrillers offer gripping narratives, often exploring the darker side of human nature, complex investigations, and the pursuit of justice or revenge. They keep you on the edge of your seat." }
      case 99: return { title: "Documentary", desc: "Non-fictional films intended to document reality, primarily for the purposes of instruction, education, or maintaining a historical record. Great for learning and gaining new perspectives.", whyGood: "Documentaries offer insights into real-world issues, historical events, and diverse cultures. They are powerful tools for education and fostering empathy, often revealing compelling true stories." }
      case 18: return { title: "Drama", desc: "Serious, plot-driven films, often with realistic characters and settings, dealing with emotional themes. Best for those who appreciate deep character studies and compelling human stories.", whyGood: "Drama films delve into the complexities of human experience, offering powerful emotional journeys and thought-provoking narratives. They often resonate deeply and provide a mirror to life." }
      case 10751: return { title: "Family", desc: "Films suitable for all ages, often with themes of love, friendship, and moral lessons. Perfect for shared viewing experiences.", whyGood: "Family movies bring people together, offering heartwarming stories and positive messages that appeal to viewers of all generations. They create lasting memories and shared joy." }
      case 14: return { title: "Fantasy", desc: "Films that feature magical elements, mythical creatures, or supernatural events. Ideal for escaping into imaginative worlds.", whyGood: "Fantasy films transport you to realms of magic and wonder, allowing you to explore impossible possibilities and epic battles between good and evil. They ignite the imagination." }
      case 36: return { title: "History", desc: "Films based on historical events or figures, often dramatized for entertainment. Great for understanding the past and its impact.", whyGood: "Historical films offer a window into the past, bringing significant events and figures to life. They can be both educational and deeply moving, providing context for the present." }
      case 27: return { title: "Horror", desc: "Films designed to frighten and disturb, often featuring supernatural elements, violence, or psychological suspense. For those who enjoy a good scare.", whyGood: "Horror movies provide a safe outlet for fear and adrenaline, offering suspenseful plots and often exploring psychological depths. They're a thrilling way to confront the unknown." }
      case 10402: return { title: "Music", desc: "Films that feature musical performances, often as a central part of the narrative. Perfect for music lovers and those who enjoy rhythm and melody in storytelling.", whyGood: "Musical films combine compelling narratives with the power of song and dance, creating vibrant and often uplifting experiences. They can be incredibly expressive and entertaining." }
      case 9648: return { title: "Mystery", desc: "Films centered around a puzzle or crime that needs to be solved, often with suspenseful plots. Ideal for armchair detectives and those who love unraveling secrets.", whyGood: "Mystery films engage your mind, challenging you to piece together clues and solve puzzles alongside the characters. They offer intellectual stimulation and satisfying revelations." }
      case 10749: return { title: "Romance", desc: "Films focused on love stories and romantic relationships. Great for heartwarming and emotional viewing.", whyGood: "Romance films explore the universal themes of love, connection, and human relationships. They can be heartwarming, heartbreaking, or inspiring, offering a deep emotional connection." }
      case 878: return { title: "Science Fiction", desc: "Films that explore futuristic concepts, advanced technology, and often alien life or space travel. Perfect for imaginative and thought-provoking experiences.", whyGood: "Sci-Fi films push the boundaries of imagination, exploring future possibilities, technological advancements, and philosophical questions. They often provide social commentary and stunning visual effects." }
      case 10770: return { title: "TV Movie", desc: "Films originally made for television broadcast. Often offer intimate stories and character-driven narratives.", whyGood: "TV movies often provide accessible and engaging stories, sometimes exploring niche topics or character dramas that might not fit a theatrical release. They're great for a cozy night in." }
      case 53: return { title: "Thriller", desc: "Films that aim to evoke excitement, suspense, and anticipation in the audience. Ideal for those who love intense plots and unexpected twists.", whyGood: "Thrillers are masters of suspense, keeping you on the edge of your seat with high stakes and unexpected turns. They provide an exhilarating and often thought-provoking experience." }
      case 10752: return { title: "War", desc: "Films that depict warfare, often focusing on battles, soldiers, and the impact of conflict. Important for understanding historical events and human resilience.", whyGood: "War films offer powerful insights into human conflict, sacrifice, and resilience. They can be harrowing, heroic, and deeply moving, often serving as historical reflections." }
      case 37: return { title: "Western", desc: "Films set in the American Old West, often featuring cowboys, outlaws, and frontier life. Classic tales of good versus evil and the untamed frontier.", whyGood: "Westerns evoke a sense of rugged individualism and the pioneering spirit. They often feature iconic landscapes, moral struggles, and timeless tales of justice and survival." }
      default: return { title: "Unknown Genre", desc: "A genre of film.", whyGood: "Every genre offers unique storytelling and viewing experiences. Explore to find your next favorite!" }
    }
  }

  if (loading) return <p>Loading genres...</p>
  if (error) return <p>Error loading genres: {error}</p>

  return (
    <section className="w-full max-w-5xl mx-auto mt-12 p-8 bg-white/5 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-4">Explore Genres</h3>
        <ul className="space-y-2 max-h-96 overflow-y-auto pr-2">
          {genres.map((genre) => (
            <li
              key={genre.id}
              className={`p-3 rounded cursor-pointer transition-colors duration-200
                ${selectedGenre && selectedGenre.id === genre.id ? 'bg-purple-700' : 'hover:bg-white/10'}
              `}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-2 p-4 bg-white/10 rounded-lg">
        {selectedGenre ? (
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">{getGenreExplanation(selectedGenre.id).title}</h3>
            <p className="text-lg">{getGenreExplanation(selectedGenre.id).desc}</p>
            <p className="text-md italic">Why watch? {getGenreExplanation(selectedGenre.id).whyGood}</p>

            <h4 className="text-2xl font-bold mt-6">Example Movies:</h4>
            {moviesLoading ? (
              <p>Loading example movies...</p>
            ) : exampleMovies.length > 0 ? (
              <ul className="grid grid-cols-2 gap-4">
                {exampleMovies.map((movie) => (
                  <li key={movie.id} className="bg-zinc-800 p-2 rounded flex items-center space-x-2">
                    {movie.poster_path &&
                      <Image
                        src={movie.poster_path}
                        alt={movie.title}
                        width={48}
                        height={72}
                        className="object-cover rounded" />}
                    <div>
                      <p className="font-semibold text-sm">{movie.title}</p>
                      <p className="text-xs text-zinc-400">{movie.year}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No example movies found for this genre.</p>
            )}
          </div>
        ) : (
          <p className="text-xl text-center mt-12">Select a genre to learn more and see example movies!</p>
        )}
      </div>
    </section>
  )
}