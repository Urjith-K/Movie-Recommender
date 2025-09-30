'use client'
import { useState, useEffect, useRef } from 'react'
import MovieCard from './movie-card'

export default function MovieSlider({ onMovieClick, onMovieChange }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    const fetchNewMovies = async () => {
      try {
        const res = await fetch('/api/new-movies')
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        setMovies(data.movies)
        if (data.movies.length > 0) {
          onMovieChange(data.movies[0].poster_path)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchNewMovies()
  }, [])

  useEffect(() => {
    if (movies.length === 0 || !sliderRef.current) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % movies.length
        const cardWidth = sliderRef.current.children[0].offsetWidth + 16 // Card width + gap (tailwind space-x-4 is 16px)
        sliderRef.current.scrollTo({
          left: nextIndex * cardWidth,
          behavior: 'smooth',
        })
        onMovieChange(movies[nextIndex].poster_path)
        return nextIndex
      })
    }, 10000) // 10 seconds

    return () => clearInterval(interval)
  }, [movies, onMovieChange, currentIndex])

  if (loading) return <p>Loading new movies...</p>
  if (error) return <p>Error loading new movies: {error}</p>

  return (
    <section className="w-full max-w-5xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6 text-center">New & Popular Movies</h2>
      <div ref={sliderRef} className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide">
        {movies.map((movie) => (
          <div key={movie.title} className="flex-none w-48">
            <MovieCard movie={movie} onClick={onMovieClick} />
          </div>
        ))}
      </div>
    </section>
  )
}