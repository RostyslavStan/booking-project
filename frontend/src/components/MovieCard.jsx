export default function MovieCard({movie}){
    return(
        <button className="movie-card">
            <img src={movie.image}/>
            <aside>
                <strong>{movie.title}</strong>
                <p>Сюжет: {movie.description}</p>
                <p>Жанр: {movie.genre}</p>
                <p>Сеанс: {movie.time}</p>
            </aside>
        </button>
    )
}