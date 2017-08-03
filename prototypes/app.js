var farm = document.querySelector('.farm');
var FarmAnimals = [];

//FarmAnimal prototype that all other objects extend
function FarmAnimal(name, image, talk, diet){
  //name and image instance properties
	this.name = name;
	this.image = image;
  //talk instance method
	this.speak = function() {
    	alert(this.name + ' goes: ' + talk);
  	}
  	this.diet = diet;
  	this.yum = function(){
	    alert(this.name + ' likes to eat ' + diet);
	}

}

//subclass
	// call the FarmAnimals constructor
	//any other subclass properties (limbs, diet, fur)
//At least two animals must have subclasses
function Chicken(name) {
  FarmAnimal.call(this, name, 'https://s-media-cache-ak0.pinimg.com/736x/4a/8d/48/4a8d4812374f3be91167929e030b0542--chicken-humor-a-chicken.jpg', 'cluck', 'bugs')
};

function Donkey(name) {
  FarmAnimal.call(this, name, 'http://www.calvarybirmingham.com/wp-content/uploads/2016/12/laughing_donkey.jpg', 'hee-haw', 'carrots');
};

function Llama(name) {
  FarmAnimal.call(this, name, 'http://news.blr.com/app/uploads/sites/3/2016/10/Llama-1.jpg', 'hummm', 'fingers');
};

//instantiate object 1
Chicken.prototype = Object.create(FarmAnimal.prototype)

//instantiate object 2
Donkey.prototype = Object.create(FarmAnimal.prototype)

Llama.prototype = Object.create(FarmAnimal.prototype)

var myChicken = new Chicken('Cher');
var myDonkey = new Donkey('Sonny');
var myLlama = new Llama('Elvis');

FarmAnimals.push(myChicken);
FarmAnimals.push(myDonkey);
FarmAnimals.push(myLlama);


FarmAnimals.forEach(function(animal) {
  var animalElement = document.createElement('div')
  animalElement.style.backgroundImage = 'url(' + animal.image + ')'
  var top = Math.floor(Math.random() * 50);
  animalElement.style.top = top + '%';
  var right = Math.floor(Math.random() * 90)
  animalElement.style.right = right + '%';
  animalElement.classList.add('animal')
  animalElement.onclick = function() {
    animal.speak();
    animal.yum();
  }
  farm.appendChild(animalElement)
})