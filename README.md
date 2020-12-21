# Project Overview

## Hero Library

Website Link: https://dannymichaels.github.io/Hero-Library/

## Project Description

Hero Library is an HTML, CSS, and jQuery website where the user will be able to search and find Super-Hero data such as stats and images. 
Once the user enters his input the image of searched hero will spawn, with additional description and data underneath.

## API and Data Sample

I'll be using SuperHero API : https://superheroapi.com/

API Link : https://www.superheroapi.com/api.php/1791582447662011/search/[heronamehere]


JSON snippet :
```
{
    "response": "success",
    "id": "620",
    "name": "Spider-Man",
    "powerstats": {
        "intelligence": "90",
        "strength": "55",
        "speed": "67",
        "durability": "75",
        "power": "74",
        "combat": "85"
    },
    "biography": {
        "full-name": "Peter Parker",
        "alter-egos": "No alter egos found.",
        "aliases": [
            "Spiderman",
            "Bag-Man",
            "Black Marvel",
            "Captain Universe",
            "Dusk",
            "Green Hood",
            "Hornet",
            "Mad Dog 336",
            "Peter Palmer",
            "Prodigy",
            "Ricochet",
            "Scarlet Spider",
            "Spider-Boy",
            "Spider-Hulk",
            "Spider-Morphosis"
        ],
        "place-of-birth": "New York, New York",
        "first-appearance": "Amazing Fantasy #15",
        "publisher": "Marvel Comics",
        "alignment": "good"
    },
    "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
            "5'10",
            "178 cm"
        ],
        "weight": [
            "165 lb",
            "74 kg"
        ],
        "eye-color": "Hazel",
        "hair-color": "Brown"
    },
    "work": {
        "occupation": "Freelance photographer, teacher",
        "base": "New York, New York"
    },
    "connections": {
        "group-affiliation": "Member of the Avengers, formerly member of Outlaws, alternate Fantastic Four",
        "relatives": "Richard Parker (father, deceased), Mary Parker(mother, deceased), Benjamin Parker (uncle, deceased), May Parker (aunt), Mary Jane Watson-Parker (wife), May Parker (daughter, allegedly deceased)"
    },
    "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/133.jpg"
    }
}
```

## Wireframes

### Desktop : ![alt text](https://i.imgur.com/FtzKiGl.png)
### Mobile : ![alt text](https://i.imgur.com/zS5deNb.png)

#### MVP 

- Built with HTML, CSS, and JavaScript.
- Styled using Flexbox or Grid
- Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
- User should be able to search and receive the name, image, and some info about searched super-hero.
- Add media-query for mobile phones.


#### PostMVP  

- Add a movie feature, a movie related to the searched hero will appear next to the original search data.

## Project Schedule 


|  Day | Deliverable | Status
|---|---| ---|
|Sept 19-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Project Approval | Complete
|Sept 21-22| Core Application Structure (HTML, CSS, JS) | Complete
|Sept 23| MVP | Complete
|Sept 24| Post MVP | Complete
|Sept 25| Presentations | Complete

## Priority Matrix

- Top Priority : Check to see if the API even works 
- HTML (initialize everything)
- Javascript (making sure user can search and receive data)  
- Stylizing the website (CSS)
- POSTMVP

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Test if API works | 1st | 1hr | 1hr | 1hr |
| Creating base data of HTML, CSS and JS | 2nd | 3hr | 1hr| 1hr |
| JS and API functionality | 3rd | 7hr | 3hr | 3hr |
| Website Appearance (CSS) | 4th | 6hr | 5hr| 7hr |
| POSTMVP | 5th | 6hr | 7hr | 7hr |
| Total | N/A | N/A | N/A | 19hr |

## Code Snippet

Happy with this function, it gets rid of error message when movie image not found.

```

  if (movie.Poster !== "N/A") {
   // gets rid of error message when movie image not found
   const image = $(`<img class="movie-img" src="${movie.Poster}"/>`); // create element img assign it to a variable
   movieContainer.append(image); //append image to the movie container
   }
```

## Change Log

- September 22th, 2020 : MVP feature complete
- September 23th, 2020 : POSTMVP feature complete
- September 24th, 2020 : some CSS flaws fixed.
- October 19th, 2020: Added hamburger menu for phones.
- October 22nd, 2020: contact me page now has a proper form that will receive responses, (using google forms).
- November 5th, 2020: Hero and Movie poster hover now has a smoother animation on hover state.
- Dec 21st, 2020: Converted code to jQuery.
