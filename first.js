/*
1. Напишите функцию, которая берет массив объектов и возвращает массив значений определенного поля:

const chars = [
  { 'name': 'tony', 'age': 20 },
  { 'name': 'feel', 'age': 30 }
];

console.log(pluck(chars, 'name')); // ['tony', 'feel']
*/

const objectArray = [
    { 'name': 'tony', 'age': 20 },
    { 'name': 'feel', 'age': 30 }
];

const parserFunction = (array, key) =>
{
    return array.map((element) => element[key] )
};

console.log(parserFunction(objectArray, 'name'));