var  sumx = sumXx =  sumy = sumYy = XY = 0;

var x = [] ;
var y = [] ;

n = Number(prompt("n = "));

for(i=0; i < n; i++ ){
    x[i] = Number(prompt("x[" + i + "] ="));
    y[i] = Number(prompt("y[" + i + "] ="));
    sumx += x[i];
    sumXx += Math.pow(x[i],2);
 
    sumy += y[i];
    sumYy += Math.pow(y[i],2);
    XY += x[i] * y[i];
    

}

// for(i=0; i < n; i++ ){
//     y[i] = Number(prompt("y[" + i + "] ="));
//     sumy += y[i];
//     sumYy += Math.pow(y[i],2);
//     XY += x[i] * y[i];
// }


var numerator = n * XY - sumx * sumy;

var denominator = Math.sqrt((n*sumXx - Math.pow(sumx,2))*(n*sumYy - Math.pow(sumy,2)));

var r = numerator / denominator ;

console.log("Sum x:", sumx);
console.log("Sum x^2:", sumXx);
console.log("Sum y:", sumy);
console.log("Sum y^2:", sumYy);
console.log("Sum x*y:", XY);
console.log("Correlation (r):", r);



