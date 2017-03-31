
function mostFrequent(s) {
	//split the string to individual words, store in an array and sort them
	var str_list = s.toLowerCase().split(/[ (),!.";:-]+/).filter(Boolean).sort()

	//declare empty object to hold frequent_word and its count
	var result ={}, frequent_word = str_list[0], count = 1;

	//loop through to acertain the most frequent word
	for(var i=0; i<str_list.length; i++){
	
		var element = str_list[i];
	
		if(!result[element]){
			result[element]=1;
		}
	
		else{result[element]++;}

		if(result[element]>=count){
			frequent_word = element; //assign most frequent elemet to frequrnt_word variable 
			count = result[element]; //assign count the number of element appearance
		}
		
	}

return frequent_word;
}
