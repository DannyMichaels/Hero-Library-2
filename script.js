// Handler for .ready() called.
$(document).ready(function () {
  const domain =
    "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/";
  // https://cors-anywhere.herokuapp.com/
  const apiKey = "1791582447662011";
  const baseUrl = `${domain}${apiKey}/search/`;

  const hamburger = $("#hamburger"); //selecting the hamburger and tabs-ul id with $ instead of ES6 query selector.
  const tabsUl = $("#tabs-ul"); //selecting the hamburger and tabs-ul id with $ instead of ES6 query selector.

  // .on is a jQuery method
  // https://api.jquery.com/on/#on-events-selector-data-handler
  hamburger.on("click", () => {
    // https://api.jquery.com/toggleclass/
    tabsUl.toggleClass("show");
  });

  const omDBdomain = "https://www.omdbapi.com/";
  const api_key = "591fa8f4";
  const omDBurl = `${omDBdomain}?apikey=${api_key}&`;

  const input = $("#search-hero-input");
  const button = $("#search-hero-button");

  // https://api.jquery.com/click/#click
  button.click(async (e) => {
    // this event listener listens to the submit button click.
    e.preventDefault(); // prevents page from reloading once search submitted
    //https://api.jquery.com/val/#val
    let userInput = input.val(); // takes user input
    const res = await axios.get(`${baseUrl}${userInput}`);
    const response = res.data.results;
    const movieRes = await axios.get(`${omDBurl}s=${userInput}`);

    // Shay and Misha helped me with this
    res.data.response === "error" ? null : renderList(movieRes.data.Search); // if no hero search results appear, do not return movie results.

    removeHero();

    const heroesDiv = $(".heroes");

    let heroData = $(`<h3 class="hero-data">Hero Data:</h3>`);
    // ES6 equivalent: document.getElementById('main-title').innerHTML = '<p class="hero-detail">some text</p>'
    // "<p class="hero-detail">some text</p>"

    heroesDiv.append(heroData);

    if (res.data.response === "error") {
      // if no search results found, give an alert message saying "no hero found"
      heroData.html("NO HERO FOUND!");
      alert("No hero found, try a different name!");
    }

    response.forEach((hero) => {
      // looping through array

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
    // This function removes heroes once a new search has been submitted
    $(".heroes").html("");
  }

  const movieDisplay = $(".movies"); // select the class .movies and assign it to movieDisplay

  const renderList = (movies) => {
    let names1 = $("<h3></h3>"); // assign h3 to variable names1

    //https://api.jquery.com/attr/
    names1.attr("class", "names-movie"); // give names1 h3 a class name

    // https://api.jquery.com/html/
    names1.html("Movie/Series:"); // give names1 text "Movie/Series:"

    // https://www.w3schools.com/jquery/jquery_dom_add.asp
    movieDisplay.append(names1); // append the h3 to the movie

    movies.forEach((movie) => {
      // looping through the array
      const movieContainer = $("<div></div>"); // create div element and assign it to a variable

      // https://api.jquery.com/addClass/#addClass-className
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
