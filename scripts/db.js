const deepFreezeObject = (obj) => {
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach((prop) => {
    if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop])) {
      deepFreezeObject(obj[prop]);
    }
  });

  return obj;
};

const fakeDb = deepFreezeObject({
  543256789027635: {
    name: "Blessing Ehimze",
    pin: "8097",
    accBalance: 67679080,
    cardHotlisted: false,
    blocked: false,
  },
});

const dataBaseCall = (ms) =>
  new Promise((resolve) => setTimeout(resolve(fakeDb), ms));
