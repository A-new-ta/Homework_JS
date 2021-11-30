"use strict";

class ClockControllerButtons {
//   model;

  controlButtons(modelName, city) {
      this.modelName = modelName;

      let start = document.querySelector('.button-start-' + city);
      start.addEventListener('click', (eo) => {
          if (!this.modelName.runClock) {
              this.modelName.runClock = true;
              this.modelName.startClock();
          }
      });

      let stop = document.querySelector('.button-stop-' + city);
      stop.addEventListener('click', (eo) => {
          this.modelName.runClock = false;
          this.modelName.stopClock();
      });
  }
}
