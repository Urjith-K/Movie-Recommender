"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
}

const HeroSection: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Placeholder for fetching data from TMDb API
    // In a real application, you would fetch popular movies here
    const dummyMovies: Movie[] = [
      {
        id: 1,
        title: "The Grand Adventure",
        overview: "A thrilling journey through uncharted lands.",
        backdrop_path: "/path/to/grand_adventure_backdrop.jpg",
        poster_path: "/path/to/grand_adventure_poster.jpg",
      },
      {
        id: 2,
        title: "Mystery of the Old House",
        overview: "A detective uncovers dark secrets in an abandoned mansion.",
        backdrop_path: "/path/to/mystery_house_backdrop.jpg",
        poster_path: "/path/to/mystery_house_poster.jpg",
      },
      {
        id: 3,
        title: "Love in the City",
        overview: "Two strangers find love in the bustling heart of the city.",
        backdrop_path: "/path/to/love_city_backdrop.jpg",
        poster_path: "/path/to/love_city_poster.jpg",
      },
    ];
    setMovies(dummyMovies);
  }, []);

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
                <p className="text-lg w-2/3">{movie.overview}</p>
                <div className="mt-6">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg mr-4">
                    Watch Now
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
