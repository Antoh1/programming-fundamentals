function selectSum(inputArray) {
	
	//iterate through the array for every element
	for(var i=0, sum=0; i<inputArray.length; i++){

		//Checks for integer elements in the array to add to the sum
		if(typeof inputArray[i]=== "number"){
			
			sum+=inputArray[i]; //updates the sum
		}
	}
	return sum;
}