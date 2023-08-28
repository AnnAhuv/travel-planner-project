// Define the Movie class
class Movie {
    constructor(title, releaseDate, picture, rating) {
      this.title = title;
      this.releaseDate = releaseDate;
      this.picture = picture;
      this.rating = rating;
    }
  
    getTitle() {
      return this.title;
    }
  
    getReleaseDate() {
      return new Date(this.releaseDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  
    getPicture() {
      return this.picture;
    }
  
    getRating() {
      return this.rating;
    }
  }
  
  // Create a function to get HTTP options
  const getHttpOptions = () => ({
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer your-bearer-token-here'
    }
  });
  
  // Set up API constants
  const API_BASE_URL = 'https://api.themoviedb.org/3/';
  
  // Create a function to get a movie image URL
  const getImage = (imgPath, size) => `https://image.tmdb.org/t/p/${size}${imgPath}`;
  
  // Create a function to fetch movies
  const fetchMovies = () => {
    const moviesList = document.querySelector('.movies-list');
  
    fetch(`${API_BASE_URL}movie/now_playing?language=en-US&page=1`, getHttpOptions())
      .then(response => response.json())
      .then(response => {
        response.results.forEach(item => {
          const movie = new Movie(
            item.title,
            item.release_date,
            getImage(item.poster_path, 'w500'), // Change the image size as needed
            item.vote_average
          );
          createMovieCard(movie);
        });
        updateItemCount(response.results.length);
      })
      .catch(err => {
        createErrorMessage("An error occurred while fetching movies.");
        console.error(err);
      });
  };
  
  // Create a function to update item count
  const updateItemCount = count => {
    const itemCount = document.querySelector('.sort-bar p');
    itemCount.textContent = `${count} items`;
  };
  
  // Create a function to create movie cards
  const createMovieCard = movie => {
    const moviesList = document.querySelector('.movies-list');
  
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
      <img class="poster" src="${movie.getPicture()}" alt="${movie.getTitle()} Poster">
      <div class="movie-info">
        <a href="#" class="title normal-link">${movie.getTitle()}</a>
        <p class="release-date"><strong>Release Date:</strong> ${movie.getReleaseDate()}</p>
        <div class="flex-container rate-trailer">
          <div class="flex-container trailer">
            <img src="./images/play.svg">
            <a href="#">Trailer</a>
          </div>
          <div class="flex-container rating">
            <img src="./images/star.svg">
            <p>${movie.getRating()}</p>
          </div>
        </div>
      </div>
    `;
  
    moviesList.appendChild(movieElement);
  };
  
  // Create a function to display error messages
  const createErrorMessage = message => {
    const moviesList = document.querySelector('.movies-list');
  
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
  
    moviesList.appendChild(errorMessage);
  };
  
  // Call the fetchMovies function to start fetching movies
  fetchMovies();
  