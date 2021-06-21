// 1) створити функцію яка приймає масив та виводить його



// let array1=[98,'okten',true,'blablacar',0.5,false,998];
// function arrwrite (_array1){

// console.log(_array1)

// }

// // arrwrite(array1);







// // 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.



// let array2 = []


// function RandomNum(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;

// }

// for (i = 0; i < 20; i++) {
//     RandomNum(0, 100)
//     array2[i] = RandomNum(0, 100)

// }

// arrwrite(array2)








// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)




// function minNum(a,b,c) {

//     let min = a

//     for (i of minNum.arguments) {
//         if (i < min) {
//             min = i
//         }

//     }

//     console.log(min)
// }

// minNum(9,1,77)






// // 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)



// function maxNum(a, b, c) {

//     let max = a

//     for (i of maxNum.arguments) {
//         if (i > max) {
//             max = i
//         }
//     }
//     console.log(max)
// }

// maxNum(1, 108, 99)







// 5) створити функцію яка повертає найбільше число з масиву



// let numArr = [98, 12, 7, 15, 27, 22];


// function maxNum(array) {

//     let max = array[0]


//     for (i of array) {
//         if (i > max) {
//             max = i
//         }
//     }

//     return max;

// }


// maxNum(numArr)
// console.log(maxNum(numArr))







// 6) створити функцію яка повертає найменьше число з масиву



// let array1=[123,98,77,258,1,88,2]

// function minNum(array){
//     let min=array[0];
//     for(i of array ){
//         if (min>i){
//             min=i
//         }
//     }
//     return min
// }


// minNum(array1)
// console.log(minNum(array1))








// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.



// let array1 = [981, 46, 85, 128, 2, 3697, 5];



// function sumArray (array){
//     let sum=0;
//     for (i of array){


//     sum+=i
// }
// return sum
// }

// sumArray(array1);
// console.log(sumArray(array1))








// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.





// let array1 = [12, 14, 456, 8, 321, 1, 7]

// function meanNum(array) {

//     let mean = 0;
//     for (i of array) {

//         mean += i

//     }
//     return mean / array.length

// }

// meanNum(array1);
// console.log(meanNum(array1))








// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]




// let arrObj=[{name:'Olya', age:32, phone:'Samsung'},{car:'Toyota',model:'Corola'}];

// function arrKeys(array){
//     let arrKeys=[]

// for (let obj of array){

// for(let key in obj){ 

//     arrKeys.push(key)

// }

// }
// return arrKeys
// }


// console.log(arrKeys(arrObj))
// arrKeys(arrObj)








// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]






// let arrObj=[{name:'Olya', age:32, phone:'Samsung'},{car:'Toyota',model:'Corola'}];

// function arrValues(array){

// let arrValues=[]


// for (let obj of array){

//     for (let values in obj){


//         arrValues.push(obj[values])

//     }


// }

// return arrValues
// }


// arrValues(arrObj)
// console.log(arrValues(arrObj))












// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]





// let arr1 = [25, 36, 48, 12, 369, 45, 74];
// let arr2 = [741, 7, 852, 78, 96, 3, 258];

// function arrSum(array1, array2) {

//     let arrSum = [];

//     for (i = 0; i < array1.length; i++) {
    
//             sum = array1[i] + array2[i]


//             arrSum.push(sum)
        
//     }

//     console.log(arrSum)
// }

// arrSum(arr1, arr2)