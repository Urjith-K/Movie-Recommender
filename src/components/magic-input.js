'use client'
import { useState } from 'react'

export default function MagicInput({ onSubmit }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [formData, setFormData] = useState({
    likedMovie: '',
    genres: '',
    actor: '',
    director: '',
    mood: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!isExpanded ? (
        <button 
          onClick={() => setIsExpanded(true)} 
          className="w-full p-4 bg-white/10 text-white rounded-lg shadow-lg backdrop-blur-md hover:bg-white/20 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Find Your Next Movie
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <input name="likedMovie" placeholder="A movie you liked" className="w-full p-3 rounded bg-zinc-800 text-white outline-none" onChange={handleChange} />
          <input name="genres" placeholder="Favorite genres (comma-separated)" className="w-full p-3 rounded bg-zinc-800 text-white outline-none" onChange={handleChange} />
          <input name="actor" placeholder="Favorite actor (optional)" className="w-full p-3 rounded bg-zinc-800 text-white outline-none" onChange={handleChange} />
          <input name="director" placeholder="Favorite director (optional)" className="w-full p-3 rounded bg-zinc-800 text-white outline-none" onChange={handleChange} />
          <input name="mood" placeholder="What's your current mood?" className="w-full p-3 rounded bg-zinc-800 text-white outline-none" onChange={handleChange} />
          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded text-lg font-semibold transition">
            Recommend Movies
          </button>
        </form>
      )}
    </div>
  )
}
