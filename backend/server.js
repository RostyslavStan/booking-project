const express = require('express')
const app = express()
const { movies } = require('./data/movies');
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use('/data/uploads', express.static('data/uploads'));

app.get('/api/search', (req, res) => {
    const searchString = req.query.title?.toLowerCase()
    
    const results = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchString)
    );

    res.json(results);
})

app.get ('/api/movies', (req, res) => {
    res.json(movies)
}) 
app.listen(3000, () => {
    console.log('Сервер запущено на http://localhost:3000');
  });