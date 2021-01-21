/*
3. Напишите функцию, которая принимает на входе массив и число, обозначающее размер группы,
 на которые нужно разделить исходный массив

const arr1 = splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 2);

console.log(arr1); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
*/
const arr1 = splitArray(["a", "b", "c", "d", "e", "f"], 2);

function splitArray(array, groupSize) {
  return array.reduce((acc, next) => {
    console.log(acc);
    acc.push(next);
    let newArray = new Array(groupSize);
    return acc.length < groupSize ? acc : acc.push(newArray);
  }, new Array());
}

console.log(arr1);
