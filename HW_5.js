/* 1.Напишите функцию  калькулятор , в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.
example:  function calculate(a, b, operator){} */

function sum(num1, num2) {
  return num1 + num2
}

function substract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  if (num2 == 0) return "You can't divide by zero. Please enter another number.";
  return num1 / num2
}

function calc(num1, num2, sign) {
  let result = 0;
  if (isNaN(num1) || isNaN(num2)) result = 'Please, enter a number'
  else if (sign == '+') result = sum(num1, num2)
  else if (sign == '-') result = substract(num1, num2)
  else if (sign == '*') result = multiply(num1, num2)
  else if (sign == '/') result = divide(num1, num2)
  else result = 'Please enter a right sign';

  return result
}

console.log(calc(10, 5, '$'));

/* 2. Напишите пошаговый алгоритм приготовления кофе и выведите его на экран (страницу).
Requirements for Coffee
When user first come he should see a welcome message
There are three types of cup sizes
User should be able to see cup prices for each size before an  order
There are two recipes at this time, we should able to update code if added new recipe
Show to a user the name and the  ingredients of each type of coffee before an order
User should be able to make an order, by choosing cup size and coffee type
When a choice is made, calculate the price based on cup size. Show steps for the recipe and order price.
If user is lactose free, remove milk step from the recipe

Details: price, names of coffee, ingredients, cup sizes, recipe, welcome message details or text, final message,do we have confirm option,  payment method, how to calc price, business type, recipe for lactose free option, what milk choice do we have?, sugar Is or Not, */
