
var inputEl = $('#type');
var buttonEl = $('.button');


function getUserResult() {
    var search = inputEl.val();
    console.log(search);
	fetchMovies(search);
    movieReview(search);
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
        
	});
 }
 function movieReview(search) {
     
 
 var settings = {
    "url": `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${search}&api-key=LcupeZ53qX2r7P1WQ59dwA0CsjJPbbtp`,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Accept": "application/json"
    },
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
 }
 


buttonEl.on('click',getUserResult);
inputEl.on('keypress', function (e) {
    if (e.key === 'Enter') {
      getUserResult();
    }
});

// put in input, add event listener click, get input value, build input value into query string, 