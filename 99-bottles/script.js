//99 Bottles of Beer
/**
- Remember the 99 Bottles of Beer assignment? For this assignment, you'll be 
creating a website that programatically displays the lyrics to that song.
- You'll need to create both an .html file and a .js file
- In your HTML file, you'll want to have an unordered list (<ul>) that contains 
all of your lyrics
- Each line of the song should appear inside of a list item (<li>) within that 
unordered list
- Your JavaScript file should programatically append each line of the song to 
the page--no hard-coding lyrics in HTML!
**/

$(document).ready(function() {

	var beers = "";
	$("#more-beer").click(function(e) {
		for(var i = 99; i >= 1; i--){
			if (i == 1) {
	        	beers = 'bottle';
		    } else {
		        beers = 'bottles';
		    }
			$("#list").append("<li>" + i + " " + beers + " of beer on the wall, " + i + " " + beers + " of beer. Take one down, pass it around. " + (i-1) + " bottles of beer on the wall." + "</li>");
		};

	});
});

