var inputEl = $('#type');
var buttonEl = $('.button');
var creatingSuggestions = $('#suggestions')
var searchArea = $('#history')
console.log(searchArea);


function getUserResult() {
    var search = inputEl.val();
    console.log(search);
	fetchMovies(search);
}
function getPrevResult() {
  var 
}

function fetchMovies(search) {
    

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://imdb8.p.rapidapi.com/title/find?q=${search}`,
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "a9c67fd68amshcbae8866a9e3ac7p1f8029jsn2f3a9e8c0295",
			"x-rapidapi-host": "imdb8.p.rapidapi.com"
		}
	};
	console.log(settings);
	  $.ajax(settings).then(function (response) {
		  console.log(response);
        movieSearchList (response.results) 
	});
 }

  function movieSearchList (movies) {
    creatingSuggestions.empty(); 
      for (var i=0; i < movies.length; i++) {

      if (movies[i].titleType === 'movie') {
      
        creatingSuggestions.append(`<div class="column is-centered is-primary">
        <button class = "button is-size-5 is-rounded has-background-link has-text-white-bis" id="movieItem" data-movie-name = "${movies[i].title}">${movies[i].title}</button>
        </div>`)
        
      }
  
  }


}

// if title === movie then display movie choices by appending box with an <a></a> tag
// then when box clicked will send message to new york time with a title === title.type and search the api 





// the nyt api call function 
 function movieReview() {
     
    var movieTitle = localStorage.getItem('data-movie-name');
    console.log(movieTitle,'functionCall');
 
 var settings = {
    "url": `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieTitle}&api-key=LcupeZ53qX2r7P1WQ59dwA0CsjJPbbtp`,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Accept": "application/json"
    },
  };
  $.ajax(settings).done(function (response) {
    console.log(response);

    movieReviewResult (response.results) 

  });
 }

 function movieReviewResult (review) {
  creatingSuggestions.empty(); 
  for (var i=0; i < review.length; i++) {

    if (review[i].display_title) {
      
    creatingSuggestions.append(`<div class = "card">
    <h2>${review[i].headline}</h2>
    <h4 class = "is-size-6">Reviewed by: ${review[i].byline}</h4>
    <h3 class = "pt-2 is-size-5">${review[i].summary_short}</h3>
    <a href="${review[i].link.url}">${review[i].link.suggested_link_text}</a>


    </div>`)
      }
  

  }

}

function searchHistory() {
  var callBack = localStorage.getItem('data-movie-name');
  console.log(callBack)

  if (callBack){
    searchArea.append(`
    <button class = "button" id = "required" >
    ${callBack}
    </button>
    `)

  }

}

  searchHistory();


// click events that triggers the local save and nyt funciton
creatingSuggestions.on('click', '[data-movie-name]', function(event){
  console.log(event.target.dataset.movieName)
  var movieItem = $("#movieItem").on('click', localStorage.setItem('data-movie-name',event.target.dataset.movieName));
  movieReview();
})


// entering the input to start the IMDb api jquery functions
buttonEl.on('click',getUserResult);
inputEl.on('keypress', function (e) {
    if (e.key === 'Enter') {
      getUserResult();
    }
});

$('#required').on('click',getUserResult);
