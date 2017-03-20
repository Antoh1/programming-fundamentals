
function hello(person) {

	//checks if undefined then assigns 'world' to the parameter
	person = (typeof person !== 'undefined') ? person:"world";
	
	return "Hello " + person + "!";
 }