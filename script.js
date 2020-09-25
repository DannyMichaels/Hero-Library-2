

const domain = 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/'
const apiKey = '1791582447662011'
const baseUrl = `${domain}${apiKey}/search/`


const omDBdomain = 'https://www.omdbapi.com/';
const api_key = '591fa8f4'
const omDBurl = `${omDBdomain}?apikey=${api_key}&`;

const input = document.querySelector('#search-hero-input')
const button = document.querySelector('#search-hero-button')

button.addEventListener('click', async (e) => { // this event listener listens to the submit button click.
  e.preventDefault() // prevents page from reloading once search submitted
  let userInput = input.value // takes user input
  const res = await axios.get(`${baseUrl}${userInput}`) // domain for superhero api
  const response = res.data.results
  const movieRes = await axios.get(`${omDBurl}s=${userInput}`) // domain for omdb

  res.data.response === "error" ? null : renderList(movieRes.data.Search) // if no hero search results appear, do not return movie results.

  removeHero() 

  const heroesDiv = document.querySelector('.heroes')

  let heroData = document.createElement('h3')
  heroData.className = 'hero-data'
  heroData.innerHTML = 'Hero Data:'
  heroesDiv.appendChild(heroData)
  if (res.data.response === "error") {  // if no search results found, give an alert message saying "no hero found"
    heroData.innerHTML = 'NO HERO FOUND!'
    alert("No hero found, try a different name!")
  } else {

  }

  response.forEach((hero) => { // looping through array


    const heroDiv = document.createElement('div')
    heroDiv.classList = 'hero-div'
    heroesDiv.append(heroDiv)

    const name1 = document.createElement('h3')

    const heroName = hero.name
    name1.textContent = `${heroName}`
    heroDiv.append(name1)

    const heroImg = document.createElement('img')
    heroImg.className = 'hero-img'
    heroImg.src = hero.image.url
    heroDiv.append(heroImg)


    const heroBio = hero.biography
    const heroAppearance = hero.appearance
    const heroStats = hero.powerstats
    const heroWork = hero.work
    const heroPara = document.createElement('p')

    heroPara.innerText = 'Publisher: ' + heroBio.publisher + '\n Gender: ' + heroAppearance.gender + '\n Occupation: ' + heroWork.occupation + "\n Stats: " + "\n Combat: " + heroStats.combat + "\n Durability: " + heroStats.durability + "\n Power: " + heroStats.power + "\n Speed: " + heroStats.speed + "\n Strength: " + heroStats.strength + '\n Aliases: ' + heroBio.aliases
    heroDiv.append(heroPara)

    input.value = ''

  })
})

function removeHero() { // This function removes heroes once a new search has been submitted
  const removeDiv = document.querySelector('.heroes')
  while (removeDiv.lastChild) { 
    removeDiv.removeChild(removeDiv.lastChild)
  }
}


const movieDisplay = document.querySelector(".movies") // select the class .movies and assign it to movieDisplay

const renderList = movies => {
  let names1 = document.createElement('h3') // assign h3 to variable names1
  names1.className = 'names-movie'  // give names1 h3 a class name
  names1.innerHTML = 'Movie/Series:' // give names1 text "Movie/Series:"
  movieDisplay.appendChild(names1) // append the h3 to the movie 

  movies.forEach(movie => {  // looping through the array
    const movieContainer = document.createElement('div') // create div element and assign it to a variable
    movieContainer.className = 'movie-container' // give it a class and a class name

    const title = document.createElement('h3') // creating h3 for movie title
    title.innerHTML = movie.Title   // text is going to be what the api assigned as title
    movieContainer.appendChild(title) // append the title to the movie container

    const year = document.createElement('p') // create element of p and assign it to the variable
    year.innerHTML = 'Release Date: ' + movie.Year  // text of year
    movieContainer.appendChild(year) // append year data to container

    if (movie.Poster !== "N/A") { // gets rid of error message when movie image not found
      const image = document.createElement('img') // create element img assign it to a variable
      image.className = 'movie-img'   // give variable a class
      image.setAttribute('src', movie.Poster) // find the image url from api and assign it to the variable
      movieContainer.appendChild(image) //append image to the movie container
    }

    movieDisplay.appendChild(movieContainer) // append the movie container to movie list
  })
}

button.addEventListener('click', async (e) => {  // this event listener removes movies once a new search has been submitted
  e.preventDefault() 
  removeMovie()
})


function removeMovie() { // this function removes movies once a new search has been submitted
  const removeMovieDiv = document.querySelector('.movies')

  while (removeMovieDiv.lastChild) {
    removeMovieDiv.removeChild(removeMovieDiv.lastChild)
  }
}

function removeTitle() {  // this removes "hero data" text once new search result submitted
  const removeTitleDiv = document.querySelector('.hero-data')
  while (removeTitleDiv.lastChild) {
    removeTitleDiv.removeChild(removeTitleDiv.lastChild)
  }
}

