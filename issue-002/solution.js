function strictCheck(a, b) {
    if(a===b){
    	return 1; //checks for strict equality
    }
    else if(a==b){
    	return true; //checks for loose equality
    }
    else if(a!=b){
    	return false; //checks for non-equal
    }
}