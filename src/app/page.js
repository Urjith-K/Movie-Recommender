'use client'
import { useState } from 'react'
import MagicInput from '../components/magic-input'
import MovieSlider from '../components/MovieSlider'
import MovieCard from '../components/movie-card'
import MovieModal from '../components/movie-modal'
import InteractiveGenreExplorer from '../components/InteractiveGenreExplorer'
import QuoteSlider from '../components/QuoteSlider'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [recommendations, setRecommendations] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [backgroundImage, setBackgroundImage] = useState('')

  const handleMovieChange = (imagePath) => {
    setBackgroundImage(imagePath)
  }

  const handleRecommend = async (formData) => {
    setLoading(true)
    setRecommendations([])

    const res = await fetch('/api/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    const data = await res.json()
    setRecommendations(data.movies)
    setLoading(false)
  }

  return (
    <main
      className="min-h-screen text-white flex flex-col items-center p-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-7xl font-extrabold mb-8 drop-shadow-lg">Movie Genius</h1>
        <section className="text-center mb-12 max-w-3xl">
          <p className="text-2xl font-semibold mb-2 drop-shadow">Welcome to Movie Genius, your personal AI-powered movie recommendation engine!</p>
          <p className="text-xl font-semibold drop-shadow">We use advanced AI to understand your unique tastes and suggest films you'll love. Simply tell us what you like, and let Movie Genius discover your next favorite movie. Say goodbye to endless scrolling and hello to personalized entertainment.</p>
        </section>
        <MovieSlider onMovieClick={setSelectedMovie} onMovieChange={handleMovieChange} />
        <InteractiveGenreExplorer onMovieClick={setSelectedMovie} />
        <MagicInput onSubmit={handleRecommend} />

        <QuoteSlider />

        {loading && <p className="mt-8">Finding your gems...</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
          {recommendations.map((movie) => (
            <MovieCard key={movie.title} movie={movie} onClick={setSelectedMovie} />
          ))}
        </div>

        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      </div>
    </main>
  )
}
