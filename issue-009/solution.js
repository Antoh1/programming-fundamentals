function sumEven(a) {
	//variable to hold sum of the even numbers
	evenSum = a.reduce(function(sum, num){
		//checks for even number in the array
		if(num%2==0){
			sum+=num; //updates the sum of even numbers
		}
	return sum;	//return value by the reduce function
	},0);
    return evenSum; //return value by sumEven function
}