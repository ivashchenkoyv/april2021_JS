// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
//     b) отримує текст з блоку з id "rules"
//     c) замініть текст параграфа з id 'content' на будь-який інший
//     d) замініть текст параграфа з id 'rules' на будь-який інший
//     e) змініть кожному елементу колір фону на червоний
//     f) змініть кожному елементу колір тексту на синій
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//     h) отримати всі елементи з класом fc_rules
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний



let content = document.getElementById('content');
content.innerText = 'any other text like lorem';
content.style.background = 'red';
content.style.color = 'blue';


console.log(content);





let rules = document.getElementById('rules');
rules.innerText = 'other anytext like lorem to id rules';
rules.style.background = 'red';
rules.style.color = 'blue';
console.log(rules);
let classList = rules.classList;

console.log(classList);

let fc_rules=document.getElementsByClassName('fc_rules');

for (const text of fc_rules){
    text.style.color='red'
}

console.log(fc_rules);
