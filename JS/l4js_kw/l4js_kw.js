// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {

//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;

//     }

// }

// let cinderellas = [

//     new Cinderella('Klavdiya', 52, 43),
//     new Cinderella('Galya', 18, 35),
//     new Cinderella('Veronika', 28, 39),
//     new Cinderella('Tetyana', 19, 37),
//     new Cinderella('Mariya', 43, 43),
//     new Cinderella('Izaura', 86, 39),
//     new Cinderella('Yulia', 35, 41),
//     new Cinderella('Evgeniya', 28, 42),
//     new Cinderella('Sofiya', 21, 37),
//     new Cinderella('Anna', 23, 38)

// ]

// class Prince{
//     constructor(name,age,findingshoes){
//         this.name=name;
//         this.age=age;
//         this.findingshoes=findingshoes
//     }
// }


// let prince =  new Prince ('Andriy', 25, 35)


// let itsMyCinderella=cinderellas.find((cinderellas)=>{return cinderellas.footsize==prince.findingshoes})

// console.log(itsMyCinderella)




// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// let cinderellas = [

//     new Cinderella('Klavdiya', 52, 43),
//     new Cinderella('Galya', 18, 35),
//     new Cinderella('Veronika', 28, 39),
//     new Cinderella('Tetyana', 19, 37),
//     new Cinderella('Mariya', 43, 43),
//     new Cinderella('Izaura', 86, 39),
//     new Cinderella('Yulia', 35, 41),
//     new Cinderella('Evgeniya', 28, 42),
//     new Cinderella('Sofiya', 21, 37),
//     new Cinderella('Anna', 23, 38)

// ]



// function Cinderella(name, age, footsize) {

//     this.name = name;
//     this.age = age;
//     this.footsize = footsize;
//     this.cinderellas = []


// }



// let prince = new Prince('Andriy', 25, 35)





// function Prince(name, age, findingshoes) {

//     this.name = name;
//     this.age = age;
//     this.findingshoes = findingshoes;
//     this.cinderellas = cinderellas
//     this.prince = []

// }


// function myCinderella (cin,pri) {

//    let c= cin.find((cin) => cin.footsize == pri.findingshoes)



//     console.log(c)

// }

// myCinderella(cinderellas,prince)





// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }



// function TagProperties(title, action, attrs) {

//     this.title = title;
//     this.action = action;
//     this.attrs = {}
//     this.addAttrProp = function (attrs) {
//         this.attrs = attrs
//     }
// }


// let a = new TagProperties('a', 'Устанавливает ссылку или якорь');

// a.addAttrProp({
//     accesskey: 'Активация ссылки с помощью комбинации клавиш',
//     coords: 'Устанавливает координаты активной области'
// })

// console.log(a)


// let div = new TagProperties('div', 'является блочным элементом');

// div.addAttrProp({
//     align: 'Задает выравнивание содержимого тега <div>', title:'Добавляет всплывающую подсказку к содержимому'
// })

// console.log(div)


// let h1=new TagProperties('h1','Заголовок первого уровня');
// h1.addAttrProp({align:'Определяет выравнивание заголовка'});

// console.log(h1)
