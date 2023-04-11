let str = 'Hello world!'; // {1:'H', 2:'e'...}
for (let i = 0; i < str.length; i++) {
  // console.log(str[i]);
}
for (let i in str) {
  //  console.log(str[i]);
}
let arr = [1, 2, 3, 'j'];
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}
for (let i in arr) {
  //  console.log(arr[i]);
}
for (let el of arr) {
  //  console.log(el)
}

let obj = {
  1: 'a',
  2: 'b',
  3: 'c',
}
for (let key in obj) {
  //  console.log(key, obj[key]);
}

let objFromString = {}; //строку в объект, индексы строки - ключи объекта, символы - значения ключей
for (let i = 0; i < str.length; i++) {
  objFromString[i + 1] = str[i] //  ключ = индексу строки +1, а значение ключа = символу строки:
  //objFromString[1] ="Н" =>{ 1: 'H'}
}
//console.log('objFromString: ', objFromString);

objFromString['name'] = 'Anna'; // coздать новый ключ со значением в объекте
objFromString['name'] = 'Anja';
objFromString['firstName'] = 'Anna';
objFromString['lastName'] = 'Pavlova';

delete objFromString.name; // удалить элемента объекта
delete objFromString['12'];
delete objFromString[str.length - 1];

//console.log('objFromString: ', objFromString);
//console.log('objFromString.name: ', objFromString.name);
//console.log( objFromString[9]);

console.log(Object.keys(objFromString)); // массив ключей
console.log(Object.values(objFromString)); // массив значений
console.log(Object.entries(objFromString)) // массив пар - ключ: значение