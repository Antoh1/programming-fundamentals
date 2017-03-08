function evenOdd(a) {
	
	//reduce to get the sum of even numbers
	evenSum = a.reduce(function(sumEven, num){
		if(num%2==0){
			sumEven+=num;
		}
		return sumEven;
	},0);

	//reduce to get the sum of odd numbers
	oddSum = a.reduce(function(sumOdd, num){
		if(num%2!=0){
			sumOdd+=num;
		}
		return sumOdd;
	},0);
    
    return evenSum - oddSum; 
}