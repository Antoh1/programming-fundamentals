function superSum(inputArray) {

	//casts the array elements to string 
	var arrayString = String(inputArray)
	
	//loop through the string characters by indices
	for(var i=0, sum=0; i<arrayString.length; i++){
		//checks if string charactercan be casted to a number
		if(Number(arrayString.charAt(i))){
			sum+=Number(arrayString.charAt(i)); //update the sum of the digits making up the list numbers 
		}
	}
	return sum;
}