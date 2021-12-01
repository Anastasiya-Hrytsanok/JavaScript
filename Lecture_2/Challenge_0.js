const me = {Фамилия: 'Гриценок', Имя: 'Анастасия', Отчество: 'Владимировна'};
console.table({me});
let facts = ['люблю спать', 'люблю кушать'];
console.group('Факты обо мне, получется:');
for (let i = 0; i < facts.length; i++) {
    console.log('- ' + facts[i]);
};