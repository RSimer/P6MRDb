var inputEl = $('#type');
var buttonEl = $('.button');
var creatingSuggestions = $('#suggestions')

function getUserResult() {
    var search = inputEl.val();
    console.log(search);
	fetchMovies(search);
    // movieReview(search);
		// window.location.href = 'database.html';
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
	  $.ajax(settings).done(function (response) {
		  console.log(response);
        movieSearchList (response.results) 
	});
 }

  function movieSearchList (movies) {
    creatingSuggestions.empty(); 
      for (var i=0; i < movies.length; i++) {

      if (movies[i].titleType === 'movie') {
      
        creatingSuggestions.append(`<div class="column is-centered is-primary"><button id="movieItem" data-movie-name = "${movies[i].title}">${movies[i].title}</button></div>`)
        
      }
  
  }
        // var movieSelection = JSON.parse(localStorage.getItem(“data-movie-name”));
        // localStorage.getItem(data-movie-name)
//   console.log(movies)

}

// if title === movie then display movie choices by appending box with an <a></a> tag
// then when box clicked will send message to new york time with a title === title.type and search the api 






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
      console.log(review);
      console.log(review[i]);
    if (review[i].display_title) {
      
    creatingSuggestions.append(`<div><button data-movie-name = "${review[i].title}">${review[i].display_title}</button></div>`)
      
    //   console.log(movieReviewResult)

      }
  

  }

}

// with review page show the 'mpaa rating', title name, reviewer name, summary short, and link to the article 

creatingSuggestions.on('click', '[data-movie-name]', function(event){
  console.log(event.target.dataset.movieName)
  var movieItem = $("#movieItem").on('click', localStorage.setItem('data-movie-name',event.target.dataset.movieName));
  movieReview();
})



buttonEl.on('click',getUserResult);
inputEl.on('keypress', function (e) {
    if (e.key === 'Enter') {
      getUserResult();
    }
});

// put in input, add event listener click, get input value, build input value into query string, 
