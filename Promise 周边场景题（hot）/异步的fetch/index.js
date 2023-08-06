function request(url, options) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, options);
      resolve(await response.json());
    } catch (error) {
      reject(error);
    }
  });
}
