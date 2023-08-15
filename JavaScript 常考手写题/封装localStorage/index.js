class MyCache {
  static _instance = null;
  constructor() {
    if (MyCache._instance) return MyCache._instance;
    MyCache._instance = this;
  }
  setItem(key, value, expires) {
    const newValue = { ...value, timeStamp: Date.now() + expires };
    localStorage.setItem(key, JSON.stringify(newValue));
  }
  getItem(key) {
    const item = localStorage.getItem(key);
    if (!item) return null;
    const value = JSON.parse(item);
    if (Date.now() >= value.timeStamp) {
      localStorage.removeItem(key);
      return null;
    }

    delete value.timeStamp;
    return value;
  }
}

const cache1 = new MyCache();
const cache2 = new MyCache();
console.log(cache1 === cache2);

// cache.setItem("test", { a: 1, b: 2 }, 3000);

// setTimeout(() => {
//   console.log(cache.getItem("test"));
// }, 2000);
