# Project Overview

## Hero Library

## Project Description

Hero Library is an website where the user will be able to search and find Super-Hero data such as stats and images. 
once the user enters his input the image of searched hero will spawn, with additional description and data underneath.

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

Desktop : ![alt text](https://i.imgur.com/ttjtQTo.png)
Mobile : ![alt text](https://i.imgur.com/NUe0Ash.png)

#### MVP 

- Built with HTML, CSS, and JavaScript.
- Styled using Flexbox or Grid
- Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
- User should be able to search and receive the name, image, and some info about searched super-hero.
- Add media-query for mobile phones.


#### PostMVP  

- Create a random hero feature, a button will make a random hero with the additional data appear.
- Add a movie feature, a movie related to the searched hero will appear next to the original search data.

## Project Schedule 


|  Day | Deliverable | Status
|---|---| ---|
|Sept 19-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Project Approval | Complete
|Sept 21-22| Core Application Structure (HTML, CSS, JS) | Incomplete
|Sept 23| MVP | Incomplete
|Sept 24| Post MVP + Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

- Top Priority : Check to see if the API even works 
- HTML (initialize everything)
- Javascript (making sure user can search and receive data)  
- Stylizing the website (CSS)
- POSTMVP

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Test if API works | 1st | 1hr | N/A | 30min |
| Creating base data of HTML, CSS and JS | 2nd | 3hr | N/A | 1hr |
| JS and API functionality | 3rd | 7hr | N/A | N/A | N/A |
| Website Appearance (CSS) | 4th | 6hr | N/A | N/A |
| Debugging and Functionality | 5th | 6hr | N/A | N/A |
| Total | 22hr | N/A | N/A | N/A  |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
