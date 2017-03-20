function sum(...param) {
	
	//loop through the values casted into a list of numbers 'param'
	for(var i=0, sum=0; i<param.length; i++){
		//update the sum of values
		sum+=param[i]
	}
	return sum;
}