function objectValues(a) {
     
     var result = []; //output holder
     var sortedKeys = Object.keys(a).sort(); //sorting the object keys in accending order
     sortedKeys.forEach(function(key) {
     	//updating the output holder
         result.push(a[key]);
     });
     return result;
 } 