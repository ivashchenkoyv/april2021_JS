// - створити функцію яка обчислює та повертає площу прямокутника висотою



// function square (a,b){

//     sqr=a*b;
//     return sqr
// }

// square(10,20)
// console.log (sqr)







// - створити функцію яка обчислює та повертає площу кола

// function sqCircle (r){

// const pi=3.1415;
// r2=Math.pow(r,2)

// sqC=pi*r2;


// return sqC

// }

// sqCircle(30)
// console.log(sqC)






// - створити функцію яка обчислює та повертає площу циліндру


// function cilVolume(h,r){

// const pi=3.1415
// cVl=pi*r*r*h;

// return cVl

// }

// cilVolume(25,12);
// console.log(cVl)







// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function anyMax (){

// let max=arguments[0];

// for(i of arguments ) {
//     if (max<i){
//         max=i
//     }
// }
// console.log (max)
// }

// anyMax(258,12,98,1,990,1256,23)





// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]



// let ar1 = [9, 8, 0, 4]

// function replaysInd(ar, i) {

//     x = ar[i]
//     ar[i] = ar[i + 1]
//     ar[i + 1] = x

//     console.log(ar)
// }

// replaysInd(ar1, 2)




// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]



// let ar1 = [0,0,1,0,1,0,6,0,3,0,1,2,3,4,0,0,1,0]

// function slideZero(ar) {

//     for (i = ar.length-1; i > -1; i = i - 1) {

//         if (ar[i] == 0) {

//             ar.push(0);
//             ar.splice(i, 1);

//         }

//     }
//     console.log(ar)
// }
// slideZero(ar1)



// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'



let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '


// function validNames(name) {                                                                      //мій віріант//
//     let split = []
//     let push = []
//     let validName=0
//     split = name.split(' ')

//     for (i = 0; i < split.length; i++) {

//         if (split[i] != "") {

//             splice = split.splice(i, 1)
//             push.push(splice[0])
//             join = push.join(' ')
//             validName = join

//         }

//     }
//     console.log(validName)
// }


// let valn1 = validNames(n1)
// let valn2 = validNames(n2)
// let valn3 = validNames(n3)




// function validNames(name) {                //варіант 2//

//     const res=[]
//     for(const item of name.split(' ') ){
// if (item){
//     res.push(item)
// }
//     }

//     return res.join(' ')
// }

// let valn1 = validNames(n1)
// let valn2 = validNames(n2)
// let valn3 = validNames(n3)

// console.log(valn1)
// console.log(valn2)
// console.log(valn3)