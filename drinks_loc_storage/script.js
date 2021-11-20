'use strict';

let drinkStorage = new LocStorageClass('locDrink');

function addDrink() {
    let name = prompt('введите название напитка');
    let alco = confirm('напиток алкогольный?');
    let alcoStr;
    if (alco) {
        alcoStr = 'да'
    }
    else {
        alcoStr = 'нет';
    }
    let recipeInfo = prompt('введите рецепт приготовления напитка');
    
    drinkStorage.addValue(name, { alcoholic: alcoStr, recipe: recipeInfo });
    alert('вы добавили новый напиток');
}

function getDrink() {
    let name = prompt('введите название напитка');
    let info = drinkStorage.getValue(name);
    if (info) {
        alert(`
        напиток: ${name}
        алкогольный: ${info.alcoholic}
        рецепт: ${info.recipe}
        `)
    }
    else
    { return alert('напиток не найден') }
}

function deleteDrink() {
    let name = prompt('введите название напитка');
    let del = drinkStorage.deleteValue(name)
    if (del) {
        alert ('напиток удален')
    }
    else {
        alert('напиток не найден');
    }
}

function getKeysDrink() {
    let drinks = drinkStorage.getKeys();
    if (drinks.length === 0) {
        return alert ('нет ни одного напитка')
    }
    else {
        alert(`напитки в хранилище: ${drinks}`);
    }
}


let dishStorage = new LocStorageClass('locDishes');

function addDish() {
    let name = prompt('введите название блюда');
    let veg = confirm('блюдо вегетарианское?');
    let vegStr;
    if (veg) {
        vegStr = 'да'
    }
    else {
        vegStr = 'нет';
    }
    let recipeInfo = prompt('введите рецепт приготовления блюда');
    
    dishStorage.addValue(name, { vegetarian: vegStr, recipe: recipeInfo });
    alert('вы добавили новое блюдо');
}

function getDish() {
    let name = prompt('введите название блюда');
    let info = dishStorage.getValue(name);
    if (info) {
        alert(`
        блюдо: ${name}
        вегетарианское: ${info.vegetarian}
        рецепт: ${info.recipe}
        `)
    }
    else
    { return alert('блюдо не найдено') }
}

function deleteDish() {
    let name = prompt('введите название блюда');
    let del = dishStorage.deleteValue(name)
    if (del) {
        alert ('блюдо удалено')
    }
    else {
        alert('блюдо не найдено');
    }
}

function getKeysDish() {
    let dishes = dishStorage.getKeys();
    if (dishes.length === 0) {
        return alert ('нет ни одного блюда')
    }
    else {
        alert(`блюда в хранилище: ${dishes}`);
    }
}