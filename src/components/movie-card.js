'use client'

import Image from 'next/image'

export default function MovieCard({ movie, onClick }) {
  return (
    <div 
      className="bg-white/10 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out" 
      onClick={() => onClick(movie)}
    >
      <Image
        src={movie.poster_path}
        alt={`${movie.title} poster`}
        width={500}
        height={750}
        className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{movie.title} ({movie.year})</h3>
        <p className="text-sm text-zinc-400">Rating: {movie.vote_average}</p>
      </div>
    </div>
  )
}
