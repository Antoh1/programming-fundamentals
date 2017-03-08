function dataTypeCheck(a) {

    //checks for an ordinary string arguments
    if ( typeof a === "string" && isNaN(a)===true) {
     return "hello" + " "+ a ;
    }    

    //checks for undefined argument
    else if(typeof a === "undefined"){
        return 0;
    }
    //checks for non number argument
    else if(isNaN(a)){
        return 0;
    }
    
    //checks for an integer argument
    else if(typeof a === "number"){
    	return a/2;
    }
    //checks for a string casted to an integer arguments
    else if(typeof Number(a) === "number"){
    	return Number(a);
    } 

    //checks for null arguments
    else if(typeof a === "null"){
    	return 0;
    }

}
