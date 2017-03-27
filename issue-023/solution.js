
function Person(name, age) { //constructor function to instantiate person objects
	this.name = name;
	this.age = age;
	this.walked = 0;

}

Person.prototype.greet = function(p2){return "hello " + p2.name;} //function greet inherited by Person object

Person.prototype.walk = function(d){this.walked = this.walked + d; //function walk inherited by Person object
                                    return this.walked;
                                   }