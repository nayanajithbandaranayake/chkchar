const checkValid = (phrase) => {
  if (typeof phrase !== "string")
    throw new Error("Please provide a string to chkchar.");
};

const caps_values = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numbers_values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols_values = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "/",
  "?",
  "'",
  '"',
  ":",
  ";",
  ">",
  "<",
  ".",
  ",",
  "|",
  "£",
];

module.exports.caps = (phrase) => {
  checkValid(phrase);
  let cap_count = 0;
  let found = [];
  for (let char of phrase) {
    for (let cap of caps_values) {
      if (char === cap) {
        cap_count++;
        if (!found.includes(cap)) found.push(cap);
      }
    }
  }
  if (cap_count === 0) {
    return {
      status: false,
      count: 0,
      found,
    };
  } else {
    return {
      status: true,
      count: cap_count,
      found,
    };
  }
};
module.exports.numbers = (phrase) => {
  checkValid(phrase);
  let number_count = 0;
  let found = [];
  for (let char of phrase) {
    for (let number of numbers_values) {
      if (char === number) {
        number_count++;
        if (!found.includes(number)) {
          found.push(number);
        }
      }
    }
  }
  if (number_count === 0) {
    return {
      status: false,
      count: 0,
      found: [],
    };
  } else {
    return {
      status: true,
      count: number_count,
      found,
    };
  }
};
module.exports.symbols = (phrase) => {
  checkValid(phrase);
  let sign_count = 0;
  let found = [];
  for (let char of phrase) {
    for (let sign of symbols_values) {
      if (char === sign) {
        sign_count++;
        if (!found.includes(sign)) found.push(sign);
      }
    }
  }
  if (sign_count === 0) {
    return {
      status: false,
      count: 0,
      found: [],
    };
  } else {
    return {
      status: true,
      count: sign_count,
      found,
    };
  }
};

module.exports.isEnglish = (phrase) => {
  checkValid(phrase);
  const converted = phrase.toUpperCase();
  for (let char of converted) {
    for (let cap of caps_values) {
      if (char !== cap) return false;
    }
  }
  return true;
};

module.exports.allNums = (phrase) => {
  checkValid(phrase);
  for (let char of phrase) {
    for (let num of numbers_values) {
      if (char !== num) return false;
    }
  }
  return true;
};

module.exports.allSymbols = (phrase) => {
  checkValid(phrase);
  for (let char of phrase) {
    for (let sign of symbols_values) {
      if (char !== sign) return false;
    }
  }
  return true;
};

module.exports.allCaps = (phrase) => {
  checkValid(phrase);
  for (let char of phrase) {
    for (let cap of caps_values) {
      if (char !== cap) return false;
    }
  }
  return true;
};

module.exports.fullCount = (phrase) => {
  checkValid(phrase);
  const { count: cap_count } = this.caps(phrase);
  const { count: num_count } = this.numbers(phrase);
  const { count: sign_count } = this.symbols(phrase);

  return {
    caps: cap_count,
    numbers: num_count,
    symbols: sign_count,
  };
};
