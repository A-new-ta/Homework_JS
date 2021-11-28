"use strict";

class ClockModel {
  hours;
  minutes;
  seconds;
  runClock = true;
  timer;
  view;

  constructor(timezone) {
      this.timezone = timezone;
  }

  getView(view) {
     this.view = view;
  }

  getTime() {
      let date = new Date();
      let localeTime = date.toLocaleTimeString('ru', { timeZone: this.timezone }).split(':');
      let hours = Number(localeTime[0]);
      let minutes = Number(localeTime[1]);
      let seconds = Number(localeTime[2]);
      this.minutes = minutes;
      this.hours = hours;
      this.seconds = seconds;
      this.view.updateTime();
      this.timer = setTimeout(() => {this.getTime()}, 1020 - date.getMilliseconds());
  }

  startClock() {
      this.getTime();
  }

  stopClock() {
      clearTimeout(this.timer);
  }
}