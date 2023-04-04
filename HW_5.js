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

function calc(num1, num2, operator) {
  let result = 0;
  if (isNaN(num1) || isNaN(num2)) result = 'Please, enter a number'
  else if (operator == '+') result = sum(num1, num2)
  else if (operator == '-') result = substract(num1, num2)
  else if (operator == '*') result = multiply(num1, num2)
  else if (operator == '/') result = divide(num1, num2)
  else result = 'Please enter a right sign';

  return result
}

//console.log(calc(10, 5, '$'));
//console.log(calc(10, 5, '+'));

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

function showWelcomMessage() {
  console.log('Welcom to our self-service cafe');
  console.log('We have different cup size. Please, choose one: \n');
}
//console.log(showWelcomMessage());

function showCupsOption() {
  let smallCup = 'small cup';
  let mediumCup = 'medium cup';
  let largeCup = 'large cup';
  let price = 5;

  let cupsOption = [[smallCup, price], [mediumCup, (price * 1.5)], [largeCup, (price * 2)]];

  for (let i = 0; i<cupsOption.length; i++) {
    console.log(cupsOption[i][0] + ' ' + '-' +  ' ' + cupsOption[i][1] + ' '  + '$');
    if (i === cupsOption.length - 1 ) {
      console.log('\n');
    }
  }
}
//console.log(showCapOption());

function showCoffeTypesAndIngridients() {
  let latte = 'Latte';
  let icedCoffee = 'Iced Coffee';
  let beansArabica = 'Arabica ground beans';
  let beansEthiopian = 'Ethiopian ground beans';
  let hotWater = 'hot water';
  let coldWater = 'cold water';
  let latteIngredients = `${latte}: \n 1 spoon of ${beansArabica} \n ${hotWater} \n milk \n`;
  let IcedCoffeeIngredients = `${icedCoffee}: \n 1 spoon of ${beansEthiopian} \n ${coldWater} \n milk \n`;

  console.log('We have following coffee types. Please, choose one: \n');

  let menu = [latteIngredients, IcedCoffeeIngredients]

  for (let i = 0; i<menu.length; i++) {
    console.log(menu[i]);
  }
}
//console.log(showCoffeTypesAndIngridients());

function setWaterForCoffee(coffeeType) {
  if (coffeeType.toLowerCase() == 'iced coffee') {
    return water = 'cold water'
  } else {
    return water = 'hot water';
  }
}
//console.log(setWaterForCoffee('cold water'))

function getPrice(cupSize) {
  let price = 5;
  if (cupSize == 'small') {
    return price
  } else if (cupSize == 'medium') {
    return price *= 1.5
  } else if (cupSize == 'large') {
    return price *= 2
  }
}
//console.log(getPrice('small'));

function showRecipeToClient(cupSize, coffeeType,isLactoseFree, milk = 'half&half milk') {
  let water = setWaterForCoffee(coffeeType);
  let price = getPrice(cupSize);
  let order = `You choosed a ${cupSize} cup of ${coffeeType.toLowerCase()} \n Follow the steps: `;
  let step1 = ` Take a ${cupSize} cup`;
  let step2 = ` Put 1 spoon of coffeee in it`;
  let step3 = ` Pour ${water} in a cup with coffee`;
  let step4 = ` Pour ${milk} in a cup with coffee`;
  let step5 = ` Stir coffee in a cup with a spoon`;
  let orderPrice = `The order price is ${price}`;
  let result = `Enjoy your coffee`;

  let recipe = [step1, step2, step3, step4, step5];
  let stepNum = 1;
  let clientRecipe = '';

  for (let i = 0; i< recipe.length; i++) {
    if (isLactoseFree == true && recipe[i] == step4) continue;
    clientRecipe = clientRecipe + (stepNum++) + recipe[i] + '\n';
  }

  console.log(order + '\n' + clientRecipe + '\n' + orderPrice + '\n' + result);

}

showWelcomMessage();
showCupsOption();
showCoffeTypesAndIngridients();

showRecipeToClient('small', 'latte', false, 'coconut milk');
showRecipeToClient('small', 'latte', false);
showRecipeToClient('small', 'latte', true);
