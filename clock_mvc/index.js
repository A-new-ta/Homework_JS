"use strict";

// New York clock

const clockNewYork = new ClockModel('America/New_York');
const viewNewYork = new ClockViewDOM(250, 'Нью-Йорк', clockNewYork);
const controllerNewYork = new ClockControllerButtons();
viewNewYork.clockInit();
clockNewYork.getView(viewNewYork);
clockNewYork.getTime();
controllerNewYork.controlButtons(clockNewYork, 'Нью-Йорк');

// London clock

const clockLondon = new ClockModel('Europe/London');
const viewLondon = new ClockViewDOM(250,'Лондон', clockLondon);
const controllerLondon = new ClockControllerButtons();
viewLondon.clockInit();
clockLondon.getView(viewLondon);
clockLondon.getTime();
controllerLondon.controlButtons(clockLondon, 'Лондон');

//Berlin clock

const clockBerlin = new ClockModel('Europe/Berlin');
const viewBerlin = new ClockViewSVG(250, 'Берлин', clockBerlin);
const controllerBerlin = new ClockControllerButtons();
viewBerlin.clockInit();
clockBerlin.getView(viewBerlin);
clockBerlin.getTime();
controllerBerlin.controlButtons(clockBerlin, 'Берлин');

// Minsk clock

const clockMinsk = new ClockModel('Europe/Minsk');
const viewMinsk = new ClockViewSVG(250, 'Минск', clockMinsk);
const controllerMinsk = new ClockControllerButtons();
clockMinsk.getView(viewMinsk);
viewMinsk.clockInit();
clockMinsk.getTime();
controllerMinsk.controlButtons(clockMinsk, 'Минск');

// Tokyo clock

const clockTokyo = new ClockModel('Asia/Tokyo');
const viewTokyo = new ClockViewCanvas(250, 'Токио', clockTokyo);
const controllerTokyo = new ClockControllerButtons();
clockTokyo.getView(viewTokyo)
viewTokyo.clockInit();
clockTokyo.getTime();
controllerTokyo.controlButtons(clockTokyo, 'Токио');

// Vladivostok clock

const clockVladivostok = new ClockModel('Asia/Vladivostok');
const viewVladivostok = new ClockViewCanvas(250, 'Владивосток', clockVladivostok);
const controllerVladivostok = new ClockControllerButtons();
clockVladivostok.getView(viewVladivostok);
viewVladivostok.clockInit();
clockVladivostok.getTime();
controllerVladivostok.controlButtons(clockVladivostok, 'Владивосток');