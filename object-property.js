const students = [
    { id: 21, name: 'omor Sunny' },
    { id: 11, name: 'Mouri ' },
    { id: 100, name: 'Dipjol ' },
    { id: 210, name: 'Manna' }
];
const studentArray = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id < 40);
const biggerOne = students.find(s => s.id > 100);
console.log(biggerOne);