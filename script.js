// init domain, key and baseurl

const domain = 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/'
const apiKey = '1791582447662011'
const baseUrl = `${domain}${apiKey}/search/`

// selecting input and button
const input = document.querySelector('#search-hero-input')
const button = document.querySelector('#search-hero-button')

// add event listener

// add event listener
button.addEventListener('click', async (e) => {
  e.preventDefault()
  let userInput = input.value
  const res = await axios.get(`${baseUrl}${userInput}`)
  const response = res.data.results
  // console.log(response)

  // looping through array
  response.forEach((hero) => {
    // console.log(hero.image.url)
    const heroesDiv = document.querySelector('.heroes') // div for heroes
    const heroDiv = document.createElement('div') // creating div element for each hero
    heroesDiv.append(heroDiv) // append the hero to the heroes div

    // creating name appearance

    const name = document.createElement('h3')

    const heroName = hero.name 
    name.textContent = `${heroName}`
    heroDiv.append(name)

    // creating image appearance
    
    const heroImg = document.createElement('img')
    heroImg.src = hero.image.url 
    heroDiv.append(heroImg)
    

    //
    const heroBioPara = document.createElement('p')
    
    const heroBio = hero.biography
    heroBioPara.textContent = `${heroBio}`
    heroDiv.append(heroBioPara) 
  
    input.value = '' // this resets user input once search button is clicked
  
  })
})

