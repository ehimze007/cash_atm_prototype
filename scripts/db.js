const deepFreezeObject = (obj) => {
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach((prop) => {
    if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop])) {
      deepFreezeObject(obj[prop]);
    }
  });

  return obj;
};

const LuhnAlgorithm = (digit) => {
  if (/[^0-9\s]+/.test(digit)) return false;

  digit = digit.replace(/\s/g, "");

  if (digit.length <= 1) return false;

  let sum = 0;
  let secondDigit = false;

  for (let i = digit.length - 1; i >= 0; i--) {
    let odigit = digit.charAt(i);
    let cdigit = parseInt(odigit);

    if (secondDigit) {
      cdigit *= 2;
      if (cdigit > 9) {
        cdigit = parseInt(cdigit / 10) + (cdigit % 10);
      }
    }

    sum += cdigit;

    secondDigit = !secondDigit;
  }

  return sum % 10 === 0;
};

const fakeDb = deepFreezeObject({
  5500875451285166: {
    name: "Blessing Ehimze",
    pin: "8097",
    accBalance: 67679080,
    cardHotlisted: false,
    blocked: false,
  },
});


const dataBaseCall = (ms) =>
  new Promise((resolve) => setTimeout(resolve(fakeDb), ms));
