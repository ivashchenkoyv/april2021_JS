// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

// function User(id, name, surname, email, phone) {

//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;


// }

// let users = [
//     new User(1, 'Pavlo', 'Ivashchenko', 'sklgj@gmail.com', 0994561237),
//     new User(2, 'Ivan', 'Shevchenko', 'sss@gmail.com', 0674561237),
//     new User(3, 'Ihor', 'Sokolenko', 'ihor@gmail.com', 0934564566),
//     new User(4, 'Dmytro', 'Horyslavec', 'horik@gmail.com', 0504569632),
//     new User(5, 'Anna', 'Kuznjetsova', 'kuzya@gmail.com', 0639517536),
//     new User(6, 'Svitlana', 'Svitla', 'ssvit@gmail.com', 0502587815),
//     new User(7, 'Tetyana', 'Matvienko', 'matvij@gmail.com', 0504564215),
//     new User(8, 'Kateryna', 'Bilenko', 'kb@gmail.com', 0664569865),
//     new User(9, 'Andriy', 'Nahov', 'nah@gmail.com', 0672561226),
//     new User(10, 'Olena', 'Zarina', 'ozar@gmail.com', 0959461237)

// ]

// console.log(users)



// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Client {

    constructor(id, name, surname, email, phone, order)

    {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }

}


let clients = [

    new Client(1, 'Pavlo', 'Ivashchenko', 'sklgj@gmail.com', 0994561237, ['bread','pen','foam']),
    new Client(2, 'Ivan', 'Shevchenko', 'sss@gmail.com', 0674561237, ['butter','soap','milk','tomato','fish']),
    new Client(3, 'Ihor', 'Sokolenko', 'ihor@gmail.com', 0934564566, ['cherry','soap','apple','cola','water']),
    new Client(4, 'Dmytro', 'Horyslavec', 'horik@gmail.com', 0504569632, ['milk','pineapple']),
    new Client(5, 'Anna', 'Kuznjetsova', 'kuzya@gmail.com', 0639517536, ['cola','tomato', 'bread']),
    new Client(6, 'Svitlana', 'Svitla', 'ssvit@gmail.com', 0502587815, ['cola','foam','soap']),
    new Client(7, 'Tetyana', 'Matvienko', 'matvij@gmail.com', 0504564215, ['water','potato','cucumber']),
    new Client(8, 'Kateryna', 'Bilenko', 'kb@gmail.com', 0664569865, ['apple','icecream','tomato','cucumber']),
    new Client(9, 'Andriy', 'Nahov', 'nah@gmail.com', 0672561226, ['pineapple','pen']),
    new Client(10, 'Olena', 'Zarina', 'ozar@gmail.com', 0959461237, ['bisquits','pencil'])
]

// console.log(clients)


// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car(model, brand, year, speed, engine) {

//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.speed = speed;
//     this.engine = engine;
//     this.newSpeed = 0
//     this.driver={}

//     this.drive = function () {
// console.log(`Їдемо зі швидкістю ${this.speed} км на годину`)
//     }

//     this.info = function () {
//         console.log(model, brand, year, speed, engine)
//     }

//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed = newSpeed + speed
//     }
//     this.changeYear =function(newValue){

//         this.year=newValue
//     }
// this.addDriver=function(driver){
// this.driver=driver

// }
// }


// let corola = new Car('Corola', 'Toyota', 2019, 165, 1560)
// // corola.drive()
// // corola.info()
// // corola.changeYear(1974)
// corola.addDriver({id:1,age:25,name:'Yu',})
// console.log(corola)





// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car {
//     constructor(model, brand, year, speed, engine) {

//         this.model = model;
//         this.brand = brand;
//         this.year = year;
//         this.speed = speed;
//         this.engine = engine;
//         this.driver = {}
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.speed}км на годину`);
//     }

//     info() {

//         console.log(this.model, this.brand, this.year, this.speed, this.engine);
//     }

//     increaseMaxSpeed(newSpeed) {

//         this.speed = this.speed + newSpeed
//     }

//     changeYear(newValue) {

//         this.year = newValue
//     }


//     addriver(driver) {
//         this.driver = driver


//     }

// }




// let corola = new Car('Corola', 'Toyota', 2019, 165, 1560)
// corola.info()
// corola.drive()
// corola.increaseMaxSpeed(25)
// corola.changeYear(1982)
// corola.addriver({
//     age: 28,
//     skill: 'F1',
//     name: 'Michael'
// })
// console.log(corola)



// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню





// let filter = users.filter(user => !(user.id % 2));
// // console.log(filter);

// let sortUp = users.sort((user1, user2) => user1.id - user2.id);
// console.log(sortUp);

// let sortDown = users.sort((user1, user2) => user2.id - user1.id)
// console.log(sortDown);







// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню


let sortOrderDown=clients.sort((client1,client2)=>client2.order.length-client1.order.length)
console.log(sortOrderDown)


