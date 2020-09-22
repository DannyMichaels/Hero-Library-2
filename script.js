// init hero domain, key and baseurl

const domain1 = 'https://superheroapi.com/api/'
const apiKey = '1791582447662011'
const baseUrl = `${domain1}${apiKey}/search/`

// movie domian, key and baseurl
const DOMAIN = 'http://www.omdbapi.com/';
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
  // const movieResponse = movieRes.data.Search
  // console.log(movieResponse)
  // console.log(response)
  renderList(movieRes.data.Search)
  removeHero() // putting the remove hero function in the event listener  
  
  // looping through array
  
  response.forEach((hero) => {
    
    // console.log(hero.image.url)
    const heroesDiv = document.querySelector('.heroes') // div for heroes
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
    // console.log(heroBio)
    
    const heroAppearance = hero.appearance
    // console.log(heroAppearance)

    const heroStats = hero.powerstats
    // console.log(heroStats)

    const heroWork = hero.work 
    // console.log(heroWork.occupation)
    const heroPara = document.createElement('p')
    
    heroPara.innerText =   'Publisher: ' + heroBio.publisher + '\n Gender: ' + heroAppearance.gender  + '\n Occupation: ' + heroWork.occupation + "\n Stats: " + "\n Combat: " + heroStats.combat + "\n Durability: " + heroStats.durability  + "\n Power: " + heroStats.power + "\n Speed: " + heroStats.speed + "\n Strength: " + heroStats.strength + '\n Aliases: ' + heroBio.aliases  
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
  movies.forEach(movie => { // forEach loop to movies. movie is array item
    const movieContainer = document.createElement('div') // create a variable for the container div
    movieContainer.className = 'movie-container' // give class name to movie container
    let names1 = document.createElement('h2')
    names1.className = 'movies-text'
    names1.innerHTML = 'Movies:'
    // .appendChild(names1)
    
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







