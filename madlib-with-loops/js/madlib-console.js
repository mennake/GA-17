
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Tinder', 'Asana'];

//Create
var startupIdea;

function createStartUp(){

	var random1 = Math.floor((Math.random() * startupX.length));
	var random2 = Math.floor((Math.random() * startupY.length));

	//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
	startupIdea = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
	document.getElementById("xForY").innerHTML = startupIdea;

}

//Save
//Add functionality to make the "Favorite Startup" button work--when the "Favorite Startup" button is clicked, it should save that madlib saying to an array.

//Empty array
var myFavorite = [];

function saveStartUp(){

	myFavorite.push(startupIdea);
	console.log(myFavorite);

}


//Print
//Add functionality to make the "Print favorites" button work--when the "Print favorites" button is clicked, 
//it should display all of the favorited startups in the array underneath the h2 with an ID of favorites.

function printStartUp(){


	document.getElementById("favorites").innerHTML = 'These are my favorites: ';
	for(x = 0; x < myFavorite.length; x++) {

		//list these out under the H2
		document.getElementById("faves").innerHTML += "<p>" + myFavorite[x] + "</p>";
	}

}

