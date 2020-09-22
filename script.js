// init domain, key and baseurl

const domain = 'https://superheroapi.com/api/'
const apiKey = '1791582447662011'
const baseUrl = `${domain}${apiKey}/search/`

// selecting input and button
const input = document.querySelector('#search-hero-input')
const button = document.querySelector('#search-hero-button')


// add event listener
button.addEventListener('click', async (e) => {
  e.preventDefault()
  let userInput = input.value
  const res = await axios.get(`${baseUrl}${userInput}`)
  const response = res.data.results
  console.log(response)

  // looping through array
  response.forEach((hero) => {
    
    // console.log(hero.image.url)
    const heroesDiv = document.querySelector('.heroes') // div for heroes
    const heroDiv = document.createElement('div') // creating div element for each hero
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
    console.log(heroStats)
    const heroPara = document.createElement('p')
    
    heroPara.innerText = 'Publisher: ' + heroBio.publisher + '\n Aliases: ' + heroBio.aliases + '\n Gender: ' + heroAppearance.gender  + "\n Stats: " + "\n Combat: " + heroStats.combat + "\n Durability: " + heroStats.durability  + "\n Power: " + heroStats.power + "\n Speed: " + heroStats.speed + "\n Strength: " + heroStats.strength 
    heroDiv.append(heroPara) 

    input.value = '' // this resets user input once search button is clicked
  
  })
})


// const heroBio = hero.biography
    
// heroBio.forEach((bio) => {
  
//   const appearance = bio.appearance
//   const heroAppearancePara = document.createElement('p')

// heroAppearancePara.textContent = `${appearance}`
// heroDiv.append(heroAppearancePara) ›

  
// }) 