// recieve input from a selection on a html page
// Parse input into form to then be understtod by musixmatch api
// send data to first api
// recieve back new data from api
// parse data into understandable data
// print udnerstandable data onto html
// user will make a selection from provided data
// new data will be passed into a form to be understood by spotify api
// send data to spotify api
// recieve back playlist data from data api
// playlist data into understandable data
// print understandable data onto html


var inputEl = $('#type');
var buttonEl = $('.button');


function clickVal() {
    search = inputEl.val();
	console.log(encodeURIComponent(search));
	search.toString();
	searchVal(search);
		window.location.href = 'database.html';
}

function searchVal(search) {
    

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
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
 }


 


buttonEl.on('click',searchVal);
// inputEl.on('keypress', function (e) {
//     if (e.key === 'Enter') {
//       searchVal();
//     }
// });

// put in input, add event listener click, get input value, build input value into query string, 