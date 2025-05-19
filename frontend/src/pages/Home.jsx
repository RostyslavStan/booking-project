import { useEffect, useState } from "react"
import axios from 'axios'
import MovieList from "../components/MovieList"
export default function MainPage() {
    const [searchString, setSearchString] = useState('')
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const fetchData = async ()=>{
            const response = await axios.get('http://localhost:3000/api/movies')
            setMovies(response.data)
        }

        fetchData()
    }, [])

        async function search() {
            const response = await axios.get('http://localhost:3000/api/search', {
                params: {
                    title: searchString
                }
            });
            setMovies(response.data)
        }
        search()
    return (
        <>
        <main>
        <input 
            placeholder='Пошук'
            type="text"
            className='search-input'
            value={searchString}
            onChange={e => setSearchString(e.target.value)}
        >
        </input>
        <MovieList movies={movies}/>
        </main>
        </>
    )
}