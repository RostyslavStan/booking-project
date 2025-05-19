import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import axios from 'axios'
export default function MovieList({movies}) {

    return(
        <div className="movie-list">
            {movies.map(movie =>( 
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}