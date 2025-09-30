'use client'

import Image from 'next/image'

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-zinc-900 rounded-lg shadow-xl max-w-2xl w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">&times;</button>
        <div className="flex flex-col md:flex-row gap-8">
          <Image
            src={movie.poster_path}
            alt={`${movie.title} poster`}
            width={500}
            height={750}
            className="w-full md:w-1/3 h-auto rounded-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-2">{movie.title} ({movie.year})</h2>
            <p className="text-lg text-zinc-400 mb-4">Rating: {movie.vote_average}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
