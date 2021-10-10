// Kino haqidagi malumotlarini normaga keltirish
var normalizedMovies = movies.map(function (movie, i) {
  return {
    // id = i + 1,
    title: movie.Title.toString(),
    year: movie.movie_year,
    categories: movie.Categories.split('|'),
    summary: movie.summary,
    trailerLink: `https://youtube.com/watch?=${movie.ytid}`,
    imgUrl: `https://i3.ytimg.com/vi/${movie.ytid}/hqdefault.jpg`,
  }
})

// Html dan kerakli bo'lgan fayllarni chaqirib olish
var elMovieList = $_('.movies_list');
var elTemplate = $_('#card-template').content;
var elSearchForm = $_('.search-form')
var elSearchInput = $_('.search-input', elSearchForm);

//Yordamchi funksiyalar

var createMovie = function (movie) {

  var newMovie = elTemplate.cloneNode(true);

  $_('.movie-img', newMovie).src = movie.imgUrl;
  $_('.movie-name', newMovie).textContent = movie.title.toString();
  $_('.movie-year', newMovie).textContent = movie.year;
  $_('.movie-link', newMovie).textContent = 'Whatch trailer';
  $_('.movie-link', newMovie).href = `https://www.youtube.com/watch?v=${movie.ytid}`;

  return newMovie;
};

var renderMovies = function (movies) {
  elMovieList.innerHTML = '';

  var searchFragment = document.createDocumentFragment();

  movies.forEach(function (movie) {
    searchFragment.appendChild(createMovie(movie));
  })

  elMovieList.appendChild(searchFragment)
}

// Qidiruv funksiyasi

elSearchForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var searchQuery = new RegExp(elSearchInput.value.trim(), 'gi');

  var searchResult = normalizedMovies.filter(function (movie) {
    return movie.title.match(searchQuery);
  })

  renderMovies(searchResult);
});


