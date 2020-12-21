$(document).ready(function () {
  const domain =
    "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/";

  const apiKey = "1791582447662011";
  const baseUrl = `${domain}${apiKey}/search/`;

  const hamburger = $("#hamburger");
  const tabsUl = $("#tabs-ul");

  hamburger.on("click", () => {
    tabsUl.toggleClass("show");
  });

  const omDBdomain = "https://www.omdbapi.com/";
  const api_key = "591fa8f4";
  const omDBurl = `${omDBdomain}?apikey=${api_key}&`;

  const input = $("#search-hero-input");
  const button = $("#search-hero-button");

  button.click(async (e) => {
    e.preventDefault();
    let userInput = input.val();
    const res = await axios.get(`${baseUrl}${userInput}`);
    const response = res.data.results;
    const movieRes = await axios.get(`${omDBurl}s=${userInput}`);
    res.data.response === "error" ? null : renderList(movieRes.data.Search);
    removeHero();
    const heroesDiv = $(".heroes");
    let heroData = $(`<h3 class="hero-data">Hero Data:</h3>`);

    heroesDiv.append(heroData);

    if (res.data.response === "error") {
      heroData.html("NO HERO FOUND!");
      alert("No hero found, try a different name!");
    }

    response.forEach((hero) => {
      const heroBio = hero.biography;
      const heroAppearance = hero.appearance;
      const heroStats = hero.powerstats;
      const heroWork = hero.work;

      const heroPara = `Publisher:  
       ${heroBio.publisher} <br />
      Gender: ${heroAppearance.gender}  <br />
        Occupation: ${heroWork.occupation} <br />
        Stats:
        Combat: ${heroStats.combat} <br />
       Durability: ${heroStats.durability} <br />
        Power: ${heroStats.power} <br />
        Speed: ${heroStats.speed} <br />
        Strength: ${heroStats.strength}<br/>
        Aliases: ${heroBio.aliases}`;
      console.log(heroPara);
      const heroDiv = $(`<div class='hero-div'>
      <h3>${hero.name}</h3>
      <img class="hero-img" src="${hero.image.url}" alt="${hero.name}"/>
      <p>${heroPara}</p>
</div>`);

      heroesDiv.append(heroDiv);
      input.val("");
    });
  });

  function removeHero() {
    $(".heroes").html("");
  }

  const movieDisplay = $(".movies");

  const renderList = (movies) => {
    let names1 = $("<h3></h3>");
    names1.attr("class", "names-movie");
    names1.html("Movie/Series:");
    movieDisplay.append(names1);
    movies.forEach((movie) => {
      const movieContainer = $("<div></div>");

      movieContainer.addClass("movie-container"); // give it a class and a class name

      const title = $("<h3></h3>"); // creating h3 for movie title
      title.html(movie.Title); // text is going to be what the api assigned as title
      movieContainer.append(title); // append the title to the movie container

      const year = $("<p></p>"); // create element of p and assign it to the variable
      year.html("Release Date: " + movie.Year); // text of year
      movieContainer.append(year); // append year data to container

      if (movie.Poster !== "N/A") {
        // gets rid of error message when movie image not found
        const image = $(`<img class="movie-img" src="${movie.Poster}"/>`); // create element img assign it to a variable
        movieContainer.append(image); //append image to the movie container
      }

      movieDisplay.append(movieContainer); // append the movie container to movie list
    });
  };

  button.click(async (e) => {
    // this event listener removes movies once a new search has been submitted
    e.preventDefault();
    removeMovie();
  });

  function removeMovie() {
    // this function removes movies once a new search has been submitted
    $(".movies").html("");
  }
});

// more comments in the develop branch
