import { useNavigate } from "react-router"
export default function MovieCard({movie}){
    const navigate = useNavigate()

    const HandleBook = () => {
        navigate(`/booking/${movie.id}`)
    }
    return(
        <button onClick={HandleBook} className="movie-card">
            <img src={movie.image}/>
            <aside>
                <strong>{movie.title}</strong>
                <p>Сюжет: {movie.description}</p>
                <p>Жанр: {movie.genre}</p>
                <p>Сеанс: {movie.time}</p>
                <p>Сеанс: {movie.date}</p>
            </aside>
        </button>
    )
}