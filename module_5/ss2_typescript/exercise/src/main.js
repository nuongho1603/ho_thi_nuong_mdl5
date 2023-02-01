var sum = 0;
var number1 = 0;
var number2 = 1;
var array = [1, 5, 6, 13, 9, 12, 8, 0, 5, 1];
var fibonaci1 = [];
var fibonaci2 = [];
var fibonaci = 0;
for (var i = 0; i < 20; i++) {
    fibonaci = number1 + number2;
    fibonaci1.push(fibonaci);
    number1 = number2;
    number2 = fibonaci;
}
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < fibonaci1.length; j++) {
        if (array[i] == fibonaci1[j]) {
            fibonaci2.push(array[i]);
            sum = sum + array[i];
        }
    }
}
console.log("Mảng tập hợp các fibon= ", fibonaci2);
console.log("Tổng của các số fibon có trong mảng: ", sum);
// for (let i = 0; i <fibonaci2.length ; i++) {
//     sum= sum + fibonaci2[i];
// }
