function grade(a) {
	//checks for grade A
	if(a>=80 && a<=100){
		return "A";
	}
	//checks for grade B
	else if(a>=60 && a<80){
		return "B";
	}
	//checks for grade C
	else if(a>=50 && a<60){
		return "C";
	}
	//checks for grade D
	else if(a>=40 && a<50){
		return "D";
	}
	//checks for grade E
	else if(a>=30 && a<40){
		return "E";
	}
	//checks for grade F
	else if(a>=0 && a<=30){
		return "F";
	}
}