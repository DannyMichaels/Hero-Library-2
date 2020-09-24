
// HERO API

const domain = 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/'
const apiKey = '1791582447662011'
const baseUrl = `${domain}${apiKey}/search/`


//OMDB

const omDBdomain = 'https://www.omdbapi.com/';
const api_key = '591fa8f4'
const omDBurl = `${omDBdomain}?apikey=${api_key}&`;

const input = document.querySelector('#search-hero-input')
const button = document.querySelector('#search-hero-button')

// ----------

  button.addEventListener('click', async (e) => {
  e.preventDefault()
  let userInput = input.value
  const res = await axios.get(`${baseUrl}${userInput}`)
  const response = res.data.results 
  const movieRes = await axios.get(`${omDBurl}s=${userInput}`) 

  res.data.response === "error" ? null : renderList(movieRes.data.Search)

  removeHero()

  const heroesDiv = document.querySelector('.heroes')

  let heroData = document.createElement('h3')
  heroData.className = 'hero-data'
  heroData.innerHTML = 'Hero Data:'
  heroesDiv.appendChild(heroData)
  if (res.data.response === "error") {
    heroData.innerHTML = 'NO HERO FOUND!'
    alert("No hero found, try a different name!")
  } else {

  }

  response.forEach((hero) => {


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

function removeHero() {
  const removeDiv = document.querySelector('.heroes')
    while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}


const movieDisplay = document.querySelector(".movies") 

const renderList = movies => { 
  let names1 = document.createElement('h3')
  names1.className = 'names-movie'
  names1.innerHTML = 'Movie/Series:'
  movieDisplay.appendChild(names1)

  movies.forEach(movie => { 
    const movieContainer = document.createElement('div') 
    movieContainer.className = 'movie-container'  

    const title = document.createElement('h3') 
    title.innerHTML = movie.Title 
    movieContainer.appendChild(title) 

    const year = document.createElement('p') 
    year.innerHTML = 'Release Date: ' + movie.Year 
    movieContainer.appendChild(year)  
  
    if (movie.Poster !== "N/A") { 
      const image = document.createElement('img') 
      image.className = 'movie-img'
      image.setAttribute('src', movie.Poster) 
      movieContainer.appendChild(image) 
    }

    movieDisplay.appendChild(movieContainer) 
  })
}

button.addEventListener('click', async (e) => {
  e.preventDefault()
  removeMovie()
})


function removeMovie() {
  const removeMovieDiv = document.querySelector('.movies')

  while (removeMovieDiv.lastChild) {
    removeMovieDiv.removeChild(removeMovieDiv.lastChild)
  }
}

function removeTitle() {
  const removeTitleDiv = document.querySelector('.hero-data')
  while (removeTitleDiv.lastChild) {
    removeTitleDiv.removeChild(removeTitleDiv.lastChild)
  }
}

