'use strict';

function HashStorageFunc() {
    let storage = {};
    this.addValue = function (key, value) {
        storage[key] = value;
    };
    this.getValue = function (key) {
        return storage[key];
    };
    this.deleteValue = function (key) {
        if (key in storage) {
            delete storage[key];
            return true;
        }
        return false;
    };
    this.getKeys = function () {
        return Object.keys(storage);
    };
}

let newStorage = new HashStorageFunc();

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
    
    newStorage.addValue(name, { alcoholic: alcoStr, recipe: recipeInfo });
    alert('вы добавили новый напиток');
}

function getDrink() {
    let name = prompt('введите название напитка');
    let info = newStorage.getValue(name);
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
    let del = newStorage.deleteValue(name)
    if (del) {
        alert ('напиток удален')
    }
    else {
        alert('напиток не найден');
    }
}

function getKeysDrink() {
    let drinks = newStorage.getKeys();
    if (drinks.length === 0) {
        return alert ('нет ни одного напитка')
    }
    else {
        alert(`напитки в хранилище: ${drinks}`);
    }
}

