class EventEmitter {
  constructor() {
    this.event = {};
  }

  on(type, cb) {
    if (!this.event[type]) this.event[type] = [cb];
    else this.event[type].push(cb);
  }

  off(type, cb) {
    if (this.event[type]) {
      this.event[type] = this.event[type].filter((fn) => fn !== cb);
    }
  }

  emit(type, ...args) {
    if (this.event[type]) {
      this.event[type].forEach((cb) => cb(...args));
    }
  }

  once(type, cb) {
    const onceFn = (...args) => {
      cb(...args);
      this.off(onceFn);
    };
    this.on(type, onceFn);
  }
}
