// init hero domain, key and baseurl

const domain1 = 'https://superheroapi.com/api/'
const apiKey = '1791582447662011'
const baseUrl = `${domain1}${apiKey}/search/`

// movie domian, key and baseurl
const DOMAIN = 'https://www.omdbapi.com/';
const API_KEY = '591fa8f4'
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

// selecting input and button
const input = document.querySelector('#search-hero-input')
const button = document.querySelector('#search-hero-button')



// add event listener
button.addEventListener('click', async (e) => {
  e.preventDefault()
  let userInput = input.value
  const res = await axios.get(`${baseUrl}${userInput}`)
  const response = res.data.results // for hero search
  const movieRes = await axios.get(`${BASE_URL}s=${userInput}`) // for movie search

  // movie rendering conditional, shay helped me with this.

  // if (res.data.response === "error") { // if there isn't a hero search result, do not show movie
  // } else {  // else, if it does not have 'error', render the movie results
  //   renderList(movieRes.data.Search)  // render the movie results
  // }  

  // refactor the movie rendering conditional to a ternary operator, it just looks nicer 

  res.data.response === "error" ? null : renderList(movieRes.data.Search)


 
  removeHero() // putting the remove hero function in the event listener  
  const heroesDiv = document.querySelector('.heroes') // div for heroes

  let heroData = document.createElement('h3')
  heroData.className = 'hero-data'
  heroData.innerHTML = 'Hero Data:'
  heroesDiv.appendChild(heroData)
  if (res.data.response === "error") {
    // console.log('OMG!')
    heroData.innerHTML = 'NO HERO FOUND!'
    alert("No hero found, try a different name!")
  } 
    else {  
      // console.log('Yipee!')
  }  

  // looping through array
  response.forEach((hero) => {

    // const heroesDiv = document.querySelector('.heroes') // div for heroes
   
    const heroDiv = document.createElement('div') // creating div element for each hero
    heroDiv.classList = 'hero-div'
    heroesDiv.append(heroDiv) // append the hero to the heroes div

    // creating name appearance
    const name1 = document.createElement('h3')

    const heroName = hero.name
    name1.textContent = `${heroName}`
    heroDiv.append(name1)


    // creating image appearance

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

    input.value = '' // this resets user input once search button is clicked

  })
})

function removeHero() {
  const removeDiv = document.querySelector('.heroes')
  // console.log(removeDiv)
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}


const movieDisplay = document.querySelector(".movies") // assign class .movie-list to a variable named movieDisplay

const renderList = movies => { // create a function called render list, create movies paramater
  let names1 = document.createElement('h3')
  names1.className = 'names-movie'
  names1.innerHTML = 'Movie/Series:'
  movieDisplay.appendChild(names1)

  movies.forEach(movie => { // forEach loop to movies. movie is array item
    const movieContainer = document.createElement('div') // create a variable for the container div
    movieContainer.className = 'movie-container' // give class name to movie container

    const title = document.createElement('h3') // create h3 element and assign it to variable named title
    title.innerHTML = movie.Title // make the variable's text equal to movie.Title data
    movieContainer.appendChild(title) // append title h3 to the container div

    const year = document.createElement('p') // create a paragraph element, assign it to a variable named year
    year.innerHTML = 'Release Date: ' + movie.Year // make year's text equal to the movies year
    movieContainer.appendChild(year)  // append the year to the container div

    if (movie.Poster !== "N/A") { // thanks to this if statement, error will go away 
      const image = document.createElement('img') // create a image element, assign it to a variable named 'image'
      image.className = 'movie-img'
      image.setAttribute('src', movie.Poster) // set attribute to the image variable, source, movie.Poster.
      movieContainer.appendChild(image) // append the image to the div
    }

    movieDisplay.appendChild(movieContainer) // append the div to the section with the .movie-list class
  })
}

button.addEventListener('click', async (e) => {
  e.preventDefault()
  removeMovie()
})


function removeMovie() {
  const removeMovieDiv = document.querySelector('.movies')
  // console.log(removeMovieDiv)
  while (removeMovieDiv.lastChild) {
    removeMovieDiv.removeChild(removeMovieDiv.lastChild)
  }
}

// button.addEventListener('click', async (e) => {
//   e.preventDefault()
//   removeTitle()
// })

function removeTitle() {
  const removeTitleDiv = document.querySelector('.hero-data')
  while (removeTitleDiv.lastChild) {
    removeTitleDiv.removeChild(removeTitleDiv.lastChild)
  }
}

