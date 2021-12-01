let style = ['Джаз', 'Блюз'];
console.log(style);

style.push('Рок-нн-Ролл');
console.log(style);

style.splice(style.length - 2, 1, 'Классика');
console.log(style);

let first = style.splice(0, 1);
alert(first);
console.log(style);

style.unshift('Рэп', 'Рэгги');
console.log(style);