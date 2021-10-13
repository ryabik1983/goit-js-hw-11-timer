class CountdownTimer {
    constructor({ selector, targetDate }) {
      this._selector = selector;
      this._targetDate = targetDate;
    }
    start() {
      if (Date.now() < this._targetDate) {
        let timerId = setInterval(() => {
          const currentTime = Date.now();
          const deltaTime = this._targetDate - currentTime;
          this.updateTimer(deltaTime);
        }, 1000);
      } else {
        clearInterval(timerId);
      }
    }
    updateTimer(time) {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const minutes = this.pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      );
      const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      const timer1 = document.querySelector(`${this._selector}`);
      const dataDays = timer1.querySelector('[data-value="days"]');
      const dataHours = timer1.querySelector('[data-value="hours"]');
      const dataMinutes = timer1.querySelector('[data-value="mins"]');
      const dataSeconds = timer1.querySelector('[data-value="secs"]');
      dataDays.textContent = days;
      dataHours.textContent = hours;
      dataMinutes.textContent = minutes;
      dataSeconds.textContent = seconds;
    }
    pad(value) {
      return String(value).padStart(2, "0");
    }
  }
  
  const newTimer = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2022"),
  });
  newTimer.start();
  
  const newTimer2 = new CountdownTimer({
    selector: "#timer-2",
    targetDate: new Date("Dec 31, 2021"),
  });
  newTimer2.start();