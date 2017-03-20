function product(a, b) {
    if(typeof a != "number" || typeof b != "number"){
    	throw new Error("NaN Expection"); //checks for non number parameters and throw error
    }
     else{
     	result = a*b;   //This block calculates the product of the parameters
     	return result;
     }
}