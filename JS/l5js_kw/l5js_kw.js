// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)


let main_header = document.getElementById('main_header');
main_header.innerText = 'apr-2021-tuesday'
console.log(main_header)


let ul_list = document.getElementsByTagName('ul');
for (const ul of ul_list) {
    ul.style.width = '400px'
}
console.log(ul_list);


let linkList = document.getElementsByClassName('linkList');
for (const link of linkList) {
    link.style.width = '50%'
}
console.log(linkList)


let l2 = 'new text for element2'
listelement2 = document.getElementsByClassName('listelement2');
listelement2.innerText = l2

console.log(listelement2)


let all_li = document.getElementsByTagName('li');
for (const li of all_li) {

    li.style.background = 'gray'
}


let all_a = document.getElementsByTagName('a');
for (const a of all_a) {


    // a.className='anchor'              //task f//



    // if (a.innerText=='link3'){           //task g//
    //     a.style.fontSize='40px'
    // }
//

    let XXX= 'asdasdasd'                    //task h//
   a.className='element_'+XXX


}







let sub_header=document.getElementsByClassName('sub-header');           //task i//

for (const subHeaderElement of sub_header) {
    subHeaderElement.style.background=prompt('enter background color')

}





// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//

// ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар