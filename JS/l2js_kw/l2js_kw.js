// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let arr1 = ['a', 'b', 'c'];
// let arr2 = [1, 2, 3];






// for(let i=0; i<3; i++){

// arr1[i+3]=arr2[i]

// console.log(arr1)

// }













// let arr1 = [1, 2, 3];
// let arr3 = [];



// for (let i = 2; i >= 0; i = i - 1) {

//     arr3 = arr1[i];


//     console.log(arr3)
// }









// let mas1=[1,2,3];




// for (let i=4;i<7;i++){

//     mas1.push(i)

//  console.log(mas1)   
// }








// let mas1 = [1, 2, 3];



// for (let i = 6; i > 3; i = i - 1) {

//     mas1.unshift(i)

//     console.log(mas1)
// }





// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].


// let arr1=[1,2,3,4,5];


// for(let i=0; i<3; i++){

// arr1.shift(i);

// console.log(arr1);

// }






// let array1=[1,2,3,4,5];


// for(let i=0; i<3; i++){

// array1.pop();

// }

// console.log(array1);







// let ar1 = [1, 2, 3, 4, 5];
// let ar2 = ['a', 'b', 'c'];



// for (i = 3; i < 6; i++) {

//     ar1[i] =ar2[i-3]


// }

// console.log(ar1)




// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.


// let a1=[1,24,16,8,9,11,3,7,4,5];

// for(i=0; i<a1.length; i++ ){

// if ((a1[i]%2)==0){


//     console.log(a1[i])
// // console.log(i)

// }

// }








// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


// let a1=[1,24,16,8,9,11,3,7,4,5];
// let a2=[];

// for (i=0; i<a1.length;i++){
//     a2[i]=a1[i];
// console.log(a2)

// }






// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


// let l1 = ['a', 'b', 'c','d','e','f','g','h'];



// //
// let str=''
// for (let item of l1){

// str+=item                                           //str=str+item альтернатива запису//

// }
// console.log(str)







// let l1 = ['a', 'b', 'c','d','e','f','g','h'];
// let str='';

// let i = 0;
// while (i < 1){

//     for (item of l1){

        
//         str=str+item}
//     i++;
//     console.log(str)
// }









// let l1 = ['a', 'b', 'c'];
// let l2=''

// for (let item of l1){

//   l2=l2+item



// }
// console.log(l2) 




// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

// 
// 
// 

// 



// let ar1=[2,17,13,6,22,31,45,66,100,-18];


// let i=0;

// while (i<ar1.length){

// console.log(ar1[i])
// i++

// }




// 2. перебрати його циклом for

// let ar1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];


// for (i = 0;i<ar1.length; i++) {

//     console.log(ar1[i])

// }







// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let ar1=[2,17,13,6,22,31,45,66,100,-18];


// let i=0;

// while (i<ar1.length){
// if ((i%2)!==0)
// {console.log(ar1[i])}
// i++

// }






// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let ar1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (i = 0; i < ar1.length; i++) {

//    if ((i % 2) !== 0)

//     {
//         console.log(ar1[i])
//     }

// }








// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let ar1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0;
// while (i < ar1.length) {
//     if ((ar1[i] % 2) == 0) {

//         console.log(ar1[i])

//     }
//     i++


// }










// 6. перебрати циклом for та вивести  числа тільки парні  значення


// let ar1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (i = 0; i < ar1.length; i++) {

// if ((ar1[i]%2)==0){
// console.log(ar1[i])

// }

// }








// 7. замінити кожне число кратне 3 на слово "okten"


// let ar1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (i = 0; i < ar1.length; i++) {

//     if ((ar1[i] % 3) == 0) {
//         ar1[i] = 'OKTEN';
//         console.log(ar1)
//     }

// }



// // 8. вивести масив в зворотньому порядку.

// let ar1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let ar2 = [];
// for (i = 9; i >-1; i = i - 1) {
// ar2.push(ar1[i])
    
//     console.log(ar2)
// }







// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// let ar1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (i = 10; i > 0; i=i-1) {

//     if ((ar1[i] % 3) == 0) {
//         ar1[i] = 'OKTEN';
//         console.log(ar1)
//     }

// }





