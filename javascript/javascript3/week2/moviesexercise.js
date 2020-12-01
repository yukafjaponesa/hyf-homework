// Fetch movies from this api:
//
// Create an array of bad movies
const url = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'

fetch(url)
  .then(res => res.json())
  .then(result => {
    const badMovies = result.filter(movie =>
      movie.rating < 5.0)

   const badMoviesSince2000 = badMovies.filter(movie =>
     movie.year >= 2000
    )
    console.log(badMovies);
    console.log(badMoviesSince2000);
})

// Creat an array of bad movies since year 2000
//use forEach & filter for the array made in the 1st step
