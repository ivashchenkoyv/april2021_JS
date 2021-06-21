// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let mass=[5,47,8,914,123.12,'task','city','Olena','June','junior',true,false,2021,'Adele',undefined ];

// console.log(mass)



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// let mass1=[];
// mass1[1]='vasya';
// mass1[5]=true;
// mass1[0]=45;
// mass1[3]='free';
// mass1[11]=3.1415;
// mass1[999]='login';

// console.log(mass1)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині



// let anytext = ['lorm1', 'lorm2', 'lorm3', 'lorm4', 'lorm5', 'lorm6', 'lorm7', 'lorm8', 'lorm9', 'lorm10', ];


// for (let i = 0; i < 10; i++) {

//     document.write(`<div>${anytext[i]} </div>`) //без індексу//

//     document.write(`<div>${[i]+'_'+anytext[i]} </div>`) //з індексом//
// }












// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.//




// let blockH1 = ['anytext1', 'anytext2', 'anytext3', 'anytext4', 'anytext5', 'anytext6', 'anytext7', 'anytext8', 'anytext9', 'anytext10', 'anytext11', 'anytext12', 'anytext13', 'anytext14', 'anytext15', 'anytext16', 'anytext17', 'anytext18', 'anytext19', 'anytext20'];

// let i = 0;


// while (i < 20) {

//     // document.write(`<h1>${blockH1[i]}</h1>`); //printout without index//


//     document.write(`<h1>${[i]+'_'+ blockH1[i]}</h1>`); //printout with index//

//     i++
// }








// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи




// let numMas = [3.14, 991, 23, 28226, 7, 8, 2.792, 0.523, 56, 147];

// for (let i = 0; i < numMas.length; i++) {

//     console.log(numMas[i])
// }







// let stringMas=['string1', 'Anytext', 'Sting', 'Iron Maiden', 'AC/DC', 'Maroon5', 'Judas Priest', 'Metalica', 'One Republic', 'Imagine Dragon']

// for (i=0; i<10; i++){

//     console.log(stringMas[i]);

// }







// let anyMas = [120, 'road', false, 'temperature', 456.123, 991, true, undefined,'alt', 'bar' ]

// for(i=0;i<10;i++)
// {
// console.log(anyMas[i]);

// }




// let mixMas = ['any', 123, 'name', true, 47, false, 'pressure', undefined, 999, 1]




// for (i = 0; i < mixMas.length; i++) {

//     if (typeof (mixMas[i]) === 'boolean') {

//         console.log(mixMas[i])
//             
//         }

//     }






// for (i = 0; i < mixMas.length; i++) {

//     if (typeof mixMas[i] === 'number')

//     {
//         console.log(mixMas[i])
//     }

// }





// for (i = 0; i < mixMas.length; i++) {

// if (typeof mixMas[i]==='string'){

//     console.log(mixMas[i])
// }


// }




// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write



// let emptyArray = [];
// emptyArray[1] = 45;
// emptyArray[2] = '45';
// emptyArray[3] = true;
// emptyArray[4] = false;
// emptyArray[5] = 0.0009;
// emptyArray[6] = 'element';
// emptyArray[7] = 'tomorrow';
// emptyArray[8] = undefined;
// emptyArray[9] = 100000.00001;
// emptyArray[10] = 123;


// for (i = 0; i < emptyArray.length; i++) {

//     console.log(emptyArray[i])
// }








// for (i = 0; i < 10; i++) {

//     console.log([i+1])
//     document.write([i+1])
// }







// for (i = 0; i < 100; i++) {

//     console.log([i + 1]);
//     document.write([i + 1])
// }







// for (i=0; i<200; i=i+2){

// console.log([i/2+1]);
// document.write([i/2+1]);


// }







// for (i = 1; i < 101; i++) {

// if(i%2==0){

//     console.log([i]);
//     document.write([i])

// }

// }







// for (i = 1; i < 101; i++) {

//     if (i % 2 !== 0) {

//         console.log([i]);
//         document.write([i])
//     }

// }









// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },




// let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
    
//     let citiesWithId = [
//         {user_id: 3, country: 'USA', city: 'Portland'},
//         {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//         {user_id: 2, country: 'Poland', city: 'Krakow'},
//         {user_id: 4, country: 'USA', city: 'Miami'}
//     ];

//     let usersWithCities = [];







// let i=0
// for(let user of usersWithId) {
//     for(let adress of citiesWithId) {

//     if (user.id===adress.user_id){ 
//                usersWithCities[i]=Object.assign(user,adress); //нажаль, не можу синтаксично додати перемінну address та зробити масив в масиві, буду вдячний за допомогу//
       
//         i++
//     }
// }

//     console.log(usersWithCities)
    
// }









// const usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// const citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// for (let user of usersWithId) {
//     for (let city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.address = city
//         }
//     }
// }

// console.log(usersWithId);
