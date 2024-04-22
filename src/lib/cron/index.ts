import cron from 'node-cron';

class Cron {
  #cron;

  constructor() {
    this.#cron = cron;
  }

  schedule(cronTiming: string, callback: () => void) {
    return this.#cron.schedule(cronTiming, () => {
      callback();
    }, {
      scheduled: false
    });
  }
}

export {
  Cron
};