let sum: number = 0;
let number1: number = 0;
let number2: number = 1;
let array = [1, 5, 6, 13, 9, 12, 8, 0, 5, 1];
let fibonaci1:number[]=[];
let fibonaci2:number[]=[];
let fibonaci: number=0;
for (let i = 0; i < 20; i++) {
    fibonaci = number1 + number2;
    fibonaci1.push(fibonaci);
    number1 = number2;
    number2 = fibonaci;
}
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < fibonaci1.length; j++) {
        if (array[i] == fibonaci1[j]) {
            fibonaci2.push(array[i]);
            sum = sum + array[i];
        }
    }

}
console.log("Mảng tập hợp các fibon= ",fibonaci2);
console.log("Tổng của các số fibon có trong mảng: ",sum);
 // Khi đọc tới dòng này thì note- k biet làm theo cách đệ quy
// Có thắc mắc gì vui lòng liên hệ Nương HT c08 .
