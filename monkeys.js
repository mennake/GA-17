/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/


var Monkey = function(name, species) {
    this.name = name;
	this.species = species;
	this.foodsEaten = []; //array
    this.eatSomething = function(thingAsString){
		this.foodsEaten.push(thingAsString);
    };

    this.introduce = function(){
		console.log('Hello my name is ' + this.name + ' and I am a ' + this.species + ' and I have eaten ' + this.foodsEaten);
    };
};

var monkey1 = new Monkey("Sam", "pygmy");
monkey1.eatSomething("bananas");
monkey1.eatSomething("bugs");	
monkey1.introduce();

var monkey2 = new Monkey("Janet", "baboon");
monkey2.eatSomething("nuts");	
monkey2.introduce();

var monkey3 = new Monkey("George", "capuchin");
monkey3.eatSomething("berries");	
monkey3.introduce();


var monkeys = [monkey1, monkey2, monkey3];


for(i=0; i<monkeys.length; i++)
{
	console.log(monkeys[i].name);
	console.log(monkeys[i]["name"]);
}