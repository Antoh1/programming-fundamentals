
function oldAndYoung(students) {
    var youngest = 2017; //born year 2017 is the youngest
     var oldest = 0; //born at year 0 is the oldest ever
     var age; //variable to hold various years
     var result = {oldest: '', youngest: ''}; //output holder 
     students.forEach(function(obj) {
         age = obj['yearOfBirth'];
         if (age < youngest) {
         	//check for the youngest and update the output
             youngest = obj['yearOfBirth'];
             result['oldest'] = obj['name'];
         }
         if (age > oldest) {
         	//check for the oldest and update the output
             oldest = obj['yearOfBirth'];
             result['youngest'] = obj['name'];
         }
     });
     return result;   
 } 